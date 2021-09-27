import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Container from '../components/container';

interface WLPageProps {
  data: GatsbyTypes.WLPageByNameQuery;
}

const WLPage: React.FC<WLPageProps> = ({ data }) => {
  const page = data.contentfulWlPage;

  if (!page) {
    return <>404</>;
  }

  return (
    <Layout
      seo={{
        title: page.title!,
        description: page.description!
      }}
    >
      <Container>
        I'm the {page.name} page!
      </Container>
    </Layout>
  );
}

export default WLPage;

export const pageQuery = graphql`
    query WLPageByName(
        $name: String!
    ) {
        contentfulWlPage(name: { eq: $name }) {
            name,
            title,
            description
        }
    }
`
