import { getFilterInsights } from '@/resolvers/filter-data';

describe('getFilterInsights resolver', () => {
  it('returns a placeholder filter collection', async () => {
    const response = await getFilterInsights({ payload: {} });
    expect(response.filters).toHaveLength(1);
  });
});
