# Google Calendar Integration Setup

Your website is now ready with a booking system! To enable automatic Google Calendar integration, follow these steps:

## Step 1: Enable Google Calendar API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API for your project
4. Go to "APIs & Services" > "Credentials"

## Step 2: Create Service Account

1. Click "Create Credentials" > "Service Account"
2. Give it a name (e.g., "Calendar Booking")
3. Grant it the role "Editor"
4. Click "Done"

## Step 3: Create and Download Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the key file

## Step 4: Get Your Calendar ID

1. Open [Google Calendar](https://calendar.google.com)
2. Go to Settings > Settings for my calendars
3. Select the calendar you want to use
4. Scroll down to "Integrate calendar"
5. Copy the Calendar ID (looks like: your-email@gmail.com or a long string)

## Step 5: Share Calendar with Service Account

1. In Google Calendar Settings, go to "Share with specific people"
2. Add the service account email (found in the JSON key file under "client_email")
3. Give it "Make changes to events" permission

## Step 6: Configure Environment Variables

The edge function needs these environment variables:
- `GOOGLE_CALENDAR_API_KEY` - Use the private_key from your JSON file
- `GOOGLE_CALENDAR_ID` - Your Calendar ID from Step 4

Note: The booking system will work without Google Calendar integration. Bookings will be stored in the database, but won't automatically create calendar events.

## How It Works

1. Client fills out the booking form
2. Booking is saved to the database
3. The edge function creates an event in your Google Calendar
4. You receive the meeting request with all client details
5. The booking status is updated to "confirmed"

## Viewing Bookings

All bookings are stored in the `reservations` table in your Supabase database. You can view them through the Supabase dashboard or build an admin panel.
