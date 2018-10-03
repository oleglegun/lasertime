import React from 'react'
import {graphql} from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import fixtures from '../files/config/actions-fixtures'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function Actions({ data }) {
    const { actions, categories, groups } = fixtures

    return (
        <div className="">
            <Helmet data={data} title="Акции" description="" />
            <ArticleHeaderImage
                title={'Акции'}
                imgSizes={data.contactsHeader.sizes}
                alignRight
                noEffects
            />
            <ActionList
                items={actions}
                categories={categories}
                groups={groups}
            />
        </div>
    )
}

export default Actions

export const pageQuery = graphql`
    query Actions {
        ...Helmet
        contactsHeader: imageSharp(id: { regex: "/actions-header/" }) {
            sizes(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
