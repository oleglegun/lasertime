import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

export function ServiceGridItem({ title, link, imgSizes }) {
    return (
        <li className="ServiceGridItem">
            <Link className="ServiceGridItem__link" to={link}>
                <div className="ServiceGridItem__img">
                    <Img sizes={imgSizes} alt={title} title={title} />
                </div>
                <div className="ServiceGridItem__title">{title}</div>
            </Link>
        </li>
    )
}

ServiceGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgSizes: PropTypes.object.isRequired,
}

function ServiceGrid({ children }) {
    return <ul className="ServiceGrid">{children}</ul>
}

ServiceGrid.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ServiceGrid
