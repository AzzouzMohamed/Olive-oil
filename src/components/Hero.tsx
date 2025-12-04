import { Leaf } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-8 shadow-2xl animate-pulse">
            <Leaf className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Tunisian
            <span className="block text-green-700 mt-2">Olive Oil</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Experience the authentic taste of Tunisia's finest extra virgin olive oil.
            Handpicked from ancient groves, cold-pressed to perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Schedule a Meeting
            </button>
            <a
              href="#about"
              className="px-8 py-4 bg-white text-green-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 border-2 border-green-700 shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-green-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
