import  themes  from "./theme";
import { useState, useEffect, useRef } from "react";
import ThemeSelector from "./ThemeSelector";
import html2pdf from "html2pdf.js";
import Contact from './Contact';
import { Mail, Phone, MapPin } from "lucide-react";


const PortfolioPreview = () => {
  const [data, setData] = useState(null);
  const portfolioRef = useRef();
  const [selectedThemeKey, setSelectedThemeKey] = useState("classic");
  const selectedTheme = themes[selectedThemeKey];


  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const handleDownload = () => {
    if (portfolioRef.current) {
      html2pdf()
        .from(portfolioRef.current)
        .set({
          margin: 0,
          filename: `${data.fullName}_Portfolio.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save();
    }
  };

  if (!data) {
    return <div className="p-6 text-center text-gray-500">No portfolio data found.</div>;
  }
  // const selectedTheme = themes[data.theme || "classic"];

  return (
  //   <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4">
  // <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden" ref={portfolioRef}>
    <div className={`min-h-screen ${selectedTheme.section} py-12 px-4`}>
  <div
    ref={portfolioRef}
    className={`max-w-5xl mx-auto rounded-lg shadow-lg  ${selectedTheme.header}`}
  >
    

    {/* Header */}
<div className="flex items-center px-8 py-6 border-b border-gray-200">
  {/* Profile Picture - on the left */}
  {data.profilePic && (
    <img
      src={data.profilePic}
      alt="Profile"
      className="w-24 h-24 object-cover rounded-full border-4 border-purple-500"
    />
  )}

  {/* Centered Content */}
  <div className="mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide mb-5">
  {data.fullName}
</h1>
    {/* Contact Info in a single row */}
    <div className="mt-2 flex justify-center items-center gap-6 text-sm text-gray-700 font-medium flex-wrap">
  <div className="inline-flex items-center gap-1">
    {/* <Mail className="w-4 h-4 text-purple-600 inline-block align-middle" /> */}
    <p >📧 {data.email}</p>
    {/* <span className="inline-block align-middle">{data.email}</span> */}
  </div>
  <div className="inline-flex items-center gap-1">
    {/* <Phone className="w-4 h-4 text-purple-600 inline-block align-middle" /> */}
    <p>📞 {data.phone}</p>
    {/* <span className="inline-block align-middle">{data.phone}</span> */}
  </div>
  <div className="inline-flex items-center gap-1">
    {/* <MapPin className="w-4 h-4 text-purple-600 inline-block align-middle" /> */}
    <p>📍 {data.location}</p>
    {/* <span className="inline-block align-middle">{data.location}</span> */}
  </div>
</div>
</div>
</div>
   
    {/* Bio */}
        {data.bio && (
          <div className="px-8 py-6">
            <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-2`}>ABOUT ME</h2>
            <p className="text-gray-700">{data.bio}</p>
          </div>
        )}

           <hr className=" border-t border-gray-200" />
    {/* Education */}
    <div className="px-8 py-6">
          <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>EDUCATION</h2>
          <div className="space-y-2">
            <p className="text-md font-bold text-gray-800">{data.school}</p>
            <p className="text-sm text-gray-600 italic">{data.course}</p>
            <p className="text-sm text-gray-600">{data.startDate} - {data.endDate}</p>
          </div>
        </div>
           <hr className=" border-t border-gray-200" />
    {/* Skills */}
  {data.skills?.length > 0 && (
          <div className="mb-8 px-8 py-6">
            {/* <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>SKILLS</h2> */}
            <div className="w-full  px-4 py-2">
            <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} m-0 `}>
                  SKILLS
            </h2>
            </div>

            <ul className="space-y-2 pl-4 list-disc text-gray-800">
              {data.skills.map((skill, i) => (
                <li key={i}><span className="font-normal">{skill.name}</span></li>
              ))}
            </ul>
          </div>
        )}
           <hr className=" border-t border-gray-200" />
       {/* Projects */}
<div className="px-8 py-6">
  <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>PROJECTS</h2>
  <div className="space-y-4">
    {data.projects?.map((project, idx) => (
      <div key={idx} className={`p-4 rounded-lg ${selectedTheme.card}`}>
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
</div>

         <hr className=" border-t border-gray-200" />
    {/* {certifications} */}
  {data.certifications?.length > 0 && (
          <div className="mb-8 px-8 py-6">
            <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>CERTIFICATIONS & AWARDS</h2>
            <ul className="space-y-2 pl-4 list-disc text-gray-800">
              {data.certifications.map((cert, i) => (
                <li key={i}><span className="font-semibold">{cert.name}</span> – {cert.issuer}</li>
              ))}
            </ul>
          </div>
        )}
           <hr className=" border-t border-gray-200" />
    {/* Languages */}
  {data.languages?.length > 0 && (
          <div className="mb-8 px-8 py-6">
            <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>LANGUAGES</h2>
            <ul className="space-y-2 pl-4 list-disc text-gray-800">
              {data.languages.map((language, i) => (
                <li key={i}><span className="font-normal">{language.name}</span></li>
              ))}
            </ul>
          </div>
        )}

             <hr className=" border-t border-gray-200" />
      {/* Reference */}
  {data.References?.length > 0 && (
          <div className="mb-8 px-8 py-6">
            <h2 className={`text-xl font-semibold ${selectedTheme.accent} ${selectedTheme.headingBg} ${selectedTheme.container} mb-4`}>REFERENCES</h2>
            <ul className="space-y-2 pl-4 list-disc text-gray-800">
              {data.References.map((reference, i) => (
                <li key={i}><span className="font-semibold">{reference.name}</span> – {reference.contact}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Download Button */}
  <div className="max-w-5xl mx-auto mt-6 text-right">
    <ThemeSelector selected={selectedThemeKey} setSelected={setSelectedThemeKey} />
    <button
      onClick={handleDownload}
      className="bg-purple-700 text-white px-6 py-2 rounded-md shadow hover:bg-purple-800 transition"
    >
      Download PDF
    </button>
  </div>
</div>

  );
};

export default PortfolioPreview;
