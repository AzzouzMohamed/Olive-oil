import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ReservationData {
  id: string;
  client_name: string;
  client_email: string;
  meeting_date: string;
  meeting_time: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { reservationId }: { reservationId: string } = await req.json();

    const { data: reservation, error: fetchError } = await supabase
      .from('reservations')
      .select('*')
      .eq('id', reservationId)
      .maybeSingle();

    if (fetchError || !reservation) {
      throw new Error('Reservation not found');
    }

    const googleCalendarApiKey = Deno.env.get('GOOGLE_CALENDAR_API_KEY');
    const googleCalendarId = Deno.env.get('GOOGLE_CALENDAR_ID');

    if (!googleCalendarApiKey || !googleCalendarId) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Reservation created, but Google Calendar integration not configured',
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const startDateTime = `${reservation.meeting_date}T${reservation.meeting_time}:00`;
    const startDate = new Date(startDateTime);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    const event = {
      summary: `Meeting with ${reservation.client_name}`,
      description: `Client: ${reservation.client_name}\nEmail: ${reservation.client_email}\nPhone: ${reservation.client_phone}\nMessage: ${reservation.message || 'No message'}`,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: 'Africa/Tunis',
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'Africa/Tunis',
      },
      attendees: [
        { email: reservation.client_email },
      ],
    };

    const calendarResponse = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${googleCalendarApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${googleCalendarApiKey}`,
        },
        body: JSON.stringify(event),
      }
    );

    if (!calendarResponse.ok) {
      const errorText = await calendarResponse.text();
      console.error('Google Calendar API error:', errorText);
      throw new Error('Failed to create calendar event');
    }

    const calendarEvent = await calendarResponse.json();

    await supabase
      .from('reservations')
      .update({
        google_calendar_event_id: calendarEvent.id,
        status: 'confirmed',
      })
      .eq('id', reservationId);

    return new Response(
      JSON.stringify({
        success: true,
        eventId: calendarEvent.id,
        message: 'Calendar event created successfully',
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});