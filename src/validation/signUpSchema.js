import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required').max(30, 'Max length exceeded'),
  email: yup.string().email('Not a valid email address').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Too short'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default schema;
