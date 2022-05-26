import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('Not a valid email')
    .required('Type your email address')
    .typeError('Type your email address'),
});
export default schema;
