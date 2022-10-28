import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Input from '../../../components/Input/Input';
import { getIn, useFormik } from 'formik';
import { addUser } from '../../../redux/actions/users';
import { FormValues, userValidation, InputConfig } from './config';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../redux/hooks';

const CreateUser = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
    validationSchema: userValidation,
    onSubmit: (val: FormValues) => {
      dispatch(addUser(val, () => navigate('/')));
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
      <Typography mb={5} variant="h3">
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
