import { render, screen, fireEvent } from '@testing-library/react'
import PostDetail from '../components/PostDetail'

const mockPost = {
  id: '1',
  title: 'Test Post',
  content: 'This is a test post.',
}

describe('PostDetail', () => {
  it('renders post title and content', () => {
    render(<PostDetail post={mockPost} onClose={() => {}} />)

    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('This is a test post.')).toBeInTheDocument()
  })

  it('calls onClose when Close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<PostDetail post={mockPost} onClose={onCloseMock} />)

    fireEvent.click(screen.getByText('Close'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
