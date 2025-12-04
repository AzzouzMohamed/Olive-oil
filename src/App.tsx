import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
