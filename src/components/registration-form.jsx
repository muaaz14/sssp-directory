import React, { useState } from "react";
import Navbar from "./navbar";

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    expertise: "",
    contact: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
    setFormData({
      name: "",
      role: "",
      location: "",
      expertise: "",
      contact: "",
      description: "",
      image: "",
    });
    setErrors({});
  };

  return (
    <div className="responsive-container">
        <div className="page-body">
            <div className="nav-cont">
                <Navbar />
            </div>



            <div className="section-1">
              <div className="container">
                <h1><b>Register</b></h1>
                <p>as a Soil Science Professionals</p>
              </div>
            </div>
            
            
            
            
            
            <div className="form-container">
                <h2>Register as a Professional</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    Full Name*
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                    </label>

                    <label>
                    Role / Designation*
                    <input type="text" name="role" value={formData.role} onChange={handleChange} />
                    {errors.role && <p className="error">{errors.role}</p>}
                    </label>

                    <label>
                    Location
                    <input type="text" name="location" value={formData.location} onChange={handleChange} />
                    </label>

                    <label>
                    Area of Expertise
                    <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} />
                    </label>

                    <label>
                    Contact (Email / Phone)*
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
                    {errors.contact && <p className="error">{errors.contact}</p>}
                    </label>

                    <label>
                    Description
                    <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
                    </label>

                    <label>
                    Profile Image URL
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                    </label>

                    <button type="submit">Submit Registration</button>
                </form>
            </div>
        </div>
    </div>
    
    
  );
};

export default RegistrationForm;