import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import { useState } from "react";
import Resume from "./components/Resume";
import html2pdf from "html2pdf.js";

function App() {
  const [generalData, setGeneralData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const exampleGeneral = {
    fullName: "Mohamed Rafeel",
    email: "mm@example.com",
    phone: "9876543210",
    city: "Chennai",
  };

  const exampleEducation = [
    {
      degree: "B.E Computer Science",
      school: "SS University",
      city: "Salem",
      country: "India",
      startDate: "2014-01-01",
      endDate: "2018-01-01",
    },
  ];

  const exampleExperience = [
    {
      jobTitle: "Full Stack Developer",
      company: "Info Tech",
      startDate: "2022-02-01",
      endDate: "2026-01-01",
      description:
        "A full-stack developer is a versatile software professional responsible for the end-to-end development of web applications, encompassing both the front-end (user interface) and back-end (server/database) layers.",
    },
    {
      jobTitle: "Full Stack Developer",
      company: "MM Tech",
      startDate: "2018-02-01",
      endDate: "2022-01-01",
      description:
        "Full-stack developers are valuable in agile teams for their ability to handle all layers of development, accelerating the creation of MVPs.",
    },
  ];

  function handleLoadExample() {
    setGeneralData(exampleGeneral);
    setEducationData(exampleEducation);
    setExperienceData(exampleExperience);
  }

  function handleClear() {
    setGeneralData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
    });
    setEducationData([]);
    setExperienceData([]);
  }

  function handleDownload() {
    const element = document.getElementById("resume-download");

    const options = {
      margin: 0,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().set(options).from(element).save();
  }

  return (
<div className="bg-gray-200 flex justify-center py-10">
  <div className="flex w-full max-w-[1200px] h-fit">
        {/* LEFT SIDE */}
    <div className="w-[380px] border-r bg-gray-100 h-full flex-shrink-0">
            <div className="p-6 space-y-6">

            {/* TOP CONTROLS */}
            <div className="bg-white p-5 rounded-2xl shadow space-y-8 ">
              <div className="flex gap-3">
                <button
                  onClick={handleLoadExample}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Load Example
                </button>

                <button
                  onClick={handleClear}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Clear
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600"
              >
                ⬇ Download Resume
              </button>
            </div>

            {/* FORMS */}
            <GeneralInfo data={generalData} setData={setGeneralData} />
            <Education data={educationData} setData={setEducationData} />
            <Experience data={experienceData} setData={setExperienceData} />

          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="flex-1 bg-gray-300 flex justify-center p-6 overflow-y-auto">
  
          {/* RESUME WRAPPER (keeps it centered & clean) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[800px]">
              <Resume
                generalData={generalData}
                educationData={educationData}
                experienceData={experienceData}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;