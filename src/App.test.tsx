import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Contoso Travel app', () => {
  it('shows selected product details when a different product is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: 'Santorini Sunset Cruise',
        level: 5,
      }),
    ).toBeInTheDocument()

    await user.click(screen.getByText('Tokyo Street Food Walk'))

    expect(
      screen.getByRole('heading', { name: 'Tokyo Street Food Walk', level: 5 }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Taste your way through hidden alley izakayas/i),
    ).toBeInTheDocument()
  })

  it('adds selected items to the cart and updates total', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(screen.getByText(/Cart Items: 1/i)).toBeInTheDocument()
    expect(screen.getByText('$199 each')).toBeInTheDocument()

    await user.click(screen.getByText('Tokyo Street Food Walk'))
    await user.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(screen.getByText(/Cart Items: 2/i)).toBeInTheDocument()
    expect(screen.getByText('$288')).toBeInTheDocument()
  })

  it('removes items from cart and disables remove when quantity is zero', async () => {
    const user = userEvent.setup()
    render(<App />)

    const addButton = screen.getByRole('button', { name: /add to cart/i })
    const removeButton = screen.getByRole('button', { name: /remove/i })

    expect(removeButton).toBeDisabled()

    await user.click(addButton)
    expect(removeButton).toBeEnabled()

    await user.click(removeButton)

    expect(screen.getByText(/Cart Items: 0/i)).toBeInTheDocument()
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
    expect(removeButton).toBeDisabled()
  })
})
