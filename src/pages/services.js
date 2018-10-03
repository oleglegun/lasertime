import React from 'react'
import {graphql} from 'gatsby'
import Helmet from '../components/HelmetWrapper'
import ServiceGrid, { ServiceGridItem } from '../components/ServiceGrid'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function Services({ data }) {
    return (
        <div>
            <Helmet data={data} title={'Услуги'} description="" />

            <ArticleHeaderImage
                title={'Услуги'}
                imgSizes={data.servicesHeader.sizes}
                alignRight
                noEffects
            />

            <div className="PageContent__wrapper">
                <ServiceGrid>
                    <ServiceGridItem
                        title="Лазерная эпиляция"
                        link="/services/laser-epilation"
                        imgSizes={data.laserEpilationServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="3D лифтинг INFINI®"
                        link="/services/3d-lifting-infini"
                        imgSizes={data.liftingInfiniServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="Лазерное омоложение"
                        link="/services/laser-rejuvenation"
                        imgSizes={data.laserRejuvenationServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="Фотоомоложение"
                        link="/services/photo-rejuvenation"
                        imgSizes={data.photoRejuvenationServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="Удаление сосудов"
                        link="/services/ktp-laser"
                        imgSizes={data.KTPLaserServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="Контурная пластика"
                        link="/services/contour-correction"
                        imgSizes={data.ContourCorrectionServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="LPG массаж"
                        link="/services/lpg-massage"
                        imgSizes={data.LPGMassageServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="Ботулотоксины"
                        link="/services/botox"
                        imgSizes={data.BotoxServiceHeader.sizes}
                    />
                    <ServiceGridItem
                        title="SMAS лифтинг"
                        link="/services/smas-lifting"
                        imgSizes={data.SmasLiftingServiceHeader.sizes}
                    />
                </ServiceGrid>
            </div>
        </div>
    )
}

Services.propTypes = {}
Services.defaultProps = {}

export default Services

export const pageQuery = graphql`
    query Services {
        ...Helmet
        servicesHeader: imageSharp(id: { regex: "/services-header/" }) {
            sizes(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserEpilationServiceHeader: imageSharp(
            id: { regex: "/laser-epilation-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        photoRejuvenationServiceHeader: imageSharp(
            id: { regex: "/photo-rejuvenation-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        liftingInfiniServiceHeader: imageSharp(
            id: { regex: "/lifting-infini-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserRejuvenationServiceHeader: imageSharp(
            id: { regex: "/laser-rejuvenation-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        KTPLaserServiceHeader: imageSharp(
            id: { regex: "/ktp-laser-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        ContourCorrectionServiceHeader: imageSharp(
            id: { regex: "/contour-correction-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        LPGMassageServiceHeader: imageSharp(
            id: { regex: "/lpg-massage-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        BotoxServiceHeader: imageSharp(
            id: { regex: "/botox-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        SmasLiftingServiceHeader: imageSharp(
            id: { regex: "/smas-lifting-service-header/" }
        ) {
            sizes(maxWidth: 350) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
