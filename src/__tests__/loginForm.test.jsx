import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import LogInForm from "../components/students/LogIn/LogInForm";
import { expect } from "vitest";


test('testing to find form header and footer and inpits', () => {
    render(
        <BrowserRouter>
            <LogInForm />
        </BrowserRouter>
    )

    const elemets = [
        screen.getByRole('heading', { name: /خوش حالیم که برگشتی/i }),
        screen.getByText(/اکانت ندارید/i),
        screen.getByLabelText(/ایمیل/i),
        screen.getByLabelText(/پسورد/i),
    ]

    for (let element of elemets) {
        expect(element).toBeInTheDocument()
    }
})

test('simulate typing in inputs and submiting', () => {

    render(
        <BrowserRouter>
            <LogInForm />
        </BrowserRouter>
    )

    const [emailInput, passwordInput] = screen.getAllByRole('textbox')

    user.click(emailInput)
    user.keyboard('@mail.com')

    user.click(passwordInput)
    user.keyboard('1234')
})