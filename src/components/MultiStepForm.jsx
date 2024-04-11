import React, { useState } from 'react';
import Signup from './Signup';
import Welcome from './Welcome';
import Role from './Role';
import Final from './Final';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: '',
    UserName: '',
    Email: '',
    Password: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const values = { ...formData };

  switch (step) {
    case 1:
      return <Signup nextStep={nextStep} handleChange={handleChange} values={values} />;
    case 2:
      return <Welcome nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={values} />;
    case 3:
      return <Role nextStep={nextStep} prevStep={prevStep} values={values} />;
    case 4:
      return <Final values={values} />;
    default:
      return <p>This is a multi-step form built with React.</p>;
  }
}

export default MultiStepForm;
