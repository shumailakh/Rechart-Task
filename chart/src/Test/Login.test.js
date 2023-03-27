import { render, screen,fireEvent,waitFor   } from '@testing-library/react';
import React from 'react';

// import userEvent from "@testing-library/user-event";
import Login from '../pages/Login';
// import userEvent from "@testing-library/user-event"
    
// const submit = jest.fn()

// beforeEach(()=>{
//   const {  } = render(<Login />)
//   submit.mockClear()
// })
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


// test('Login form parametre olarak doğru data gönderme testi', async () => {
//     const eMail = screen.getByTestId('text-input-element')
//     const password = screen.getByTestId('password-input-element')
//     userEvent.type(eMail, "fillWithTestUsername")
//     userEvent.type(password, "fillWithTestPassword")
  
//     userEvent.click(screen.getByTestId('login-button-element'))
  
//     await waitFor(()=>{
//       expect(submit).toHaveBeenCalledTimes(1)
// })
// })
      
    
 

test('should have userid and password field ,also a submit button' , ()=>{
    render(<Login/>)
    const UserIDField= screen.getByPlaceholderText(/Enter UserID/i);
    const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
    const SubmitButton = screen.getByText(/Submit/i)

    expect(UserIDField).toBeInTheDocument();
    expect(PasswordField).toBeInTheDocument();
    expect(SubmitButton).toBeInTheDocument();
})

// test('should allow user to submit their credential' , ()=>{
//     const submit = jest.fn()
//     render(<Login submit={submit}/>)
//     // const UserIDField= screen.getByPlaceholderText(/Enter UserID/i);
//     // const PasswordField = screen.getByPlaceholderText(/Enter Password/i);
//     // const SubmitButton = screen.getByText(/Submit/i);

//     // userEvent.type(UserIDField,'shum@gmail.com');
//     // userEvent.type(PasswordField,'test');
//     // userEvent.click(SubmitButton)
//     // expect(submit).toHaveBeenCalledWith({
//     //     email:'shum@gmail.com',
//     //     password:'test'
//     // });
    
// })

