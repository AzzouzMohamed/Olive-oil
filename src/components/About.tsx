import { MapPin, Sun, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Tunisia's Ancient Groves to Your Table
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our olive oil comes from centuries-old olive groves in the heart of Tunisia,
                where the Mediterranean climate and fertile soil create the perfect conditions
                for producing exceptional extra virgin olive oil.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Each bottle represents a commitment to quality, sustainability, and the preservation
                of traditional Tunisian olive oil production methods.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Tunisian Heritage</h3>
                    <p className="text-gray-600">Sourced from the finest olive-growing regions in Tunisia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Perfect Climate</h3>
                    <p className="text-gray-600">Mediterranean sun and soil create unmatched flavor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Family Tradition</h3>
                    <p className="text-gray-600">Generations of expertise in olive oil production</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-600 to-green-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Sprout className="w-32 h-32 mx-auto mb-6 opacity-20" />
                    <p className="text-2xl font-semibold">Premium Quality</p>
                    <p className="text-lg mt-2 opacity-90">Extra Virgin Olive Oil</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sprout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
