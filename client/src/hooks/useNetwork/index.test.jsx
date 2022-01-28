//import { render, screen } from '@testing-library/react';

//import userEvent from '@testing-library/user-event';
import useNetwork from './index';
import { renderHook } from '@testing-library/react-hooks';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
test('Test useNetwork', () => {
  const { result } = renderHook(() => useNetwork());
  window.ononline = () => {
    expect(result.current.isOnline).toBe(true);
  };
  window.onoffline = () => {
    expect(result.current.isOnline).toBe(false);
  };
});
