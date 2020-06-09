import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

const Article = styled.article``

const Post = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title}</Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
