import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PageFooter from '../components/PageFooter'
import MobileMenu from '../components/MobileMenu'

import 'normalize.css'
import '../css/styles.less'

const graphqlQuery = graphql`
    {
        ...MobileMenu
        ...PageHeader
        site {
            siteMetadata {
                title
            }
        }
    }
`

function Layout({ children }) {
    return (
        <StaticQuery
            query={graphqlQuery}
            render={data => (
                <div id="outer-container">
                    <MobileMenu
                        data={data}
                        className="MobileMenu"
                        right
                        width={250}
                        pageWrapId={'page-wrap'}
                        outerContainerId={'outer-container'}
                    />
                    <div id="page-wrap" className="Page">
                        <div className="Page__wrapper">
                            <PageHeader data={data} />
                            <PageContent>{children}</PageContent>
                            <PageFooter />
                        </div>
                    </div>
                </div>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
