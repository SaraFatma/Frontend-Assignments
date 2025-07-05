import { render, screen } from '@testing-library/react';
import PostDetail from '@/components/PostDetail';

describe('PostDetail', () => {
  test('shows placeholder when no post is selected', () => {
    render(<PostDetail post={null} />);
    expect(screen.getByText('Select a post to see details.')).toBeInTheDocument();
  });

  test('shows post details when a post is selected', () => {
    const post = { id: '1', title: 'Hello', content: 'World' };
    render(<PostDetail post={post} />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });
});
