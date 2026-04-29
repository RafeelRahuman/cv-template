import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./App.css";
import { useCallback, useState } from "react";
import Resume from "./components/Resume";
import html2pdf from "html2pdf.js";

function App(){

  const[generalData,setGeneralData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",});
  const[educationData,setEducationData] = useState([ 
    {
      degree: "",
      school: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
    },]);
  const[experienceData,setExperienceData] = useState([
    {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  function handleDownload(){
  const element = document.getElementById("resume-download");

  const options = {
    margin : 0 ,
    filename : "Resume.pdf",
    image : {
      type : "jpeg",
      quality : 1
    },
    html2canvas : {
      scale : 3,
      useCORS : true
    },
    jsPDF : {
      unit : "mm",
      format : "a4",
      orientation : "portrait"
    },
    pagebreak : {
      mode: ["avoid-all","css","legacy"]
    }
  };
  html2pdf().set(options).from(element).save()
}


  return (
    <div className="app">
      <div className="left-panel">

        <div className="download-card">
        <h3>Save your resume</h3>

        <button className="download-btn"  onClick={handleDownload}>
          ⬇ Download
        </button>
      </div>

        <GeneralInfo 
        data={generalData}
        setData = {setGeneralData} />

        <Education 
          data = {educationData}
          setData = {setEducationData} 
          />

          <Experience 
          data = {experienceData}
          setData = {setExperienceData} 
          />
      </div>

      <div className="right-panel">
        <Resume 
        generalData = {generalData}
        educationData = {educationData}
        experienceData = {experienceData}
        />
      </div>
    </div>
  );
}


export default App;