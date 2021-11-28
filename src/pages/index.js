import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import { IndexTemplate } from "../templates/index-Template.js"

const Home = ({data}) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexTemplate
      intro = {frontmatter.index.intro}

      topbanner={frontmatter.index.topbanner}
      blogposts={frontmatter.index.blog.blogposts}
      imageshowcase={frontmatter.index.imageshowcase}
    />
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Home

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark {
      frontmatter {
        index {
          
          intro {
            header
            text
          }

          topbanner {
            subtitle
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 2048
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          blog {
            blogposts {
              date
              title
              creator
              text
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 1080
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                } 
              }
            }
          }
          imageshowcase {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 1080
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              } 
            }
          }
        }
      }
    }
  }
`