import "./App.css";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Courses from "./components/Courses";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Testimonial />
      <Courses />
      <AppSection />
      <Footer />
    </div>
  );
}

export default App;
