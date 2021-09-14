import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer: React.FC = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
    </div>
  </Container>
)

export default Footer
