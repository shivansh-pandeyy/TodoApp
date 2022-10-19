import * as Yup from 'yup';
import { phoneRegExp } from '../../../helpers/regex';
const requiredMessage = 'This is a required field';

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
};

export const InputConfig = [
  {
    label: 'Name',
    id: fieldNames.NAME,
  },
  {
    label: 'Username',
    id: fieldNames.USERNAME,
  },
  {
    label: 'Phone',
    id: fieldNames.PHONE,
  },
  {
    label: 'Website',
    id: fieldNames.WEBSITE,
  },
  {
    label: 'Email',
    id: fieldNames.EMAIL,
  },
  {
    label: 'Street',
    id: fieldNames.STREET,
  },
  {
    label: 'Suite',
    id: fieldNames.SUITE,
  },
  {
    label: 'City',
    id: fieldNames.CITY,
  },
  {
    label: 'Zipcode',
    id: fieldNames.ZIPCODE,
  },
];

export const userValidation = Yup.object().shape({
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

export interface FormValues {
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
