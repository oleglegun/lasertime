import React from 'react'
import {graphql} from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import InfoPanel from '../components/contacts/ContactsInfoPanel'
import NavPanel from '../components/contacts/ContactsNavPanel'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function Contacts({ data }) {
    return (
        <div>
            <Helmet data={data} title="Контакты" description="" />
            <ArticleHeaderImage
                title={'Контакты'}
                imgSizes={data.contactsHeader.sizes}
                alignLeft
                noEffects
            />
            <div className="Contacts">
                <InfoPanel />
                <NavPanel />
            </div>
        </div>
    )
}

Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts

export const pageQuery = graphql`
    query Contacts {
        ...Helmet
        contactsHeader: imageSharp(id: { regex: "/contacts-header/" }) {
            sizes(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
