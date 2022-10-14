import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Input from '../../../components/Input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../helpers/regex';
import { addUser } from '../../../redux/actions/users';
import { useDispatch } from 'react-redux';

const requiredMessage = 'This is a required field';

const createUserValidation = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  username: Yup.string().required(requiredMessage),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required(requiredMessage),
  website: Yup.string().url('Please enter a valid URL').required(requiredMessage),
  email: Yup.string().email('Please enter a valid email').required(requiredMessage),
  street: Yup.string().required(requiredMessage),
  suite: Yup.string().required(requiredMessage),
  city: Yup.string().required(requiredMessage),
  zipcode: Yup.string().required(requiredMessage),
});

const fieldNames = {
  NAME: 'name',
  USERNAME: 'username',
  PHONE: 'phone',
  WEBSITE: 'website',
  EMAIL: 'email',
  STREET: 'street',
  SUITE: 'suite',
  CITY: 'city',
  ZIPCODE: 'zipcode',
}

interface FormValues  {
  name: string; 
  username: string;
  phone: string;
  website: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const CreateUser = () => {
  const initialValues : FormValues = {
      name: '',
      username: '',
      phone: '',
      website: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      zipcode: ''
  }
  const { handleChange, handleBlur, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: createUserValidation,
    onSubmit: (val) => {
      console.log(val);
      addUser(val);
    },
  });

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography mb={5} variant="h2">Create User</Typography>

      <Stack spacing={2} component='form' onSubmit={handleSubmit} >
        <Input onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.NAME}
          label="Name"
          errorText={errors.name}
          error={errors.name ? true : false}
          value={values.name} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.USERNAME}
          label="Username"
          errorText={errors.username}
          error={errors.username ? true : false}
          value={values.username} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.PHONE}
          label="Phone"
          errorText={errors.phone}
          error={errors.phone ? true : false}
          value={values.phone} 
          />
        <Input onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.WEBSITE}
          label="Website"
          errorText={errors.website} error={errors.website ? true : false} value={values.website} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.EMAIL}
          label="Email"
          errorText={errors.email}
          error={errors.email ? true : false}
          value={values.email} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.STREET}
          label="Street"
          errorText={errors.street}
          error={errors.street ? true : false}
          value={values.street} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.SUITE}
          label="Suite"
          errorText={errors.suite}
          error={errors.suite ? true : false}
          value={values.suite} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.CITY}
          label="City"
          errorText={errors.city}
          error={errors.city ? true : false}
          value={values.city} 
          />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          id={fieldNames.ZIPCODE}
          label="Zipcode"
          errorText={errors.zipcode}
          error={errors.zipcode ? true : false}
          value={values.zipcode} 
          />
        <Button sx={{
          backgroundColor: '#000',
          color: 'white',
        }} color='primary' type='submit'>Submit</Button>
      </Stack>
    </Box>
  )
}

export default CreateUser
