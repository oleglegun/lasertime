import React from 'react'
import PropTypes from 'prop-types'
import ActionCard from './../ActionCard'
import ActionGrid from './../ActionGrid'
import ActionTable from './../ActionTable'
import ActionSortBar from './../ActionSortBar'
import ActionDisplayModeBar from './../ActionDisplayModeBar'
import flatten from 'lodash/flatten'
import values from 'lodash/values'

const sortTypeEnum = {
    TYPE: 'type',
    DISCOUNT: 'discount',
    PRICE: 'price',
}

class ActionList extends React.Component {
    state = {
        displayGrid: true,
        sortType: sortTypeEnum.TYPE,
        sortReverse: false,
    }

    handleChangeDisplayMode = () => {
        this.setState({ displayGrid: !this.state.displayGrid })
    }

    handleChangeSortType = type => {
        if (this.state.sortType === type) {
            this.setState({
                sortReverse: !this.state.sortReverse,
            })
        } else {
            this.setState({
                sortType: type,
                sortReverse: false,
            })
        }
    }

    // calculateDiscount returns number rounded to 5 like: 35 or 50
    calculateDiscount = (priceOld, priceNew) => {
        const discount = 100 - (priceNew / priceOld) * 100
        return discount - (discount % 5)
    }

    generateDeadlineString = days => {
        switch (days) {
            case 1:
                return '1 день'
            case 2:
            case 3:
            case 4:
                return `${days} дня`
            default:
                return `${days} дней`
        }
    }

    // {"Title1": [action1, action2], ...}
    generateActionBatchesGrouppedByType = actions => {
        return actions.reduce((acc, action) => {
            if (acc[action.type]) {
                acc[action.type].push(action)
            } else {
                acc[action.type] = [action]
            }

            return acc
        }, {})
    }

    sortActions = (actions, sortType, reverse) => {
        switch (sortType) {
            case sortTypeEnum.TYPE:
                return this.sortByType(actions, reverse)
            case sortTypeEnum.DISCOUNT:
                return this.sortByDiscount(actions, reverse)
            case sortTypeEnum.PRICE:
                return this.sortByPrice(actions, reverse)
            default:
                return actions
        }
    }

    sortByType = (items, reverse) => {
        const batches = values(this.generateActionBatchesGrouppedByType(items))
        const actions = flatten(batches)
        
        if (reverse) {
            return actions.reverse()
        }
        return actions
    }

    // By default sorts from High => Low
    sortByDiscount = (items, reverse) => {
        items.sort((a1, a2) => {
            const discount1 = a1.priceNew / a1.priceOld
            const discount2 = a2.priceNew / a2.priceOld
            return (!reverse ? 1 : -1) * (discount1 - discount2)
        })

        return items
    }

    // By default sorts from High => Low
    sortByPrice = (items, reverse) => {
        items.sort((a1, a2) => {
            return (!reverse ? 1 : -1) * (a1.priceNew - a2.priceNew)
        })

        return items
    }

    render() {
        const currentActions = this.props.items
        const { displayGrid, sortType, sortReverse } = this.state
        let actionCards
        let actionTables

        if (displayGrid) {
            const sortedActions = this.sortActions(
                currentActions,
                sortType,
                sortReverse
            )

            actionCards = sortedActions.map(item => {
                const discount = this.calculateDiscount(
                    item.priceOld,
                    item.priceNew
                )
                const daysRemaining = item.daysRemaining
                return (
                    <ActionCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        badgeColor={
                            discount >= 40
                                ? 'gold'
                                : discount >= 30
                                ? 'silver'
                                : 'gray'
                        }
                        priceOld={item.priceOld}
                        priceNew={item.priceNew}
                        discount={discount}
                        deadline={this.generateDeadlineString(
                            item.daysRemaining
                        )}
                        deadlineColor={
                            daysRemaining <= 1
                                ? 'red'
                                : daysRemaining <= 2
                                ? 'orange'
                                : 'black'
                        }
                        image={item.image}
                    />
                )
            })
        } else {
            const actionsGrouppedByType = this.generateActionBatchesGrouppedByType(
                currentActions
            )

            actionTables = Object.keys(actionsGrouppedByType).map(
                (actionType, actionTypeId) => {
                    const filteredActionsByType =
                        actionsGrouppedByType[actionType]

                    const sortedActions = this.sortActions(
                        filteredActionsByType,
                        sortType,
                        sortReverse
                    )

                    const categoryElements = sortedActions.map(item => {
                        const actionDescription = item.description.join(' ')

                        return (
                            <tr key={item.id}>
                                <td>{`${
                                    item.title
                                } (${actionDescription})`}</td>
                                <td className="ActionTable__price ActionTable__price--old">
                                    {item.priceOld}
                                </td>
                                <td className="ActionTable__price">
                                    {item.priceNew}
                                </td>
                            </tr>
                        )
                    })

                    return (
                        <ActionTable
                            key={actionTypeId}
                            title={actionType}
                            elements={categoryElements}
                        />
                    )
                }
            )
        }

        return (
            <div className="ActionList">
                <ActionSortBar
                    sortType={this.state.sortType}
                    changeSortType={this.handleChangeSortType}
                    sortTypeEnum={sortTypeEnum}
                />
                <ActionDisplayModeBar
                    changeDisplayMode={this.handleChangeDisplayMode}
                    displayGrid={this.state.displayGrid}
                />
                {displayGrid ? (
                    <ActionGrid elements={actionCards} />
                ) : (
                    <div className="PageContent__wrapper">{actionTables}</div>
                )}
            </div>
        )
    }
}

ActionList.propTypes = {
    items: PropTypes.array.isRequired,
}
ActionList.defaultProps = {}

export default ActionList
