import "../styles/Resume.css"

function formatDate (date) {
    if (!date) return "";

    const d = new Date(date);

    return d.toLocaleDateString("en-US",{
        month : "short",
        year : "numeric",
    });
}

function Resume ({generalData,educationData,experienceData}){  

    return (

        <div id="resume-download">

        <div className="resume">

            <div  className="resume-header">

            <h1>{generalData.fullName} </h1>

            <div className="contact">
            <span>{generalData.email}</span>
            <span>{generalData.phone}</span>
            <span>{generalData.city}</span>
            </div>
            </div>


<div className="resume-selection">

{educationData.some(
    item => item.degree || item.school
) && (
    <h2 className="resume-title"> Education </h2>
)}

{educationData.map((item, index) => (
  <div key={index} className="resume-item">
    <div className="left-side">
        {formatDate(item.startDate)} - {formatDate(item.endDate)}
    </div>

    <div className="right-side">
      <h3>{item.degree}</h3>
      <p>{item.school}</p>
      <p>{item.city}, {item.country}
      </p>
    </div>
  </div>
))}
</div>

<div className="resume-selection">

{experienceData.some (
    item => item.jobTitle || item.company 
) && (
    <h2 className="resume-title">Professional Experience</h2>
)}

{experienceData.map((item,index) =>(
<div key={index} className="resume-item">
    <div className="left-side">
        <p>{formatDate(item.fromDate)} - {formatDate(item.toDate)}</p>
    </div>

    <div className="right-side">   
        <h3>{item.jobTitle}</h3>
        <p>{item.company}</p>
        <p>{item.description}</p>
    </div>
</div>
))}
</div>
</div>
</div>
    );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

export default Resume;

            {/* <div className="resume-section">
            <h2>Education Details</h2>
            <div className="resume-item">
            <p>{educationData.date}</p>
            <div>
            <h3>{educationData.schoolName}</h3>
            <p>{educationData.degreeTitle}</p>
            </div>
            </div>
            </div> */}

            {/* <div className="resume-section">
            <h2>Professional Experience</h2>
            <div className="resume-item">
            <p>{experienceData.fromDate} - {experienceData.toDate}</p>
            <div>
            <h3>{experienceData.companyName}</h3>
            <p>{experienceData.position}</p>
            <p>{experienceData.responsibility}</p>
            </div>
            </div>      
            </div> */}
 
           