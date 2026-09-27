import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('mobile menu tidak ada di DOM saat pertama kali dirender', () => {
    render(<Navbar />)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('membuka mobile menu saat tombol hamburger diklik', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /buka menu/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleButton)

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(within(mobileMenu).getByText('Karya')).toBeInTheDocument()
  })

  it('menutup mobile menu saat salah satu link di dalamnya diklik', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /buka menu/i })
    await user.click(toggleButton)

    const mobileMenu = screen.getByTestId('mobile-menu')
    const linkInsideMobileMenu = within(mobileMenu).getByText('Karya')
    await user.click(linkInsideMobileMenu)

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})