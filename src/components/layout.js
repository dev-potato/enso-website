import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.less'

const Layout = ({ children, opacity, handler, menuTop }) => (
  <StaticQuery
  query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
          opacity={opacity}
          siteTitle={data.site.siteMetadata.title}
          handler={handler}
          menuTop={menuTop}
          />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
  handleClick: PropTypes.func,
  menuTop: PropTypes.number
}

export default Layout
