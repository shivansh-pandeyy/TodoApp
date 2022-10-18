import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Input from '../../../components/Input';
import { getIn, useFormik } from 'formik';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../helpers/regex';
import { addUser } from '../../../redux/actions/users';
import InputConfig from './config';
import { useNavigate } from 'react-router';

const requiredMessage = 'This is a required field';

const createUserValidation = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  username: Yup.string().required(requiredMessage),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(requiredMessage),
  website: Yup.string()
    .url('Please enter a valid URL')
    .required(requiredMessage),
  email: Yup.string()
    .email('Please enter a valid email')
    .required(requiredMessage),
  street: Yup.string().required(requiredMessage),
  suite: Yup.string().required(requiredMessage),
  city: Yup.string().required(requiredMessage),
  zipcode: Yup.string().required(requiredMessage),
});

interface FormValues {
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

const CreateUser = (): JSX.Element => {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    name: '',
    username: '',
    phone: '',
    website: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  };
  const { handleChange, handleBlur, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: createUserValidation,
    onSubmit: (val) => {
      addUser(val);
      navigate('/');
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography mb={5} variant="h2">
        Create User
      </Typography>

      <Stack spacing={2} component="form" onSubmit={handleSubmit}>
        {InputConfig &&
          InputConfig.map((input) => {
            return (
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                id={input.id}
                label={input.label}
                errorText={getIn(errors, input.id)}
                error={!!getIn(errors, input.id)}
                value={getIn(values, input.id)}
              />
            );
          })}
        <Button
          sx={{
            backgroundColor: '#000',
            color: 'white',
          }}
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateUser;
