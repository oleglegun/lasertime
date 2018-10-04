import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import fixtures from '../files/config/actions-fixtures'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

function Actions() {
    const { actions, categories, groups } = fixtures

    return (
        <Layout>
            <StaticQuery
                query={pageQuery}
                render={data => (
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
                            categories={categories}
                            groups={groups}
                        />
                    </div>
                )}
            />
        </Layout>
    )
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
