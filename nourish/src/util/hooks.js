import { useState, useEffect } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    let res = [];
    if (event.target.name === "tagsString"){
      res = values.tagsString.split(',');
      setValues({ ...values, 
        tagsString: event.target.value,
        tags: res
      });
    }
    else{
    setValues({ ...values, 
      [event.target.name]: event.target.value
    });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    callback();
  };
  
  
  return {
    onChange,
    onSubmit,
    onSubmitForm,
    values
  };
};


