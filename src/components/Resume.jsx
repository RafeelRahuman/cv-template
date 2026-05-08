import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function formatDate(date) {
  if (!date) return "";

  const d = new Date(date);

  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function Resume({ generalData, educationData, experienceData }) {
  return (
<div className="w-full flex justify-center">

      {/* A4 CONTAINER */}
      <div
        id="resume-download"
        className="
  bg-white shadow-lg
  w-full
  max-w-[210mm]
  h-[296mm]
  mx-auto
  overflow-hidden
"
      >
        {/* HEADER */}
        <div className="bg-slate-800 text-white text-center py-6 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {generalData.fullName}
          </h1>


<div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
  
   {generalData.email && (
    <div className="flex items-center gap-2">
      <span>✉</span>
      <span>{generalData.email}</span>
    </div>
  )}

  {generalData.phone && (
    <div className="flex items-center gap-2">
      <span>☎</span>
      <span>{generalData.phone}</span>
    </div>
  )}

  {generalData.city && (
    <div className="flex items-center gap-2">
      <span>📍</span>
      <span>{generalData.city}</span>
    </div>
  )}
</div>
        </div>

        {/* BODY */}
        <div className="p-4 sm:p-6">

          {/* EDUCATION */}
          {educationData.length > 0 && (
            <div className="mb-6">
              <h2 className="bg-gray-200 px-4 py-2 font-semibold text-lg text-center">
                Education
              </h2>

              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="mt-4 flex flex-col sm:flex-row gap-4"
                >
                  {/* LEFT */}
                  <div className="sm:w-1/3 text-sm text-gray-500">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    <br />
                    {edu.city}, {edu.country}
                  </div>

                  {/* RIGHT */}
                  <div className="sm:w-2/3">
                    <h3 className="font-semibold">{edu.school}</h3>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE */}
          {experienceData.length > 0 && (
            <div>
              <h2 className="bg-gray-200 px-4 py-2 font-semibold text-lg text-center">
                Professional Experience
              </h2>

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="mt-4 flex flex-col sm:flex-row gap-4"
                >
                  {/* LEFT */}
                  <div className="sm:w-1/3 text-sm text-gray-500">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </div>

                  {/* RIGHT */}
                  <div className="sm:w-2/3">
                    <h3 className="font-semibold">{exp.company}</h3>
                    <p className="text-sm">{exp.jobTitle}</p>
                    <p className="text-sm mt-1">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Resume;