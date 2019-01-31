import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ServiceGrid, { ServiceGridItem } from '../components/ServiceGrid'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

function Services({ data }) {
    return (
        <Layout>
            <div>
                <Helmet data={data} title={'Услуги'} description="" />

                <ArticleHeaderImage
                    title={'Услуги'}
                    imgSizes={data.servicesHeader.fluid}
                    alignRight
                    noEffects
                />

                <div className="PageContent__wrapper">
                    <ServiceGrid>
                        <ServiceGridItem
                            title="Лазерная эпиляция"
                            link="/services/laser-epilation"
                            imgSizes={data.laserEpilationServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="3D лифтинг INFINI®"
                            link="/services/3d-lifting-infini"
                            imgSizes={data.liftingInfiniServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Лазерное омоложение"
                            link="/services/laser-rejuvenation"
                            imgSizes={data.laserRejuvenationServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Фотоомоложение"
                            link="/services/photo-rejuvenation"
                            imgSizes={data.photoRejuvenationServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Удаление сосудов"
                            link="/services/ktp-laser"
                            imgSizes={data.KTPLaserServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Контурная пластика"
                            link="/services/contour-correction"
                            imgSizes={data.ContourCorrectionServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="LPG массаж"
                            link="/services/lpg-massage"
                            imgSizes={data.LPGMassageServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Ботулотоксины"
                            link="/services/botox"
                            imgSizes={data.BotoxServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="SMAS лифтинг"
                            link="/services/smas-lifting"
                            imgSizes={data.SmasLiftingServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Биоимпеданс"
                            link="/services/bioimpedance"
                            imgSizes={data.SmasLiftingServiceHeader.fluid}
                        />
                        <ServiceGridItem
                            title="Диагностика OligoScan"
                            link="/services/oligoscan"
                            imgSizes={data.SmasLiftingServiceHeader.fluid}
                        />
                    </ServiceGrid>
                </div>
            </div>
        </Layout>
    )
}

Services.propTypes = {}
Services.defaultProps = {}

export default Services

export const pageQuery = graphql`
    query Services {
        ...Helmet
        servicesHeader: imageSharp(
            fluid: { originalName: { regex: "/services-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        laserEpilationServiceHeader: imageSharp(
            fluid: {
                originalName: { regex: "/laser-epilation-service-header/" }
            }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        photoRejuvenationServiceHeader: imageSharp(
            fluid: {
                originalName: { regex: "/photo-rejuvenation-service-header/" }
            }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        liftingInfiniServiceHeader: imageSharp(
            fluid: {
                originalName: { regex: "/lifting-infini-service-header/" }
            }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        laserRejuvenationServiceHeader: imageSharp(
            fluid: {
                originalName: { regex: "/laser-rejuvenation-service-header/" }
            }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        KTPLaserServiceHeader: imageSharp(
            fluid: { originalName: { regex: "/ktp-laser-service-header/" } }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        ContourCorrectionServiceHeader: imageSharp(
            fluid: {
                originalName: { regex: "/contour-correction-service-header/" }
            }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        LPGMassageServiceHeader: imageSharp(
            fluid: { originalName: { regex: "/lpg-massage-service-header/" } }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        BotoxServiceHeader: imageSharp(
            fluid: { originalName: { regex: "/botox-service-header/" } }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        SmasLiftingServiceHeader: imageSharp(
            fluid: { originalName: { regex: "/smas-lifting-service-header/" } }
        ) {
            fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
