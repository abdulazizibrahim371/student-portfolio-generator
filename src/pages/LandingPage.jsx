import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <nav className="absolute top-4 left-6 right-6 z-50 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">PortfolioGen</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/features" className="text-white hover:text-gray-200">Features</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-purple-700 text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-20">
            Build Your Portfolio in Minutes 🎓
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A simple tool to help students in Ghana and beyond showcase their achievements.
          </p>
          <button
            onClick={handleClick}
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Use This Generator?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>No coding needed. Just fill in a few details.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Locally Relevant</h3>
              <p>Made with students from Ghana in mind.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Share or Export</h3>
              <p>Get a link or download your portfolio as PDF.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
