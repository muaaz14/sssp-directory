import React, { useState } from "react";
import { Steps, Form, Input, Button, message } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./RegisterWizard.css";

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
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "Education",
      description: "Your role and skills",
      content: (
        <>
          <Form.Item
            label="Role / Profession"
            name="role"
            rules={[{ required: true, message: "Please enter your role" }]}
          >
            <Input placeholder="UX Designer" />
          </Form.Item>
          <Form.Item
            label="Expertise"
            name="expertise"
            rules={[{ required: true, message: "Please enter your expertise" }]}
          >
            <Input placeholder="UI/UX, Product Design, React" />
          </Form.Item>
        </>
      ),
    },{
      title: "Professional Info",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Contact Info",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Membership Info",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Researches",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Online Presence",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
          </Form.Item>
        </>
      ),
    },{
      title: "Awards & Honors",
      description: "Basic details about you",
      content: (
        <>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="john@example.com" />
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
