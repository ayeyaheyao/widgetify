import ForgeUI, {
  DashboardGadget,
  Fragment,
  Heading,
  Text,
  Tag,
  TagGroup,
  useProductContext,
  useState,
  useInvoke,
} from '@forge/ui';

type FilterSummary = {
  id: string;
  name: string;
  jql: string;
  totalIssues: number;
  projectType: 'software' | 'service' | 'business' | 'unknown';
};

type ResolverResponse = {
  filters: FilterSummary[];
};

const FilterInsights = () => {
  const context = useProductContext();
  const [filterId] = useState(() => context?.dashboardGadgetContext?.filterId ?? null);
  const filterData = useInvoke<ResolverResponse>('get-filter-insights', { filterId });

  if (!filterData) {
    return (
      <DashboardGadget>
        <Text>Loading filter insights...</Text>
      </DashboardGadget>
    );
  }

  if (!filterData.filters.length) {
    return (
      <DashboardGadget>
        <Text>No filters found for the current configuration.</Text>
      </DashboardGadget>
    );
  }

  return (
    <DashboardGadget>
      <Fragment>
        <Heading size="medium">Filter breakdown</Heading>
        {filterData.filters.map((filter) => (
          <Fragment key={filter.id}>
            <Heading size="small">{filter.name}</Heading>
            <Text>JQL: {filter.jql}</Text>
            <Text>Total issues: {filter.totalIssues}</Text>
            <TagGroup>
              <Tag text={`Project type: ${filter.projectType}`} />
            </TagGroup>
          </Fragment>
        ))}
      </Fragment>
    </DashboardGadget>
  );
};

export const run = () => ForgeUI.render(<FilterInsights />);
