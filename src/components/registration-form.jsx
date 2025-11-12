import React, { useState } from "react";
import Navbar from "./navbar";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, Select, Button, Input, Radio, Tag } from 'antd';



const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

const RegistrationForm = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
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
                {/* <form onSubmit={handleSubmit}>
                    <label>
                    Title*
                    <select type="select" name="name" value={formData.name} onChange={handleChange} placeholder="Select" >
                        <option value="">Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                    </select>
                    {errors.name && <p className="error">{errors.name}</p>}
                    </label>

                    <label>
                    First Name*
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John" />
                    {errors.name && <p className="error">{errors.name}</p>}
                    </label>

                    <label>
                    Middle Name*
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Carry" />
                    {errors.name && <p className="error">{errors.name}</p>}
                    </label>

                    <label>
                    Last Name*
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Deo" />
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
                </form> */}

                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ requiredMarkValue: requiredMark }}
                    onValuesChange={onRequiredTypeChange}
                    requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
                    >
                    <Form.Item label="Title" required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Field B"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
    
    
  );
};

export default RegistrationForm;