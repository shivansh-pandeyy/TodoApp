import { Box, Button, Typography } from '@mui/material';
import { getIn, useFormik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup';
import Input from '../../../components/Input/Input';
import { createPost } from '../../../redux/actions/posts';
import { PostPayloadProps } from '../../../redux/constants/posts';
import { useAppDispatch } from '../../../redux/hooks';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('This field is required'),
  body: Yup.string().required('This field is required'),
});

const CreatePost = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const initialValues = {
    title: '',
    body: '',
  };
  const { values, handleChange, handleBlur, errors, handleSubmit } = useFormik({
    initialValues: initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
    onSubmit: (val: PostPayloadProps) => {
      if (params.id) {
        dispatch(
          createPost(params.id, val, () =>
            navigate(`/users/${params.id}/posts`)
          )
        );
      }
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Create Post</Typography>

      <Box
        mt={3}
        display="flex"
        flexDirection="column"
        component="form"
        justifyContent="center"
        gap={2}
        onSubmit={handleSubmit}
      >
        <Input
          label="Title"
          id="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={getIn(values, 'title')}
          errorText={getIn(errors, 'title')}
          error={!!getIn(errors, 'title')}
        />
        <Input
          label="Body"
          id="body"
          onChange={handleChange}
          onBlur={handleBlur}
          value={getIn(values, 'body')}
          errorText={getIn(errors, 'body')}
          error={!!getIn(errors, 'body')}
        />
        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            marginTop: 3,
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
