import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500 text-white">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl max-w-3xl w-full p-10">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>
          <p className="text-center text-purple-100 mb-10">
            We'd love to hear from you! Whether it's feedback, suggestions, or questions—reach out anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4 text-purple-100">
              <div className="flex items-center space-x-3">
                <Mail className="text-white" />
                <span>portfolio.ghana@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-white" />
                <span>+233 55 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-white" />
                <span>Tamale, Ghana</span>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-purple-100 text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-purple-100 text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-purple-100 text-white focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-purple-700 font-semibold py-2 rounded hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
