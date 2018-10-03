import React from 'react'
import { Link, graphql } from 'gatsby'
import Radium from 'radium'
import logo from './img/logo.jpg'

const Menu = require('react-burger-menu').push
const RadiumLink = Radium(Link)

class MobileMenu extends React.Component {
    state = {
        render: false,
        isOpen: false,
        timer: null,
    }

    componentDidMount() {
        this._initialize()
        window.addEventListener('resize', this._onResize)
    }

    _initialize = () => {
        setTimeout(this._onResize, 10)
    }

    _onResize = () => {
        if (this.state.timer) {
            clearTimeout(this.state.timer)
        }

        const id = setTimeout(() => {
            if (window && window.innerWidth > 550) {
                this.setState({
                    render: false,
                })
            } else {
                this.setState({
                    render: true,
                })
            }
        }, 10)

        this.setState({
            timer: id,
        })
    }

    render() {
        if (!this.state.render) {
            return null
        }

        const {
            leftMenuItems,
            rightMenuItems,
        } = this.props.data.site.siteMetadata.menuItems

        const menuItems = leftMenuItems.concat(rightMenuItems)

        const menuElements = menuItems.map(item => {
            return (
                <RadiumLink
                    key={item.name}
                    to={item.path}
                    className="MobileMenu__link"
                >
                    {item.name}
                </RadiumLink>
            )
        })

        return (
            <Menu
                customCrossIcon={false}
                isOpen={this.state.isOpen}
                wait={20}
                {...this.props}
            >
                <div className="MobileMenu__logo">
                    <RadiumLink to={'/'}>
                        <img src={logo} />
                    </RadiumLink>
                </div>
                {menuElements}
            </Menu>
        )
    }
}

MobileMenu.propTypes = {}
MobileMenu.defaultProps = {}

export default MobileMenu

export const pageFragment = graphql`
    fragment MobileMenu on Query {
        site {
            siteMetadata {
                menuItems {
                    leftMenuItems {
                        path
                        name
                    }
                    rightMenuItems {
                        path
                        name
                    }
                }
            }
        }
    }
`
