/*
  # Create Reservations Table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key) - Unique identifier for each reservation
      - `client_name` (text) - Name of the client making the reservation
      - `client_email` (text) - Email address of the client
      - `client_phone` (text) - Phone number of the client
      - `meeting_date` (date) - Requested date for the meeting
      - `meeting_time` (text) - Requested time for the meeting
      - `message` (text) - Optional message from the client
      - `status` (text) - Status of the reservation (pending, confirmed, cancelled)
      - `google_calendar_event_id` (text, nullable) - ID of the event in Google Calendar
      - `created_at` (timestamptz) - Timestamp when reservation was created
  
  2. Security
    - Enable RLS on `reservations` table
    - Add policy for anyone to create reservations (public form submission)
    - Add policy for authenticated admin to view all reservations
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text NOT NULL,
  meeting_date date NOT NULL,
  meeting_time text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  google_calendar_event_id text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reservations"
  ON reservations FOR SELECT
  TO authenticated
  USING (true);