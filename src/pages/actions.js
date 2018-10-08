import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ActionList from '../components/ActionList'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

class Actions extends React.Component {
    state = {
        isLoading: false,
        entities: [],
    }
    componentDidMount() {
        window
            .fetch('https://lt-admin.ru/api/v1/actions/current')
            .then(response => response.json())
            .then(actionList =>
                this.setState({
                    entities: actionList,
                })
            )
    }

    render() {
        const { data } = this.props

        return (
            <Layout>
                <div className="">
                    <Helmet data={data} title="Акции" description="" />
                    <ArticleHeaderImage
                        title={'Акции'}
                        imgSizes={data.contactsHeader.fluid}
                        alignRight
                        noEffects
                    />
                    {this.state.entities.length ? (
                        <ActionList items={this.state.entities} />
                    ) : (
                        <h2 align="center">
                            В данный момент активных акций нет
                        </h2>
                    )}
                </div>
            </Layout>
        )
    }
}

export default Actions

export const pageQuery = graphql`
    query Actions {
        ...Helmet
        contactsHeader: imageSharp(
            fluid: { originalName: { regex: "/actions-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
