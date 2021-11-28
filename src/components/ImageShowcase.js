import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Container = styled.div`
`

const ImageContainer = styled.div`

`

const ImageShowcase = ({ data }) => {
    return(
        <Container>
            <h1>ImageShowcase container</h1>
            <ImageContainer>
                <PreviewCompatibleImage imageInfo={data}/>
            </ImageContainer>
        </Container>
    )
}

ImageShowcase.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
}

export default ImageShowcase