import { render, screen } from '@testing-library/react'
import AuthInput from "../components/students/LogIn/AuthInput"
import user from '@testing-library/user-event'
import { expect, vi } from 'vitest'

const mock = vi.fn()

test('test typing in input', async () => {



    render(<AuthInput
        formChangeHandler={mock}
        name='email'
        label='ایمیل'
        type='email'
        value=''
    />)

    const input = screen.getByLabelText('ایمیل')

    await user.click(input)
    await user.keyboard('mohammad')

    expect(mock).toBeCalledTimes(8)


})

test('renders correctly with given props', () => {

    render(
        <AuthInput
            formChangeHandler={mock}
            name='email'
            label='ایمیل'
            type='email'
            value='test@example.com'
        />)

    const label = screen.getByText('ایمیل')
    const input = screen.getByLabelText('ایمیل')

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('value', 'test@example.com')

})