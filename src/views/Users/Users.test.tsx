import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Users from './Users';

describe('Users', () => {
  test('check users heading exists', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Users />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Users')).toBeInTheDocument();
  });
});
