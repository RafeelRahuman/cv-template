import { useState } from "react";

function GeneralInfo({setData,data}){

    const[isEditing,setIsEditing] = useState(true);
    const [open, setOpen] = useState(false);


    function handleChange(e){
    setData({
        ...data,
        [e.target.name] : e.target.value,
    });
}

   return (
  <div className="card">
    <div
        className="card-header"
        onClick={() => setOpen(!open)}
      >
        <h2>👤 General Information</h2>

        <span className="arrow">
          {open ? "▲" : "▼"}
        </span>
      </div>

    {open && (
    <>
    { isEditing ? (
      <>
        <label>Full Name</label>
        <input 
        type = "text" 
        name = "fullName"
        value={data.fullName} 
        onChange={handleChange}
        placeholder="Enter Your Full Name" />

        <label>Email</label>
        <input 
        type="text" 
        name="email"  
        value={data.email} 
        onChange={handleChange} 
        placeholder="Enter Email"/>

        <label>Phone</label>
        <input 
        type="text" 
        name="phone" 
        value={data.phone} 
        onChange={handleChange} 
        placeholder="Enter Phone Number" />

        <label>City</label>
        <input 
        type="text"
        name="city"
        value={data.city}
        onChange={handleChange}
        placeholder="Enter City"
        />

        <button onClick={() => {
            setIsEditing(false)}}>Save</button>
      </>
    ) : (
      <>
        <p><strong>{data.fullName}</strong></p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.city}</p>

        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )}
      </>
    )}

  </div>
);
}
export default GeneralInfo;