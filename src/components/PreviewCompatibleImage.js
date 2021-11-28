import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage image={getImage(image)} alt={alt}/>
    )
  }

  if (!!childImageSharp) {
    return <GatsbyImage image={getImage(childImageSharp)} alt={alt}/>
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

export default PreviewCompatibleImage