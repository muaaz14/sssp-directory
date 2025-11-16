import React, { useState } from "react";
import { Steps, Form, Input, InputNumber, Button, message, Select } from "antd";
import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import "./RegisterWizard.css";
import "./profile-card-template-2.css";
import KeywordInput from "../components/keyword-input.jsx";
import AwardsList from "../components/award-list.jsx";


const { Step } = Steps;

const RegisterWizard = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [returnToStep, setReturnToStep] = useState(null);

  const membershipStatus = Form.useWatch("membershipStatus", form);

  const fieldsByStep = {
    0:["title","firstName","middleName","lastName","email","phoneNumber"],
    1:["highestDegree","degreeYear","degreeInstitute"],                   
    2:["designation","organization","officeContact","socialLinkOrgPage"], 
    3:["membershipStatus","membershipType","memId"],
    4:["researchArea"],
    5:["socialLinkPerWeb","socialLinkResearchgate","socialLinkGoogleScholar","socialLinkOrcid","socialLinkLinkedin"],
    6:["awardsAndHonors"],
  };

  // useEffect(() => {
  //   const currentFields = fieldsByStep[current] || [];
  //   const valuesToSet = {};
  //   currentFields.forEach(field => {
  //     if (formData[field] !== undefined) valuesToSet[field] = formData[field];
  //   });
    
  //   form.setFieldsValue(valuesToSet);
  //   }, [current, formData, form]
  // );



  const onFinish = (values) => {
    // merge any remaining visible fields (values param comes from AntD submit)
    const finalPayload = { ...formData, ...values };
    console.log("Submitting:", finalPayload);
    // TODO: send finalPayload to backend / supabase
    message.success("Registration submitted!");
  };


  const steps = [
    {
      title: "Personal Info",
      description: "Let's start with your basic information",
      content: (
        <>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please select a title" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="Dr">Dr</Select.Option>
                <Select.Option value="Prof">Prof</Select.Option>
                <Select.Option value="Mr">Mr</Select.Option>
                <Select.Option value="Ms">Ms</Select.Option>
                <Select.Option value="Mrs">Mrs</Select.Option>
            </Select>
          </Form.Item>
          
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Enter your first name" }]}>
            <Input placeholder="Abraham" />
          </Form.Item>
          
          <Form.Item label="Middle Name" name="middleName" rules={[{ required: false, message: "Enter your middle name" }]}>
            <Input placeholder="Benjamin" />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Enter your last name" }]}>
            <Input placeholder="Devilliars" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Enter your email" }]}>
            <Input placeholder="john@example.com" />
          </Form.Item>
          
          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: "Enter your Phone Number" }]}>
            <Input placeholder="Enter your phone number" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Education",
      description: "Tell us about your qualifications",
      content: (
        <>
          <Form.Item label="Highest Degree Achieved" name="highestDegree" rules={[{ required: true, message: "Select your highest degree achieved" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="PhD">PhD</Select.Option>
                <Select.Option value="MSc. (Hons.) Agriculture - Soil Science">MSc. (Hons.) Agriculture - Soil Science</Select.Option>
                <Select.Option value="MSc. (Hons.) Agriculture - Soil & Environmental Science">MSc. (Hons.) Agriculture - Soil & Environmental Science</Select.Option>
                <Select.Option value="M. Phil Environmental Science">M. Phil Environmental Science</Select.Option>
                <Select.Option value="MSc. Environmental Science">MSc. Environmental Science</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Year of Passing the Degree" name="degreeYear" rules={[{ required: true, message: "Enter the year of passing the degree" }]}>
            <InputNumber placeholder="2001" className="input-number" />
          </Form.Item>

          <Form.Item label="Degree Awarding Institute" name="degreeInstitute" rules={[{ required: true, message: "Enter the name of degree awarding institute" }]}>
            <Input placeholder="PMAS Arid Agriculture University Rawalpindi" />
          </Form.Item>
        </>
      ),
    },{
      title: "Professional Info",
      description: "Provide information about your professional experiences",
      content: (
        <>
          <Form.Item label="Designation" name="designation" rules={[{ required: true, message: "Please enter your expertise" }]}>
            <Input placeholder="e.g., Associate Professor, Research Assistant" />
          </Form.Item>

          <Form.Item label="Institute / Organization" name="organization" rules={[{ required: true, message: "Please enter your organization name" }]}>
            <Input placeholder="Enter your organization name" />
          </Form.Item>

          <Form.Item label="Office Contact" name="officeContact" rules={[{ required: false}]}>
            <Input placeholder="Enter your office contact" />
          </Form.Item>

          <Form.Item label="Link to Your Webpage at Organizational Website" name="socialLinkOrgPage" rules={[{ required: false }]}>
            <Input placeholder="https://example.edu/profile/yourname" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Membership Info",
      description: "Tell us about your membership with the Soil Science Society of Pakistan",
      content: (
        <>
          <Form.Item label="Membership Status" name="membershipStatus" rules={[{ required: true, message: "Select your membership status" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="Member">Member</Select.Option>
                <Select.Option value="Non-Member">Non - Member</Select.Option>
            </Select>
          </Form.Item>

          {membershipStatus === "Member" && (
            <>
              <Form.Item label="Membership Type" name="membershipType" rules={[{ required: true, message: "Select your type of membership" }]}>
                <Select className="select-dpdn" placeholder="Select">
                    <Select.Option value="Honorary Member">Honorary Member</Select.Option>
                    <Select.Option value="Life Member">Life Member</Select.Option>
                    <Select.Option value="Regular Member">Regular Member</Select.Option>
                    <Select.Option value="Student Member">Student Member</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Membership ID" name="memId" rules={[{ required: true, message: "Please enter your Membership ID" }]}>
                <Input placeholder="john@example.com" />
              </Form.Item>
            </>
          )}
        </>
      ),
    },{
      title: "Research Profile",
      description: "Share your research interests and expertise",
      content: (
        <>
          <Form.Item label="Main Area of Research" name="researchArea" rules={[{ required: true, message: "Select your strong area of research" }]}>
            <Select showSearch className="select-dpdn" placeholder="Select">
                <Select.Option value="Soil & Environmental Chemistry">Soil & Environmental Chemistry</Select.Option>
                <Select.Option value="Soil Fertility">Soil Fertility</Select.Option>
                <Select.Option value="Plant Nutrition Management">Plant Nutrition Management</Select.Option>
                <Select.Option value="Soil Microbiology & Biochemistry">Soil Microbiology & Biochemistry</Select.Option>
                <Select.Option value="Soil & Water Conversation">Soil & Water Conversation</Select.Option>
                <Select.Option value="Soil Physics">Soil Physics</Select.Option>
                <Select.Option value="Soil Mineralogy">Soil Mineralogy</Select.Option>
                <Select.Option value="Soil Genesis, Survey & Classification">Soil Genesis, Survey & Classification</Select.Option>
                <Select.Option value="Soil Contamination">Soil Contamination</Select.Option>
                <Select.Option value="Air Contamination">Air Contamination</Select.Option>
                <Select.Option value="Water Contamination">Water Contamination</Select.Option>
                <Select.Option value="Soil Salinity & Biosaline Agriculture">Soil Salinity & Biosaline Agriculture</Select.Option>
                <Select.Option value="Climate Change">Climate Change</Select.Option>
                <Select.Option value="GIS, Remote Sensing & Digital Soil Mapping">GIS, Remote Sensing & Digital Soil Mapping</Select.Option>
                <Select.Option value="Land Reclamationß"> Land Reclamation</Select.Option>
            </Select>
          </Form.Item>


          <Form.Item label="Add Your Keywords (Max 5)">
            <KeywordInput />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Online Presence",
      description: "Share your professional profiles and webpages",
      content: (
        <>

          <Form.Item label="Personal Website" name="socialLinkPerWeb" rules={[{ required: false }]}>
            <Input placeholder="https://yourwebsite.com" />
          </Form.Item>
          
          <Form.Item label="ResearchGate Profile" name="socialLinkResearchgate" rules={[{ required: false }]}>
            <Input placeholder="https://scholar.google.com/citations?user=..." />
          </Form.Item>

          <Form.Item label="Google Scholar Profile" name="socialLinkGoogleScholar" rules={[{ required: false }]}>
            <Input placeholder="https://scholar.google.com/citations?user=..." />
          </Form.Item>

          <Form.Item label="ORCID" name="socialLinkOrcid" rules={[{ required: false }]}>
            <Input placeholder="0000-0000-0000-0000" />
          </Form.Item>

          <Form.Item label="LinkedIn Profile Link" name="socialLinkLinkedin" rules={[{ required: false }]}>
            <Input placeholder="https://linkedin.com/in/yourprofile" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Awards & Honors",
      description: "Share any notable awards or recognition you've received",
      content: (
        <>
          <Form.Item label="Awards & Achievements" name="awardsAndHonors" rules={[{ required: false }]}>
            <AwardsList />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Review",
      description: "Verify all the details before submission",
      content: (
        <div className="review-container">
          <div className="rev-sec">
            <div className="sec-head">
              <h3>Personal Information</h3>
              <Button type="link" onClick={() => goToStep(0)}>Edit</Button>
            </div>
            <div className="sec-body">
              <div className="info-row">
                  <p className="info-label-2">Title:</p>
                  <p className="info-data reg-location">{formData["title"]}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Name:</p>
                  <p className="info-data reg-location">{(formData["firstName"] || "") + " " + (formData["middleName"] || "") + " " + (formData["lastName"] || "")}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Email:</p>
                  <p className="info-data reg-location">{formData["email"]}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Phone Number:</p>
                  <p className="info-data reg-location">{formData["phoneNumber"]}</p>
              </div>
            </div>
          </div>

          <div className="rev-sec">
            <div className="sec-head">
              <h3>Educational Information</h3>
              <Button type="link" onClick={() => goToStep(1)}>Edit</Button>
            </div>
            <div className="sec-body">
              <div className="info-row">
                  <p className="info-label-2">Highest Degree Achieved:</p>
                  <p className="info-data reg-location">{formData["highestDegree"]}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Year of Passing:</p>
                  <p className="info-data reg-location">{(formData["degreeYear"] || "")}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Degree Awarding Institute:</p>
                  <p className="info-data reg-location">{formData["degreeInstitute"]}</p>
              </div>
            </div>
          </div>
          
          <div className="rev-sec">
            <div className="sec-head">
              <h3>Professional Information</h3>
              <Button type="link" onClick={() => goToStep(2)}>Edit</Button>
            </div>
            <div className="sec-body">
              <div className="info-row">
                  <p className="info-label-2">Designation:</p>
                  <p className="info-data reg-location">{formData["designation"]}</p>
              </div>
              <div className="info-row">
                  <p className="info-label-2">Organization:</p>
                  <p className="info-data reg-location">{(formData["organization"] || "")}</p>
              </div>
              { formData["officeContact"] && (
                  <div className="info-row">
                      <p className="info-label-2">Office Contact:</p>
                      <p className="info-data reg-location">{formData["officeContact"]}</p>
                  </div>
              )}

              { formData["socialLinkorgPage"] && (
                <div className="info-row">
                    <p className="info-label-2">Your Webpage on Organizations Website:</p>
                    <p className="info-data reg-location">{formData["socialLinkOrgPage"]}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rev-sec">
            <div className="sec-head">
              <h3>Membership Info</h3>
              <Button type="link" onClick={() => goToStep(3)}>Edit</Button>
            </div>
            <div className="sec-body">
              <div className="info-row">
                  <p className="info-label-2">Membership Status:</p>
                  <p className="info-data reg-location">{formData["membershipStatus"]}</p>
              </div>
              { formData["membershipStatus"] === "Member" && (
                <div>
                  <div className="info-row">
                    <p className="info-label-2">Membership Type:</p>
                    <p className="info-data reg-location">{formData["membershipType"]}</p>
                  </div>
                  <div className="info-row">
                      <p className="info-label-2">Membership ID:</p>
                      <p className="info-data reg-location">{formData["memId"]}</p>
                  </div>
                </div>
                )
              }
            </div>
          </div>

          <div className="rev-sec">
            <div className="sec-head">
              <h3>Research Information</h3>
              <Button type="link" onClick={() => goToStep(4)}>Edit</Button>
            </div>
            <div className="sec-body">
              <div className="info-row">
                  <p className="info-label-2">Area of Research:</p>
                  <p className="info-data reg-location">{formData["researchArea"]}</p>
              </div>
            </div>
          </div>

          {/* add more sections similarly */}
        </div>
      )
    }

  ];


    const reviewIndex = steps.length - 1;
    const goToStep = (stepIndex) => {
      setReturnToStep(reviewIndex);
      setCurrent(stepIndex);
    };




//   const goNext = () => {
//   form
//     .validateFields()
//     .then(() => {
//       setCurrent(current + 1);
//     })
//     .catch(() => {
//       message.error("Please fill all the required fields.");
//     });
// };


// const goNext = async () => {
//   const stepFields = fieldsByStep[current] || [];

//   form
//     .validateFields()
//     .then(() => {
//       setCurrent(current + 1);
//     })
//     .catch(() => {
//       message.error("Please fill all the required fields.");
//     });

//   try {
//     const values = await form.validateFields(stepFields);

//     setFormData(prev => ({ ...prev, ...values }));

//     if (returnToStep !== null) {
//       setCurrent(returnToStep);
//       setReturnToStep(null);
//       return;
//     }

//     setCurrent(prev => prev + 1);
//   } catch (err) {
//     message.error("Please fill all required fields on this step.");
//   }
// };

const goNext = async () => {
  const stepFields = fieldsByStep[current] || [];

  try {
    // 1. Validate only this step
    const values = await form.validateFields(stepFields);

    // 2. Save values to formData
    setFormData(prev => ({ ...prev, ...values }));

    // 3. If user came from Review, send them back there
    if (returnToStep !== null) {
      setCurrent(returnToStep);
      setReturnToStep(null);
      return;
    }

    // 4. Otherwise, go to next step
    setCurrent(prev => prev + 1);

  } catch (err) {
    message.error("Please fill all the required fields.");
  }
};



  const next = () => {
    goNext() && setCurrent(current + 1);
  };

  const prev = () => setCurrent(current - 1);



  return (
    <div className="wizard-container">
      {/* Left Section — Stepper */}
      <div className="wizard-sidebar">
        <Steps
          direction="vertical"
          current={current}
          // onChange={(index) => setCurrent(index)}
          items={steps.map((step, index) => ({
            title: step.title,
            // description: step.description,
            status:
              current > index ? "finish" : current === index ? "process" : "wait",
            icon: current > index ? <CheckCircleFilled  style={{ color: '#593e22' }} /> : undefined,
          }))}
        />
      </div>

      {/* Right Section — Step Header + Form + Footer */}
      <div className="wizard-content">
        {/* Step Header */}
        <div className="step-header">
          <h2>{steps[current].title}</h2>
          <p>{steps[current].description}</p>
        </div>

        {/* Step Form */}
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {steps[current].content}

          
        </Form>
        
        {/* Step Footer */}
          <div className="step-footer">
            <Button onClick={() => message.info("Cancelled")}>Cancel</Button>
            <div className="footer-buttons">
              {current > 0 && (
                <Button onClick={prev} className="back-btn">
                  Back
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={goNext}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default RegisterWizard;
