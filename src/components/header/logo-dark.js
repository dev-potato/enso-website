import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './logo.less'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

 const dark = graphql`
       query {
         placeholderImage: file(relativePath: { eq: "logo-dark.png" }) {
           childImageSharp {
             fluid(maxWidth: 200) {
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
     `

const Image = (props) => {
    return <StaticQuery
    query={dark}
        render={data => <Img className="header-logo" fluid={data.placeholderImage.childImageSharp.fluid} style={{ display: 'inherit', opacity: props.opacity }}/>}
    />
}
export default Image
