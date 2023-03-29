import { render, screen} from '@testing-library/react';
import React from 'react';

import Login from '../pages/Login';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should have userid and password field ,also a submit button' , ()=>{
    render(<Login/>)
    const UserNameField= screen.getByPlaceholderText(/Enter username/i);
    const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
    const SubmitButton = screen.getByText(/Submit/i)

    expect(UserNameField).toBeInTheDocument();
    expect(PasswordField).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
})



