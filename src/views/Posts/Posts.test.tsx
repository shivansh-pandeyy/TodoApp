import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import Posts from './Posts';
import { MemoryRouter, Route, Routes } from 'react-router';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Posts', () => {
  test('posts header displays', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('AddIcon')).toBeInTheDocument();
  });

  test('fetches posts from API and displays them', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/users/1/posts']}>
          <Routes>
            <Route path="/users/:id/posts" element={<Posts />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const postElements = await screen.findAllByLabelText('modal');
    expect(postElements).not.toHaveLength(0);
  });
});
