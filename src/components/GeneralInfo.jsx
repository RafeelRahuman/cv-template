import { useState } from "react";
import { FaUser, FaChevronDown, FaChevronUp, FaEdit } from "react-icons/fa";
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
  <div className="bg-white p-6 rounded-2xl shadow mb-6">

    {/* HEADER */}
    <div 
  className="flex justify-between items-center cursor-pointer"
  onClick={() => setOpen(!open)}
>

  {/* LEFT SIDE (ICON + TITLE) */}
  <div className="flex items-center gap-2">
    <FaUser size={20} />
    <h2 className="text-lg font-semibold">General Information</h2>
  </div>

  {/* RIGHT SIDE (ARROW ICON) */}
  {open ? (
    <FaChevronUp size={18} />
  ) : (
    <FaChevronDown size={18} />
  )}

</div>

    {/* BODY */}
    {open && (
      <>
        {isEditing ? (
          <>
            {/* Full Name */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full p-3 rounded-lg bg-gray-100"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-3 rounded-lg bg-gray-100"
              />
            </div>

            {/* Phone + City */}
            <div className="flex gap-4 mt-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full p-3 rounded-lg bg-gray-100"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  className="w-full p-3 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            {/* SAVE BUTTON */}
            <button
              onClick={() => setIsEditing(false)}
              className="mt-5 bg-pink-500 text-white px-6 py-2 rounded-full"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="mt-4 space-y-1">
              <p className="font-semibold">{data.fullName}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.city}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-gray-200 px-4 py-2 rounded-lg"
            >
              Edit
            </button>
          </>
        )}
      </>
    )}

  </div>
);
}
export default GeneralInfo;