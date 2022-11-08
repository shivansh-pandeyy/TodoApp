import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Users from './Users';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

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

  test('check users list', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Users />
        </BrowserRouter>
      </Provider>
    );

    const listItemElements = await screen.findAllByLabelText('settings');
    expect(listItemElements).not.toHaveLength(0);
  });
});
