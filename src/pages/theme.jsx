const themes = {
  classic: {
    header: "bg-white text-gray-800",
    section: "bg-gray-100 text-gray-900",
    accent: "text-purple-700",
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto", // NEW
  },
  
  dark: {
    header: "bg-white text-gray-800",
    section: "bg-gray-100 text-gray-900",
    accent: "text-black-700",
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto", // keep centered layout
  },
  classic_new: {
    header: "bg-white text-gray-800",
    section: "bg-gray-100 text-gray-900",
    accent: "text-black-700",
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto", // NEW
    headingBg: "bg-gray-200",
  },
  vibrant: {
    header: "bg-white text-gray-800",  // match classic colors
    section: "bg-gray-100 text-gray-900",
    accent: "text-purple-700",            // distinguish only by accent color
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto flex justify-center", // center layout
  },
  vibrant_black: {
    header: "bg-white text-gray-800",  // match classic colors
    section: "bg-gray-100 text-gray-900",
    accent: "text-black-700",            // distinguish only by accent color
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto flex justify-center", // center layout
  },
  vibrant_black_underline: {
    header: "bg-white text-gray-800",  // match classic colors
    section: "bg-gray-100 text-gray-900",
    accent: "text-black-700",            // distinguish only by accent color
    card: "bg-white text-gray-800 shadow-md",
    container: "max-w-5xl mx-auto flex justify-center", // center layout
    headingBg: "bg-gray-200",
  },
};

export default themes;
