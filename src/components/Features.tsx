import { Award, Droplet, Heart, Sprout } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Organic & Pure',
    description: 'Cultivated in pristine Tunisian groves using traditional organic farming methods passed down through generations.'
  },
  {
    icon: Droplet,
    title: 'Cold-Pressed',
    description: 'Extra virgin quality achieved through first cold pressing within hours of harvest, preserving all natural nutrients.'
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Rich in antioxidants and healthy fats, promoting heart health and overall wellness with every drop.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Award-winning taste profile with perfect balance of fruity, peppery, and smooth characteristics.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Olive Oil?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every bottle tells a story of tradition, quality, and the rich Mediterranean heritage of Tunisia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
