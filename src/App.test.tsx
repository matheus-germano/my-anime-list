import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should render app component with hello message', () => {
    render(<App />)

    screen.getByText(/hello/i)
  })

  it('should increase by one on button click', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: 'increase' })
    const stateValue = screen.getByTestId('state-value')

    expect(stateValue.textContent).toBe('0')
    fireEvent.click(button)
    expect(stateValue.textContent).toBe('1')
  })
})