// Features.jsx
import { Star } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Features() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8">
            <Star size={48} className="mx-auto text-white drop-shadow-lg" />
            <h1 className="text-4xl font-extrabold mb-2 drop-shadow-md">Top Features</h1>
            <p className="text-white/90 text-lg">
              Everything you need to build and share your student portfolio effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Fast & Easy", desc: "Build your portfolio in minutes — no tech skills needed." },
              { title: "Made for Ghana", desc: "Built with students in Ghana, especially Tamale, in mind." },
              { title: "PDF Export", desc: "Download your portfolio or share it as a beautiful PDF." },
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Features;
