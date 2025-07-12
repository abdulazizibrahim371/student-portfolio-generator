import { Info } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./footer";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 via-purple-500 to-pink-400 text-white">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-xl p-10 max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <Info size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-md">About This Project</h1>
          <p className="text-lg leading-relaxed text-white/90">
            This portfolio generator empowers students from Tamale and beyond to create
            professional portfolios in minutes. It’s mobile-friendly, super easy to use,
            and tailored for students ready to showcase their talent in style.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
