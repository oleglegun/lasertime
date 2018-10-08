import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import { actions } from '../files/config/fixtures'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

class Actions extends React.Component {
    componentDidMount() {
        window.fetch('http://10.0.1.2:30000').then(console.log)
    }

    render() {
        const { data } = this.props

        return (
            <Layout>
                <div className="">
                    <Helmet data={data} title="Акции" description="" />
                    <ArticleHeaderImage
                        title={'Акции'}
                        imgSizes={data.contactsHeader.fluid}
                        alignRight
                        noEffects
                    />
                    <ActionList
                        items={actions}
                        // categories={categories}
                        // groups={groups}
                    />
                </div>
            </Layout>
        )
    }
}

export default Actions

export const pageQuery = graphql`
    query Actions {
        ...Helmet
        contactsHeader: imageSharp(
            fluid: { originalName: { regex: "/actions-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
