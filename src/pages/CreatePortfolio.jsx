import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePortfolio() {
        const navigate = useNavigate();
        const [projectName, setProjectName] = useState("");
        const [projectDescription, setProjectDescription] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    school: "",
    course: "",
    startDate: "",
    endDate: "",
    skills: [],
    profilePic: "",
    projects: [],
    certifications: [],
    languages: [],
    References: [],
    theme: "classic",
  });

const [ certName, setCertName ] = useState("");
const [ certIssuer, setCertIssuer ] = useState("");
const [language, setLanguage] = useState("");
const [reference, setReference] = useState("");
const [referenceContact, setReferenceContact] = useState("");
const [skill, setSkill ] = useState("");


const handleAddProject = () => {
  if (projectName.trim() && projectDescription.trim()) {
    const newProject = { name: projectName, description: projectDescription };
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
    setProjectName(""); // clear input
    setProjectDescription(""); // clear input
  }
};

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Portfolio Data:", formData);
    // In the next step, you can preview or save this data
    

  // Save to localStorage
  localStorage.setItem("portfolioData", JSON.stringify(formData));

  console.log(formData); // This is working
  navigate("/preview", { state: formData });  // Make sure this is being called
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData(prev => ({ ...prev, profilePic: reader.result }));
  };

  if (file) {
    reader.readAsDataURL(file); // converts to base64 string
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4">

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-2xl space-y-6">
       
        <h2 className="text-2xl font-bold text-center text-purple-700">Create Your Portfolio</h2>

        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />       
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Short Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full p-2 border rounded" rows="3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">School Name</label>
            <input type="text" name="school" value={formData.school} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Course / Program</label>
            <input type="text" name="course" placeholder="BSc Computer Science" value={formData.course} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>

        <label className="block mb-4">
  <span className="text-gray-700">Profile Picture</span>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="mt-1 block w-full"
  />
</label>

{/* skills */}
<div className="mb-6">
<label className="block">
  <span className="text-gray-700">Skills</span>
  <input
    type="text"
    name="skills"
    onChange={(e)=>setSkill(e.target.value)}
    value={skill}
    className="mt-1 block w-full border rounded p-2"
    placeholder="Eg: HTML, CSS, JavaScript, React"
  />
</label>
 <button
  type="button"
  onClick={()=>{
    if(skill){
      setFormData((prev)=>({
        ...prev, 
        skills: [...prev.skills, {name: skill}]
      }));
      setSkill("");
    }
  }}
        className="bg-blue-600 text-white mt-2 px-4 py-2 rounded hover:bg-purple-700 transition"
  >
    Add Skill
  </button>
    <ul className="mt-4 text-sm text-gray-700 list-disc pl-6">
      {formData.skills.map((skill, i)=>(
        <li key={i}>{skill.name}</li>
      ))}
    </ul>
</div>


<label className="block">
  <span className="text-gray-700 font-bold">Projects</span><br/><br/>
  <label className="block mb-4">
  <span className="text-gray-700">Project Name</span>
  <input
    type="text"
    value={projectName}
    onChange={(e) => setProjectName(e.target.value)}
    className="mt-1 block w-full border rounded p-2"
    placeholder="e.g. Portfolio Website"
  />
</label>

<label className="block mb-4">
  <span className="text-gray-700">Project Description</span>
  <textarea
    value={projectDescription}
    onChange={(e) => setProjectDescription(e.target.value)}
    className="mt-1 block w-full border rounded p-2"
    placeholder="Brief description of your project"
  />
</label>

<div className="space-y-2">
  {formData.projects.map((project, index) => (
    <div key={index} className="p-2 bg-gray-100 rounded shadow-sm border-l-4 border-purple-500">
      <h4 className="font-bold">{project.name}</h4>
      <p>{project.description}</p>
    </div>
  ))}
</div>

<button
  type="button"
  onClick={handleAddProject}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
>
  Add Project
</button>
</label>

<div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">Certifications & Awards</label>

  <div className="grid md:grid-cols-2 gap-4 mb-2">
    <input
      type="text"
      value={certName}
      placeholder="Cert Name"
      onChange={(e)=> setCertName(e.target.value)}
      className="p-2 border rounded w-full"
    />
    <input
      type="text"
      value={certIssuer}
      placeholder="Cert Issuer"
      onChange={(e)=> setCertIssuer(e.target.value)}
      className="p-2 border rounded w-full"
    />
  </div>
  <button
    type="button"
    onClick={()=>{
      if(certName && certIssuer){
        setFormData((prev)=>({
          ...prev,
          certifications: [...prev.certifications, {name: certName, issuer: certIssuer}],
        }));
        setCertName("");
        setCertIssuer("");
      }
    }}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
  >
    Add Cerficate
  </button>
  
    <ul className="mt-4 text-sm text-gray-700 list-disc pl-6">
    {formData.certifications.map((cert, i) => (
      <li key={i}>{cert.name} – {cert.issuer}</li>
    ))}
  </ul>
</div>

{/* {Languages} */}
<div className="mb-6">
  <label className="block text-gray-700 font-semibold mb-2">Languages</label>
  <div className="grid md:grid-cols-2 gap-4 mb-2">
    <input 
      type="text"
      value={language}
      onChange={(e)=>setLanguage(e.target.value)}
      placeholder="Name of Language"
      className="p-2 border rounded w-full"
    />
  </div>
  
  <button
  type="button"
  onClick={()=>{
    if(language){
      setFormData((prev)=>({
        ...prev, 
        languages: [...prev.languages, {name: language}]
      }));
      setLanguage("");
    }
  }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
  >
    Add Language
  </button>
    <ul className="mt-4 text-sm text-gray-700 list-disc pl-6">
      {formData.languages.map((language, i)=>(
        <li key={i}>{language.name}</li>
      ))}
    </ul>    
</div>

    {/* reference */}
  <div className="mb-6">
  <label className="block text-gray-700 font-semibold mb-2">Reference</label>
  <div className="grid md:grid-cols-2 gap-4 mb-2">
    <input 
      type="text"
      value={reference}
      onChange={(e)=>setReference(e.target.value)}
      placeholder="Name of Reference"
      className="p-2 border rounded w-full"
    />
    <input 
      type="text"
      value={referenceContact}
      onChange={(e)=>setReferenceContact(e.target.value)}
      placeholder="Contact of Reference"
      className="p-2 border rounded w-full"
    />
  </div>
  
  <button
  type="button"
  onClick={()=>{
    if(reference && referenceContact){
      setFormData((prev)=>({
        ...prev, 
        References: [...prev.References, {name: reference, contact: referenceContact}]
      }));
      setReference("");
      setReferenceContact("");
    }
  }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
  >
    Add Reference
  </button>
    <ul className="mt-4 text-sm text-gray-700 list-disc pl-6">
      {formData.References.map((reference, i)=>(
        <li key={i}>{reference.name} - {reference.contact}</li>
      ))}
    </ul>
    
</div>
<div>
  <label className="block mb-1 font-medium">Select Theme</label>
  <select
    name="theme"
    value={formData.theme}
    onChange={handleChange}
    className="w-full p-2 border rounded"
  >
    <option value="classic">Classic</option>
    <option value="classic_new">Classic New</option>
    <option value="dark">Dark</option>
    <option value="vibrant">Vibrant</option>
    <option value="vibrant_black">Vibrant-black</option>
    <option value="vibrant_black_underline">Vibrant-black</option>
  </select>
</div>

        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Submit & Preview
        </button>
      </form>
    </div>
  );
}

export default CreatePortfolio;
