import { render, screen, fireEvent } from '@testing-library/react'
import PostList from '../components/PostList'

const mockPosts = [
  { id: '1', title: 'Test Post 1', content: 'Content 1' },
  { id: '2', title: 'Test Post 2', content: 'Content 2' },
]

describe('PostList', () => {
  it('renders all post titles', () => {
    render(<PostList posts={mockPosts} />)

    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('Test Post 2')).toBeInTheDocument()
  })

  it('shows post detail when title is clicked', () => {
    render(<PostList posts={mockPosts} />)

    fireEvent.click(screen.getByText('Test Post 1'))

    expect(screen.getByText('Content 1')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
  })
})
