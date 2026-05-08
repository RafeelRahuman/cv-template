import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaBriefcase,
  FaTrash,
} from "react-icons/fa";

function Experience({ setData, data }) {
  const emptyForm = {
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave() {
    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = formData;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData(emptyForm);
    setOpen(false);
  }

  function handleEdit(index) {
    setFormData(data[index]);
    setEditIndex(index);
    setOpen(true);
  }

  function handleDelete(index) {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-6">

      {/* HEADER */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-pink-500" size={20} />
          <h2 className="text-lg font-semibold">
            Professional Experience
          </h2>
        </div>

        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* FORM */}
      {open && (
        <div className="mt-4 space-y-4">

          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full p-3 rounded-lg bg-gray-100"
          />

          {/* Dates */}
          <div className="flex gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg bg-gray-100"
            />

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-lg bg-gray-100"
            />
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 rounded-lg bg-gray-100"
          />

          <button
            onClick={handleSave}
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
          >
            {editIndex !== null ? "Update" : "Save"}
          </button>
        </div>
      )}

      {/* SAVED LIST */}
      {data.map((item, index) => (
        <div
          key={index}
          className="mt-4 p-4 bg-gray-50 rounded-lg flex justify-between items-start"
        >
          <div>
            <p className="font-semibold text-gray-800">
              {item.jobTitle}
            </p>
            <p className="text-gray-600">{item.company}</p>
            <p className="text-sm text-gray-500">
              {item.startDate} - {item.endDate}
            </p>
            <p className="text-sm text-gray-500">
              {item.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleEdit(index)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;