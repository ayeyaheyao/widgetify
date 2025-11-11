# Forge Filter Gadget Skeleton

This repository contains an Atlassian Forge application skeleton tailored for Jira Cloud and Jira Service Management Cloud dashboard gadgets. It is designed as a starting point for an Atlassian Marketplace submission that satisfies the _Runs on Atlassian_ badge and lays the groundwork for _Cloud Fortified_ readiness.

## Features

- **Forge-based gadget**: Implements a Forge `jiraDashboardGadget` module rendered with UI Kit components.
- **Multi-product compatibility**: Ships with the permissions required for Jira Software and Jira Service Management data access.
- **Operational readiness**: Provides placeholders for observability remotes and enforces zero outbound network access by default to align with Runs on Atlassian guidelines.
- **TypeScript tooling**: Configured with TypeScript, ESLint, Prettier, Jest, and ts-jest for consistent development workflows.

## Project Structure

```
├── manifest.yml                # Forge manifest defining modules, permissions, and runtime
├── src/
│   ├── gadgets/
│   │   └── filter-insights.tsx # UI Kit dashboard gadget entry point
│   └── resolvers/
│       └── filter-data.ts      # Forge resolver skeleton that will call Jira/JSM APIs
├── tests/
│   └── filter-data.test.ts     # Example Jest test for the resolver
├── docs/                       # Documentation workspace for operations and compliance artefacts
├── package.json                # npm metadata with Forge dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
├── jest.config.js              # Jest configuration for TypeScript
└── .eslintrc.json              # ESLint + Prettier setup
```

## Getting Started

1. Install the Forge CLI and log in following the [Forge documentation](https://developer.atlassian.com/platform/forge/getting-started/).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Register the app and update the `app.id` in `manifest.yml` with the generated identifier.
4. (Optional) Configure the `remotes` section with your observability ingestion endpoint.
5. Deploy the app:
   ```bash
   npm run deploy
   ```
6. Install the app onto the desired Jira and Jira Service Management sites via the Forge CLI or the Atlassian Marketplace sandbox.

## Next Steps

- Replace the placeholder resolver implementation with calls to the Jira and Jira Service Management REST APIs using `@forge/api`.
- Implement data retention, health checks, and incident response automation to achieve Cloud Fortified certification.
- Add runtime metrics, logs, and alert routing to the referenced `analytics-ingress` remote endpoint.
- Create UI states for filter configuration, error handling, and empty data sets.
- Extend the test suite with integration tests covering resolver logic and UI rendering.

## Compliance Considerations

- Keep the `external.fetch.backend` list empty unless outbound calls are required. This is essential for the Runs on Atlassian badge.
- Document incident response processes, runbooks, and SLAs inside the `docs/` directory as they are developed.
- Ensure dependencies are kept current and subscribe to Atlassian security advisories.

## License

This project is provided as a template. Choose and add a license before distributing the app.
