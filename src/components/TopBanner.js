import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Container = styled.div`
position:relative;
display: flex;
flex-direction: column-reverse;
align-items:center;
justify-content:center;
margin:100px 0 250px 0;

text-align:center;

& >div {
    width:80%;
    display: flex;
    align-items:center;
    justify-content:center;
}

& img {
    width:100%;
    height:auto;
}

@media(min-width:993px){
    flex-direction: row;
    justify-content:space-around;

    & >div {
        width:50%;
    }

    & img {
        width:80%;
    }
}
`

const TextContainer = styled.div`
flex-direction:column;
font-family:Arial;
margin-top:75px;

& h1 {
    margin:0;

    font-size:64px;
}

& h2 {
    color:white;
    background-color:#3290FF;
    width:400px;
    padding:6px 0;

    font-size:36px;
}

& a {
    text-decoration:none;
    background-color:#3290FF;
    padding: 10px 14px;
    border-radius:25px;
    color:white;
    border:solid 2px #3290FF;

    font-size:20px;
    font-weight:bold;

    transition: all 0.3s;

    &:hover {
        cursor:pointer;
        background-color:white;
        color:#3290FF;
    }
}

@media(min-width:993px){
    margin:0;
}
`

const ImageContainer = styled.div`

`

const TopBanner = ({ data }) => {
    return(
        <Container>
            <TextContainer>
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
                <a href="/admin">Admin Panel</a>
            </TextContainer>
            <ImageContainer>
                <PreviewCompatibleImage imageInfo={data}/>
            </ImageContainer>
        </Container>
    )
}

TopBanner.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
}

export default TopBanner