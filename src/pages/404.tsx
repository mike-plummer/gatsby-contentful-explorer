import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';

const NotFoundPage: React.FC = () => {
  return (
    <Layout seo={{ title: 'Oops!' }}>
      <Container>
        Oops! We couldn't find that page.
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
