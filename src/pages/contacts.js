import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import InfoPanel from '../components/contacts/ContactsInfoPanel'
import NavPanel from '../components/contacts/ContactsNavPanel'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

function Contacts() {
    return (
        <Layout>
            <StaticQuery
                query={pageQuery}
                render={data => (
                    <div>
                        <Helmet data={data} title="Контакты" description="" />
                        <ArticleHeaderImage
                            title={'Контакты'}
                            imgSizes={data.contactsHeader.fluid}
                            alignLeft
                            noEffects
                        />
                        <div className="Contacts">
                            <InfoPanel />
                            <NavPanel />
                        </div>
                    </div>
                )}
            />
        </Layout>
    )
}

Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts

export const pageQuery = graphql`
    query Contacts {
        ...Helmet
        contactsHeader: imageSharp(
            fluid: { originalName: { regex: "/contacts-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
