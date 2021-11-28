import React from 'react'
import PropTypes from 'prop-types'
import {IndexTemplate} from '../../templates/index-Template.js'

const IndexPagePreview = ({ entry, getAsset}) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
/*
  const entryTopbanner= entry.getIn(['data','index','topbanner'])
  const topbannerData = entryTopbanner ? entryTopbanner.toJS() : []
  console.log(topbannerData)

  const entryimageshowcaseData = entry.getIn(['data','index','imageshowcase'])
  const imageshowcaseData = entryimageshowcaseData ? entryimageshowcaseData.toJS() : []
  console.log(imageshowcaseData)

  const image = getAsset(entry.getIn(['data','index','imageshowcase','image']))
  console.log(image)
*/
  if (data) {
    
    data.index.topbanner.image = getAsset(data.index.topbanner.image).url
    data.index.blog.blogposts.map((item, i) => (
      data.index.blog.blogposts[i].image = getAsset(item.image).url
    ))
    data.index.imageshowcase.image = getAsset(data.index.imageshowcase.image).url

    return (
      <IndexTemplate
        intro = { data.index.intro }

        topbanner={data.index.topbanner}
        blogposts={data.index.blog.blogposts}
        imageshowcase={data.index.imageshowcase}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview