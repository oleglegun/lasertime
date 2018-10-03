import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

function PagePreview({ title, path }) {
    return (
        <div className="PagePreview">
            <Link className="PagePreview__link" to={path}>
                {title}
            </Link>
        </div>
    )
}

PagePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}
PagePreview.defaultProps = {}

export default PagePreview
