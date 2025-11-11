import Resolver from '@forge/resolver';

export const filterDataResolver = new Resolver();

type FilterSummary = {
  id: string;
  name: string;
  jql: string;
  totalIssues: number;
  projectType: 'software' | 'service' | 'business' | 'unknown';
};

type FilterResponse = {
  filters: FilterSummary[];
};

export const getFilterInsights = async ({ payload }: { payload?: { filterId?: string | null } }): Promise<FilterResponse> => {
  const filterId = payload?.filterId ?? null;

  // Placeholder implementation. Replace with real Jira and JSM filter aggregation logic.
  // Keeping the resolver synchronous and deterministic helps with Cloud Fortified requirements
  // around monitoring and incident response.
  const sampleFilter: FilterSummary = {
    id: filterId ?? 'sample-filter-id',
    name: 'Example Filter',
    jql: 'project = "DEMO" ORDER BY created DESC',
    totalIssues: 0,
    projectType: 'unknown',
  };

  return { filters: [sampleFilter] };
};

filterDataResolver.define('get-filter-insights', getFilterInsights);

export const handler = filterDataResolver.getDefinitions();
