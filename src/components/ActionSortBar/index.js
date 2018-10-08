import React from 'react'
import PropTypes from 'prop-types'

function ActionSortBar({ sortType, changeSortType, sortTypeEnum }) {
    const baseClass = 'ActionSortBar__toggle'
    const typeClass =
        baseClass +
        (sortType === sortTypeEnum.TYPE ? ' ActionSortBar__toggle--active' : '')
    const discountClass =
        baseClass +
        (sortType === sortTypeEnum.DISCOUNT ? ' ActionSortBar__toggle--active' : '')
    const priceClass =
        baseClass +
        (sortType === sortTypeEnum.PRICE ? ' ActionSortBar__toggle--active' : '')

    return (
        <div className="ActionSortBar">
            <div className="ActionSortBar__wrapper">
                <div className="ActionSortBar__title">Сортировка:</div>
                <div
                    className={typeClass}
                    onClick={() => changeSortType(sortTypeEnum.TYPE)}
                >
                    по типу
                </div>
                <div
                    className={discountClass}
                    onClick={() => changeSortType(sortTypeEnum.DISCOUNT)}
                >
                    по выгоде
                </div>
                <div
                    className={priceClass}
                    onClick={() => changeSortType(sortTypeEnum.PRICE)}
                >
                    по цене
                </div>
            </div>
        </div>
    )
}

ActionSortBar.propTypes = {
    sortType: PropTypes.string.isRequired,
    changeSortType: PropTypes.func.isRequired,
    sortTypeEnum: PropTypes.object.isRequired,
}
ActionSortBar.defaultProps = {}

export default ActionSortBar
