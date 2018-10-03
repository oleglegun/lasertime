import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

export const PriceListItem = ({ title, path }) => {
    return (
        <li className={'PriceListItem'}>
            <Link className={'PriceListItem__link'} to={path}>
                <div className={'PriceListItem__title'}>{title}</div>
            </Link>
        </li>
    )
}

PriceListItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

function PriceList({ children }) {
    return <ul className={'PriceList'}>{children}</ul>
}

PriceList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default PriceList
