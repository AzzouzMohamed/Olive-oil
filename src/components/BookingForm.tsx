import { useState } from 'react';
import { Calendar, Clock, Mail, MessageSquare, Phone, User, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BookingForm() {
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    client_phone: '',
    meeting_date: '',
    meeting_time: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: dbError } = await supabase
        .from('reservations')
        .insert([formData]);

      if (dbError) throw dbError;

      setSuccess(true);
      setFormData({
        client_name: '',
        client_email: '',
        client_phone: '',
        meeting_date: '',
        meeting_time: '',
        message: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Schedule a Meeting
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how our premium olive oil can enhance your business or culinary experience
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-top duration-500">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-green-900 mb-1">Booking Submitted Successfully!</h3>
                <p className="text-green-700">We'll contact you soon to confirm your meeting.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-xl">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="client_name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="client_name"
                    name="client_name"
                    value={formData.client_name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="client_email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="client_email"
                    name="client_email"
                    value={formData.client_email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="client_phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="client_phone"
                    name="client_phone"
                    value={formData.client_phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="meeting_date" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="meeting_date"
                    name="meeting_date"
                    value={formData.meeting_date}
                    onChange={handleChange}
                    min={minDate}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="meeting_time" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="meeting_time"
                    name="meeting_time"
                    value={formData.meeting_time}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-700 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white resize-none"
                    placeholder="Tell us about your interest in our olive oil..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Submitting...' : 'Book Your Meeting'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
