import { getStaticProps } from '../pages/posts'


const mockPosts = [
  { id: '1', title: 'Mock Post 1', content: 'Content 1' },
  { id: '2', title: 'Mock Post 2', content: 'Content 2' },
]

describe('getStaticProps', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    )
  })

  afterAll(() => {
    global.fetch.mockRestore()
  })

  it('returns posts as props', async () => {
    const result = await getStaticProps()
    expect(result).toEqual({
      props: {
        posts: mockPosts,
      },
    })
  })
})
