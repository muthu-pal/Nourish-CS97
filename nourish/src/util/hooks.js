import { useState, useEffect } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    let res = [];
    if (event.target.name === "tagsString"){
      let a = event.target.value;
      res = a.split(" ").join("").split(',');
      let resNoDupes = [...new Set(res)];
      setValues({ ...values, 
        tagsString: event.target.value,
        tags: resNoDupes
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
    onChange(event.target.tags);
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


