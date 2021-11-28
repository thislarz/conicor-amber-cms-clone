import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Container = styled.div`
position:relative;
display: flex;
flex-direction: column-reverse;
align-items:center;
justify-content:space-around;
margin-bottom:150px;

& img {
    width:100%;
    height:auto;
}

@media(min-width:993px){
    flex-direction:row;
}
`
const TextSection = styled.div`
width:60%;
max-width:600px;
margin:50px auto 0 auto;
font-family:Arial;

@media(min-width:993px){
    margin:0;
    margin-right:50px;
}
`
const Footnote = styled.p`
text-align:right;
margin-top:25px;
` 
const ImageContainer = styled.div`
position:relative;
width:60%;

@media(min-width:993px){
    margin-left:50px;
    width:40%;
}
`

const Blogpost = ({data}) => {
    return(
        <Container>
            <TextSection>
                <h2>{data.title}</h2>
                <ReactMarkdown>{data.text}</ReactMarkdown>
                <Footnote>{data.date}, {data.creator}</Footnote>
            </TextSection>
            <ImageContainer>
                <PreviewCompatibleImage imageInfo={data}/>
            </ImageContainer>
        </Container>
    )
}

Blogpost.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        date: PropTypes.string,
        creator: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
}

export default Blogpost