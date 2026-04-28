import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('App Component', () => {
    test('renders app without crashing', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        // فقط می‌خوایم ببینیم رندر میشه یا نه
        expect(true).toBe(true)
    })
})