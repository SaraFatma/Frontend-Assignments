import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '@/components/PostList';

describe('PostList', () => {
  const mockPosts = [
    { id: '1', title: 'Test Post 1' },
    { id: '2', title: 'Test Post 2' },
  ];

  test('renders post titles', () => {
    render(<PostList posts={mockPosts} onSelect={() => {}} />);
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
  });

  test('calls onSelect when a post is clicked', () => {
    const onSelect = jest.fn();
    render(<PostList posts={mockPosts} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Test Post 1'));
    expect(onSelect).toHaveBeenCalledWith('1');
  });
});
