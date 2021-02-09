import { render, screen } from '@testing-library/react'
import HomeContent from '@modules/homePage/HomeContent'

describe('Home', () => {
  it('renders home content', () => {
    render(<HomeContent />)
    expect(screen.getByText('What was packed into this starter kit?')).toBeInTheDocument()
  })
})
