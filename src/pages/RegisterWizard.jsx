import React, { useState } from "react";
import { Steps, Form, Input, InputNumber, Button, message, Select } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./RegisterWizard.css";
import KeywordInput from "../components/keyword-input.jsx";
import AwardsList from "../components/award-list.jsx";

const { Step } = Steps;

const RegisterWizard = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

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
          
          <Form.Item label="First Name" name="first-name" rules={[{ required: true, message: "Enter your first name" }]}>
            <Input placeholder="Abraham" />
          </Form.Item>
          
          <Form.Item label="Middle Name" name="middle-name" rules={[{ required: false, message: "Enter your middle name" }]}>
            <Input placeholder="Benjamin" />
          </Form.Item>

          <Form.Item label="Last Name" name="last-name" rules={[{ required: true, message: "Enter your last name" }]}>
            <Input placeholder="Devilliars" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Enter your email" }]}>
            <Input placeholder="john@example.com" />
          </Form.Item>
          
          <Form.Item label="Phone Number" name="phone-number" rules={[{ required: true, message: "Enter your Phone Number" }]}>
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
          <Form.Item label="Highest Degree Achieved" name="highest-degree" rules={[{ required: true, message: "Select your highest degree achieved" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="PhD">PhD</Select.Option>
                <Select.Option value="msc-soil-sci">MSc. (Hons.) Agriculture - Soil Science</Select.Option>
                <Select.Option value="msc-soil-env-sci">MSc. (Hons.) Agriculture - Soil & Environmental Science</Select.Option>
                <Select.Option value="mphil-env-sci">M. Phil Environmental Science</Select.Option>
                <Select.Option value="msc-env-sci">MSc. Environmental Science</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Year of Passing the Degree" name="degree-year" rules={[{ required: true, message: "Enter the year of passing the degree" }]}>
            <InputNumber placeholder="2001" className="input-number" />
          </Form.Item>

          <Form.Item label="Degree Awarding Institute" name="degree-institute" rules={[{ required: true, message: "Enter the name of degree awarding institute" }]}>
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

          <Form.Item label="Office Contact" name="office-contact" rules={[{ required: false}]}>
            <Input placeholder="Enter your office contact" />
          </Form.Item>

          <Form.Item label="Link to Your Webpage at Organizational Website" name="social-link-org-page" rules={[{ required: false }]}>
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
          <Form.Item label="Membership Status" name="membership-status" rules={[{ required: true, message: "Select your membership status" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="yes">Member</Select.Option>
                <Select.Option value="no">Non - Member</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Membership Type" name="membership-type" rules={[{ required: true, message: "Select your type of membership" }]}>
            <Select className="select-dpdn" placeholder="Select">
                <Select.Option value="hon-mem">Honorary Member</Select.Option>
                <Select.Option value="lif-mem">Life Member</Select.Option>
                <Select.Option value="reg-mem">Regular Member</Select.Option>
                <Select.Option value="std-mem">Student Member</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Membership ID" name="mem-id" rules={[{ required: true, message: "Please enter your Membership ID" }]}>
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Research Profile",
      description: "Share your research interests and expertise",
      content: (
        <>
          <Form.Item label="Main Area of Research" name="research-are" rules={[{ required: true, message: "Select your strong area of research" }]}>
            <Select showSearch className="select-dpdn" placeholder="Select">
                <Select.Option value="hon-mem">Soil & Environmental Chemistry</Select.Option>
                <Select.Option value="lif-mem">Soil Fertility</Select.Option>
                <Select.Option value="reg-mem">Plant Nutrition Management</Select.Option>
                <Select.Option value="std-mem">Soil Microbiology & Biochemistry</Select.Option>
                <Select.Option value="std-mem">Soil & Water Conversation</Select.Option>
                <Select.Option value="soil-physics">Soil Physics</Select.Option>
                <Select.Option value="std-mem">Soil Mineralogy</Select.Option>
                <Select.Option value="std-mem">Soil Genesis, Survey & Classification</Select.Option>
                <Select.Option value="std-mem">Soil Contamination</Select.Option>
                <Select.Option value="std-mem">Air Contamination</Select.Option>
                <Select.Option value="std-mem">Water Contamination</Select.Option>
                <Select.Option value="std-mem">Soil Salinity & Biosaline Agriculture</Select.Option>
                <Select.Option value="std-mem">Climate Change</Select.Option>
                <Select.Option value="std-mem">GIS, Remote Sensing & Digital Soil Mapping</Select.Option>
                <Select.Option value="std-mem"> Land Reclamation</Select.Option>
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

          <Form.Item label="Personal Website" name="social-link-per-web" rules={[{ required: false }]}>
            <Input placeholder="https://yourwebsite.com" />
          </Form.Item>
          
          <Form.Item label="ResearchGate Profile" name="social-link-researchgate" rules={[{ required: false }]}>
            <Input placeholder="https://scholar.google.com/citations?user=..." />
          </Form.Item>

          <Form.Item label="Google Scholar Profile" name="social-link-google-scholar" rules={[{ required: false }]}>
            <Input placeholder="https://scholar.google.com/citations?user=..." />
          </Form.Item>

          <Form.Item label="ORCID" name="social-link-orcid" rules={[{ required: false }]}>
            <Input placeholder="0000-0000-0000-0000" />
          </Form.Item>

          <Form.Item label="LinkedIn Profile Link" name="social-link-linkedin" rules={[{ required: false }]}>
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
          <Form.Item label="Awards & Achievements" name="awards-and-honors" rules={[{ required: false }]}>
            <AwardsList />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Summary",
      description: "Final confirmation",
      content: (
        <>
          <p>Review your information and click submit to finish registration.</p>
        </>
      ),
    },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const onFinish = (values) => {
    console.log("Submitted values:", values);
    message.success("Registration submitted!");
  };

  return (
    <div className="wizard-container">
      {/* Left Section — Stepper */}
      <div className="wizard-sidebar">
        <Steps
          direction="vertical"
          current={current}
          items={steps.map((step, index) => ({
            title: step.title,
            // description: step.description,
            status:
              current > index ? "finish" : current === index ? "process" : "wait",
            icon: current > index ? <CheckCircleOutlined /> : undefined,
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
                <Button type="primary" onClick={next}>
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
