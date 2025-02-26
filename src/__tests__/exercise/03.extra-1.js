import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {screen, render} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', async () => {
  render(<Counter />)

  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})

  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  await userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  await userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
