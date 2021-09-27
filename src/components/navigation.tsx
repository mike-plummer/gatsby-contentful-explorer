import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as styles from './navigation.module.scss'

interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
  const data: GatsbyTypes.NavigationQuery = useStaticQuery<GatsbyTypes.NavigationQuery>(
    graphql`
        query Navigation {
            contentfulWlMenu(name: { eq: "Main Menu" }) {
                submenus {
                    name,
                    entries {
                        name,
                        displayName,
                        link {
                            name,
                            slug
                        }
                    }
                }
            }
        }
    `
  );

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo}/>
        <span className={styles.navigationItem}>WL Example App</span>
      </Link>
      <ul className={styles.navigation}>
        {data.contentfulWlMenu?.submenus?.map((submenu) => (
          <li key={submenu!.name} className={styles.navigationItem}>
            {submenu!.name}
            <ul>
              {submenu?.entries?.map((entry) => (
                <li key={entry!.name}>
                  <Link to={entry!.link!.slug!} activeClassName="active">
                    {entry!.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation
