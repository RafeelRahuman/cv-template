import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function Experience({setData,data}) {
    

    const[isEditing,setIsEditing] = useState(true);
    const [open, setOpen] = useState(false);


    function handleChange (index,e){
        const newData = [...data];
        newData[index][e.target.name] = e.target.value;
        setData(newData);
    }

    function addExperience (){
        setData([
            ...data,
            {
                jobTitle: "",
                company: "",
                startDate: "",
                endDate: "",
                description: "",
            }
        ])
    }

    function deleteExperience(index) {
        const newData = data.filter((_,i) => i !== index);
        setData(newData);

    }

    return (
        <div className="card">
    <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h2>👤 Professional </h2>

        <span className="arrow">
          {open ? "▲" : "▼"}
        </span>
      </div>

    {open && (
    <>
        
            {isEditing ? (
                <>
                    {data.map((item,index) => (
                        <div key={index}>
                            <label>Job Title</label>
                            <input 
                            type="text"
                            name="jobTitle"
                            value={item.jobTitle}
                            onChange={(e)=> handleChange(index,e)}
                            placeholder="Job Title" 
                            />
                            <label>Company</label>
                            <input 
                            type="text"
                            name="company"
                            value={item.position}
                            onChange={(e) => handleChange(index,e)}
                            placeholder="Company Name" 
                            />
                            <label>Start Date</label>
                            <input 
                            type="date"
                            name="startDate"
                            value={item.startDate}
                            onChange={(e) => handleChange(index,e)}
                            />
                            <label>End Date</label>
                            <input type="date"
                            name="endDate"
                            value={item.endDate}
                            onChange={(e) => handleChange(index,e)}
                            />
                            <label>Description</label>
                            <textarea
                            name="description"
                            value={item.description}
                            onChange={(e) => handleChange(index,e)}
                            />
                            <button onClick={()=> deleteExperience(index)}>
                            <FaTrash />
                            </button>
                            <hr style={{margin : "20px 0"}} />
                        </div>
                    ))}

                    <button className="add-btn"  onClick={addExperience}>
                        <FaPlus />
                    </button>

                    <button
                    onClick={()=> setIsEditing(false)
                    }>Save</button>
                </>
    ): (
        <>
            {data.map((item,index) =>(
            <div key={index}>
                <p><strong>{item.jobTitle}</strong></p>
                <p>{item.company}</p>
                <p>{item.startDate} - {item.endDate}</p>
                <p>{item.description}</p>

                <hr style={{ margin : "20px 0"}}/>
            </div>
            ))}

            <button onClick={() => setIsEditing(true)}>Edit</button>
    
        </>
        )}
        </>
    )}
        </div>
        );
    }

export default Experience;



// function Experience({setData,data}) {

//     const[companyName,setCompanyName] = useState(data.companyName || "");
//     const[position,setPosition] = useState(data.position || "");
//     const[responsibility,setResponsibility] = useState(data.responsibility || "");
//     const[fromDate,setFromDate] = useState("");
//     const[toDate,setToDate] = useState("");
//     const[isEditing,setIsEditing] = useState(true);

//     function handleCompanyName(e){
//         setCompanyName(e.target.value);
//     }

//     function handlePosition(e){
//         setPosition(e.target.value);
//     }

//     function handleResponsibility(e){
//         setResponsibility(e.target.value);
//     }

//     function handleFromDate(e){
//         setFromDate(e.target.value);
//     }

//     function handleToDate(e){
//         setToDate(e.target.value);
//     }


//     return (
//         <div>
//         <h1>Experience</h1>

//         {isEditing ? (
//             <div>
//                 <label> Company Name</label>
//                 <input type="text" value={companyName} onChange={handleCompanyName} />

//                 <label>Position</label>
//                 <input type="text" value={position} onChange={handlePosition} />

//                 <label> Responsibility </label>
//                 <input type="text" value={responsibility} onChange={handleResponsibility} />

//                 <label> From Date</label>
//                 <input type="date" value={fromDate} onChange={handleFromDate} />

//                 <label> To Date</label>
//                 <input type="date" value={toDate} onChange={handleToDate} />

//                 <button onClick={() => {
//                     setData({companyName,position,responsibility,fromDate,toDate})
//                     setIsEditing(false)}}>Submit</button>
                
//             </div>
//         ): (
//             <div>
//             <p>{companyName}</p>
//             <p>{position}</p>
//             <p>{responsibility}</p>
//             <p>{fromDate}</p>
//             <p>{toDate}</p>

//             <button onClick={ ()=> setIsEditing(true)}> Edit </button>
            
//             </div>
//         )}
//         </div>
//     );
// }

