import { useState, useEffect } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  useEffect(() => {
    if (isSubmitting) callback();
  });

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
