import { getStaticProps } from '@/pages/posts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: '1', title: 'Mock', content: 'Post' }]),
  })
);

describe('getStaticProps', () => {
  it('fetches posts', async () => {
    const result = await getStaticProps();
    expect(result).toEqual({
      props: {
        posts: [{ id: '1', title: 'Mock', content: 'Post' }],
      },
    });
  });
});
