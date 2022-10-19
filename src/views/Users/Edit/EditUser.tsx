import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Input from '../../../components/Input/Input';
import { getIn, useFormik } from 'formik';
import { editUser } from '../../../redux/actions/users';
import { FormValues, userValidation, InputConfig } from '../CreateUser/config';
import { useNavigate, useParams } from 'react-router';
import { getUser } from '../../../api/users';

const EditUser = (): JSX.Element => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const params = useParams();
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
  const { handleChange, handleBlur, values, handleSubmit, errors, setValues } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: userValidation,
      onSubmit: (val) => {
        if (params.id) {
          editUser(params.id, val, () => {
            navigate('/');
          });
        }
      },
    });

  const handleGetUser = async () => {
    const id = params.id;
    if (id) {
      const res = await getUser(id);
      const userInfo = { ...res.data, ...res.data.address };
      console.log(userInfo);
      setValues(userInfo);
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    setIsProcessing(true);
    handleGetUser();
  }, []);

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
        Edit User
      </Typography>

      {isProcessing ? (
        <h1> Loading... </h1>
      ) : (
        <Stack spacing={2} component="form" onSubmit={handleSubmit}>
          {InputConfig &&
            InputConfig.map((input) => {
              return (
                <Input
                  key={input.id}
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
            Edit
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default EditUser;
