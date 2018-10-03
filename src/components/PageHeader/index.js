import React from 'react'
import {Link, graphql} from 'gatsby'
import ScrollProgress from '../ScrollProgress'
import HeaderMenu from '../HeaderMenu'
import PhoneList from '../PhoneList'
import Logo from '../HeaderLogo'
import Title from '../HeaderTitle'
import SocialList from '../SocialList'
import phoneIcon from './img/phone-icon.png'

let timer

class PageHeader extends React.Component {
    state = {
        headerIsFixed: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll)
    }

    render() {
        const {
            menuItems,
            fixedPhone,
            mobilePhone,
        } = this.props.data.site.siteMetadata
        const { leftMenuItems, rightMenuItems } = menuItems

        return (
            <header className="PageHeader">
                <div
                    className="PageHeader__wrapper"
                    ref={ref => {
                        this._pageHeaderElement = ref
                    }}
                >
                    <div className="PageHeader__items">
                        <div className="PageHeader__item">
                            <a href="tel:+79055881313">
                                <div className="PageHeader__phone-icon">
                                    <img src={phoneIcon} alt="телефон" />
                                </div>
                            </a>
                            <PhoneList items={[fixedPhone, mobilePhone]} />
                            <HeaderMenu position="left" items={leftMenuItems} />
                        </div>

                        <div className="PageHeader__item">
                            <Link className="PageHeader__link-home" to={'/'}>
                                <Title />
                                <Logo />
                            </Link>
                        </div>

                        <div className="PageHeader__item">
                            <SocialList />
                            <HeaderMenu
                                position="right"
                                items={rightMenuItems}
                            />
                        </div>
                    </div>
                    <ScrollProgress backgroundColor="#EDD483" />
                </div>
            </header>
        )
    }

    _onScroll = () => {
        timer = this.state.timer
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        const id = setTimeout(() => {
            if (document.body.scrollTop > 49) {
                if (!this.state.headerIsFixed) {
                    this._pageHeaderElement.classList.add('PageHeader--fixed')
                    this.setState({
                        headerIsFixed: true,
                    })
                }
            } else {
                if (this.state.headerIsFixed) {
                    this._pageHeaderElement.classList.remove(
                        'PageHeader--fixed'
                    )
                    this.setState({
                        headerIsFixed: false,
                    })
                }
            }
        }, 50)

        timer = id
    }
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader

export const pageFragment = graphql`
    fragment PageHeader on Query {
        site {
            siteMetadata {
                fixedPhone
                mobilePhone
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
