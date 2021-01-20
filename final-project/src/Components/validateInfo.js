export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Name required';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.address) {
      errors.address = 'Address is required';
    }
  
    if (!values.no) {
      errors.no = 'Mobile Number is required';
    }
    return errors;
  }