import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

// eslint-disable-next-line
export const IndexPageTemplate = ({ title, subheading }) => {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      <Link className='btn' to='/admin/#/collections/mdx-docs/entries'>
        Go edit stuff
      </Link>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
      }
    }
  }
`
