import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Intro from '../components/Intro'

import TopBanner from '../components/TopBanner'
import Blogpost from '../components/Blogpost'
import ImageShowcase from '../components/ImageShowcase'


const BlogpostSection = styled.div`
max-width:1200px;
width:90%;
margin:100px auto;
`

export const IndexTemplate = ({
    intro,
    topbanner,
    blogposts,
    imageshowcase,
}) => (
    <div>
        <Intro id="ueberuns" data = {intro}/>
        <TopBanner data={topbanner}/>
        <BlogpostSection>
            {
                blogposts.map((Item,i)=>(
                    <div>
                        <Blogpost data={Item} key={i}/>
                    </div>
                ))
            }
        </BlogpostSection>
        <ImageShowcase data={imageshowcase}/>
    </div>
)

IndexTemplate.propTypes = {
    intro: PropTypes.object,
    topbanner: PropTypes.object,
    blogposts: PropTypes.array,
    imageshowcase: PropTypes.object,
}