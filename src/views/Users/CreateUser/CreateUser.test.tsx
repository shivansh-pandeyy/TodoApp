import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../redux/store';
import CreateUser from './CreateUser';

const userObj = {
  name: 'shivansh',
  username: 'shivansh8',
  phone: '1234567890',
  website: 'https://hello.com',
  email: 'hello@hello.com',
  street: '123',
  suite: 'suites',
  city: 'lucknow',
  zipcode: '1243',
};

describe('create user', () => {
  test('create user form should load', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateUser />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Create User')).toBeInTheDocument();
  });

  test('create user form submits correct values', async () => {
    const onSubmit = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateUser onSubmitVal={onSubmit} />
        </BrowserRouter>
      </Provider>
    );

    await userEvent.type(screen.getByLabelText('name'), 'shivansh');
    await userEvent.type(screen.getByLabelText('username'), 'shivansh8');
    await userEvent.type(screen.getByLabelText('phone'), '1234567890');
    await userEvent.type(screen.getByLabelText('website'), 'https://hello.com');
    await userEvent.type(screen.getByLabelText('email'), 'hello@hello.com');
    await userEvent.type(screen.getByLabelText('street'), '123');
    await userEvent.type(screen.getByLabelText('suite'), 'suites');
    await userEvent.type(screen.getByLabelText('city'), 'lucknow');
    await userEvent.type(screen.getByLabelText('zipcode'), '1243');

    await userEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(userObj);
    });
  });
});
