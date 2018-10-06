import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import InfoBlock from '../components/InfoBlock'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import PriceList, { PriceListItem } from '../components/PriceList'
import Layout from '../components/Layout'

function PriceListPage({ data }) {
    const pricelistElements = data.allMarkdownRemark.edges
        .sort((a, b) => {
            const aOrder = a.node.frontmatter.order
            const bOrder = b.node.frontmatter.order
            if (aOrder > bOrder) {
                return 1
            } else if (aOrder < bOrder) {
                return -1
            }
            return 0
        })
        .map(({ node }) => {
            return (
                <PriceListItem
                    key={node.internal.contentDigest}
                    title={node.frontmatter.title}
                    path={node.frontmatter.path}
                />
            )
        })

    return (
        <Layout>
            <div>
                <Helmet data={data} title="Цены" description="" keywords="" />

                <ArticleHeaderImage
                    title={'Цены'}
                    imgSizes={data.blank.fluid}
                    alignLeft
                    noEffects
                />
                <div className="PageContent__wrapper">
                    <InfoBlock color="red">
                        <p>
                            Внимание, цены на сайте представлены только для
                            предварительного ознакомления! Цены на
                            высококачественные европейские препараты постоянно
                            корректируются. Уточняйте актуальную информацию по
                            ценам у нашего администратора.
                        </p>
                    </InfoBlock>
                    <PriceList>{pricelistElements}</PriceList>
                </div>
            </div>
        </Layout>
    )
}

PriceListPage.propTypes = {}
PriceListPage.defaultProps = {}

export default PriceListPage

export const pageQuery = graphql`
    query Prices {
        ...Helmet
        blank: imageSharp(
            fluid: { originalName: { regex: "/prices-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        allMarkdownRemark(filter: { fields: { group: { eq: "prices" } } }) {
            edges {
                node {
                    internal {
                        contentDigest
                    }
                    frontmatter {
                        title
                        path
                        order
                    }
                }
            }
        }
    }
`
