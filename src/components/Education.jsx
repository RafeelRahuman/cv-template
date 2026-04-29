import { useState } from "react";


function Education({ setData,data }) {

   const[isEditing,setIsEditing] = useState(true);
    const [open, setOpen] = useState(false);


  function handleChange(index, e) {
    const newData = [...data];
    newData[index][e.target.name] = e.target.value;
    setData(newData);
  }

  function addEducation(){
    setData([
        ...data,
        {
            degree: "",
            school: "",
            city: "",
            country: "",
            startDate: "",
            endDate: "",
        },  
    ]);
  }

  function deleteEducation() {
    const newData = data.filter((_ , i) => i !==index);
    setData(newData);
  }


  return (
    <div className="card">
    <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h2>👤 Education </h2>

        <span className="arrow">
          {open ? "▲" : "▼"}
        </span>
      </div>

    {open && (
    <>

      {isEditing ? (
        <>
          {data.map((item, index) => (
            <div key={index}>
              <label>Degree</label>
                <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    onChange={(e) => handleChange(index, e)}
                />

                <label>School</label>
                <input
                    type="text"
                    name="school"
                    value={item.school}
                    onChange={(e) => handleChange(index, e)}
                />

                <div className="two-col">
                    <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={item.city}
                        onChange={(e) => handleChange(index, e)}
                    />
                    </div>

                    <div>
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        value={item.country}
                        onChange={(e) => handleChange(index, e)}
                    />
                    </div>
                </div>

                <div className="two-col">
                    <div>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={item.startDate}
                        onChange={(e) => handleChange(index, e)}
                    />
                    </div>

                    <div>
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={item.endDate}
                        onChange={(e) => handleChange(index, e)}
                    />
            </div>
          </div>
          <button onClick={() => deleteEducation(index)}>
            Delete
          </button>

          <hr style={{ margin: "20px 0" }} />
        </div>
          ))}

          <button className="add-btn" onClick={addEducation}>
        + Education
      </button>
      <button onClick={()=> setIsEditing(false)}>Save</button>
    </>
  ): (
    <>
          {data.map((item, index) => (
            <div key={index}>
              <p><strong>{item.degree}</strong></p>
              <p>{item.school}</p>
              <p>{item.city}, {item.country}</p>
              <p>{item.startDate} - {item.endDate}</p>

              <hr style={{ margin: "20px 0" }} />
            </div>
          ))}

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
      </>
    )}
    </div>
  );
}
export default Education;


// function Education ({setData,data}) {
// const[schoolName,setSchoolName] = useState(data.schoolName || "");
// const[degreeTitle,setDegreeTitle] = useState(data.degreeTitle || "");
// const[date,setDate] = useState("");

// const[isEditing,setIsEditing] = useState(true);

// function handleSchoolNameChange(e){
//     setSchoolName(e.target.value)
// }

// function handleDegreeTitleChange(e){
//     setDegreeTitle(e.target.value)
// }

// function handleDateChange(e){
//     setDate(e.target.value)
// }

// return (
//     <div>
//         <h1>Education Information</h1>
//         {isEditing ? (
//             <div>
//                 <label>School Name</label>
//                 <input type="text" value={schoolName} onChange ={handleSchoolNameChange}  />

//                 <label > Degree Title</label>
//                 <input type="text" value={degreeTitle} onChange={handleDegreeTitleChange} />

//                 <label> Date </label>
//                 <input type="date" value={date} onChange={handleDateChange} />
//                 <button onClick={() => {
//                     setData({schoolName,degreeTitle,date})
//                     setIsEditing(false)}}>Submit</button>

//             </div>
//            ): (
//             <div>
//                 <p>{schoolName}</p>
//                 <p>{degreeTitle}</p>
//                 <p>{date}</p>

//                 <button onClick={()=>setIsEditing(true)}>Edit</button>
                
//             </div>
//            )} 
        
//     </div>
// );
// }

