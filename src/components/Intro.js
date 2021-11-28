import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Container = styled.div`
display:flex;
flex-flow:column;
justify-content:space-between;
padding:0px 4%;
margin:auto;
max-width:1500px;
& h2 {
    font-weight:300;
    font-size:32px;
}
& p {
    font-size:18px;
    text-align:center;
    @media(min-width:993px) {
        text-align:left;
    }
}
& > div {
    display:flex;
    align-items:center;
    justify-content:center;
}
& >div:first-child {
    flex-basis:36%;;
}
& >div:last-child {
    flex-basis:54%;;
}
@media(min-width:993px) {
    flex-flow:row wrap;
    & h2 {
        font-size:48px;
    }
}
`

const Intro = (props) => (
    <Container id={props.id}>
        <div>
            <h2>{props.data.header}</h2>
        </div>
        <div>
            <ReactMarkdown>{props.data.text}</ReactMarkdown>
        </div>
        
    </Container>
)

Intro.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        header: PropTypes.string,
        text: PropTypes.string,
    })
}

export default Intro