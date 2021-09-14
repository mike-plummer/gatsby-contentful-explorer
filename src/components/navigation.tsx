import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { NavigationQuery } from '../../graphql-types';
import * as styles from './navigation.module.css'

interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
  const data: NavigationQuery = useStaticQuery(
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
            {submenu?.entries?.map((entry) => (
              <Link key={entry!.name} to={entry!.link!.slug!} activeClassName="active">
                {entry!.displayName}
              </Link>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation
