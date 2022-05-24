import * as yup from 'yup';

const reviewSchema = yup.object({
  name: yup.string().required('Name is required').max(30, 'Max length exceeded'),
  testimonial: yup
    .string()
    .required('Say something')
    .max(500, 'Max(500) characters limit exceeded'),
  ratings: yup
    .number()
    .positive()
    .min(1, 'can not give less than 1 rating')
    .max(5, 'Please put a number between 1 to 5')
    .typeError('Please give a rating out of 5')
    .required('Please give a rating out of 5'),
});

export default reviewSchema;
