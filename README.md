# Gatsby Contentful Example

Personal project to explore using Contentful® with Gatsby®

## About

This project integrates with Contentful to provide content for an SSG Gatsby site.
Note that this is intended to run against my personal Contentful repo, so it will not work out of the box for others.

## Important Concepts

* Gatsby pulls content from Contentful at startup
* TS typings are generated based on the GraphQL schema so we can perform type-safe queries
* During generation, Gatsby interprets content declarations into React components which are then rendered into static HTML that is served at runtime.
* Adding a new page, changing text, or any other content change just requires a published change in Contentful, no code changes in Gatsby/React. We only need to update our Gatsby code to support new/different *types* of content.

## Getting Started

This project uses the Gatsby v4 beta, so a `force` install must be done to get dependencies to align (temporarily)
`npm i --force`

To run:
`npm run dev`

## License

MIT
