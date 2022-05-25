import * as yup from 'yup';

const productSchema = yup.object({
  productName: yup.string().required('Name is required'),
  description: yup.string().required('Give a description'),
  price: yup
    .number()
    .positive('Give a number greater than 0')
    .required('Add per unit price')
    .typeError('Add per unit price (number)'),
  availableQuantity: yup
    .number()
    .positive('Give a number greater than 0')
    .required('Add stock quantity')
    .typeError('Add stock quantity (number)'),
  minimumOrderQuantity: yup
    .number()
    .positive('Give a number greater than 0')
    .required('Give a minimum order quantity value')
    .typeError('Give a minimum order quantity value (number)'),
  image: yup
    .mixed()
    .test('required', 'You need to provide an image of the product', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'Image size can not be larger than 2mb', (value) => {
      return value && value[0]?.size <= 2000000;
    }),
});

export default productSchema;
