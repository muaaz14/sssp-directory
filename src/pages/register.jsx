import React, { useState } from 'react';
import '../styles/register.css';



const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    // Education step
    qualification: '',
    university: '',
    fieldOfStudy: '',
    yearOfGraduation: '',
    // Professional step
    designation: '',
    institution: '',
    yearsOfExperience: '',
    specialization: '',
    // Contact step
    email: '',
    phone: '',
    address: '',
    city: '',
    // Membership step
    membershipType: '',
    // Research step
    researchInterests: '',
    publicationsCount: '',
    // Online presence step
    website: '',
    linkedin: '',
    researchGate: '',
    // Awards step
    awards: '',
  });

  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Education' },
    { number: 3, label: 'Professional' },
    { number: 4, label: 'Contact' },
    { number: 5, label: 'Membership' },
    { number: 6, label: 'Research' },
    { number: 7, label: 'Online Presence' },
    { number: 8, label: 'Awards' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Personal Information</h2>
              <p>Let's start with your basic information</p>
            </div>
            <div className="form-fields">
              <div className="form-group">
                <label>Title <span className="required">*</span></label>
                <select 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select your title</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div className="form-group">
                <label>First Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Middle Name (Optional)</label>
                <input 
                  type="text" 
                  name="middleName" 
                  placeholder="Enter your middle name"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Last Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>Education Information</h2>
              <p>Tell us about your educational background</p>
            </div>
            <div className="form-fields">
              <div className="form-group">
                <label>Qualification <span className="required">*</span></label>
                <select 
                  name="qualification" 
                  value={formData.qualification} 
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select your qualification</option>
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Master">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div className="form-group">
                <label>University <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="university" 
                  placeholder="Enter university name"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Field of Study <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="fieldOfStudy" 
                  placeholder="Enter field of study"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Year of Graduation <span className="required">*</span></label>
                <input 
                  type="number" 
                  name="yearOfGraduation" 
                  placeholder="Enter year"
                  value={formData.yearOfGraduation}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        );
      // Add more cases for other steps...
      default:
        return null;
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-form-wrapper">
        {/* Left Sidebar */}
        <div className="register-left">
          <div className="left-background" style={{ backgroundImage: `url(${imgLeft})` }}>
            <div className="left-overlay"></div>
            <div className="left-content">
              <div className="left-header">
                <p>Join the vibrant community of</p>
                <h1>Soil & Environmental Science Professionals</h1>
              </div>
              <div className="left-footer">
                <img src={imgFrame} alt="Info icon" className="info-icon" />
                <p>All information will be kept confidential and used solely for membership and professional networking purposes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="register-right">
          {/* Header */}
          <div className="register-header">
            <h2>Register as a Professional</h2>
            <p>Fill in the form below to complete your registration with the Soil Science Society of Pakistan.</p>
          </div>

          <div className="register-main">
            {/* Step Indicator */}
            <div className="step-indicator">
              {steps.map((step) => (
                <div key={step.number} className="step-item">
                  <div className={`step-circle ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                    {step.number}
                  </div>
                  <span className={`step-label ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                    {step.label}
                  </span>
                  {step.number < steps.length && <div className="step-connector"></div>}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="form-container">
              {renderStepContent()}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="form-navigation">
            <button 
              className="btn btn-secondary" 
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
              disabled={currentStep === steps.length}
            >
              {currentStep === steps.length ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
