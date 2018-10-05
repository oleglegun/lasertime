import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Heading from '../components/Heading'
import Layout from '../components/Layout'

class ArticleTemplate extends React.Component {
    render() {
        const article = this.props.data.markdownRemark
        return (
            <Layout>
                <div className="PageContent__wrapper">
                    <Helmet title={article.frontmatter.title} />
                    <Heading
                        titleH1={article.frontmatter.title}
                        type="underline"
                    />
                    <div dangerouslySetInnerHTML={{ __html: article.html }} />
                </div>
            </Layout>
        )
    }
}

ArticleTemplate.propTypes = {}
ArticleTemplate.defaultProps = {}

export default ArticleTemplate

export const pageQuery = graphql`
    query ArticleByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
