import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

function HeaderMenuItem({ path, name }) {
    return (
        <li className="HeaderMenu__item">
            <Link
                to={path}
                className="HeaderMenu__link"
                activeClassName="HeaderMenu__link--active"
            >
                {name}
            </Link>
        </li>
    )
}

HeaderMenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
HeaderMenuItem.defaultProps = {}

export default HeaderMenuItem
