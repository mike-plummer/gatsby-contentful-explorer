import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

interface LayoutProps {
  seo: React.ComponentProps<typeof Seo>
}

const Layout: React.FC<LayoutProps> = ({ seo, children }) => {
  return (
    <>
      <Seo {...seo} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
