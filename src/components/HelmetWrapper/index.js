import React from 'react'
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function HelmetWrapper({ data, title, description, keywords }) {
    return (
        <Helmet>
            <title>{title + ' | ' + data.site.siteMetadata.title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
        </Helmet>
    )
}

HelmetWrapper.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
}
HelmetWrapper.defaultProps = {}

export default HelmetWrapper

export const pageFragment = graphql`
    fragment Helmet on Query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
