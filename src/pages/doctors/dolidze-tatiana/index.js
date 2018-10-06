import React from 'react'
import { graphql } from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './dolidze-tatiana-certificates.pdf'
import Layout from '../../../components/Layout'

function DolidzeTatianaDoctor({data}) {
    return (
        <Layout>
                    <div>
                        <Helmet
                            data={data}
                            title="Долидзе Татьяна Джумберовна"
                            description='Долидзе Татьяна Джумберовна - ассистент врача-косметолога в клинике "Знак Качества"'
                        />
                        <DoctorInfoPanel
                            name="Долидзе Татьяна Джумберовна"
                            position="ассистент врача-косметолога"
                            description="Владеет техниками косметического, пластического, испанского, точечного, скульптурирующего массажей."
                            imageSizes={data.dolidzeTatianaGraybg.fluid}
                        />
                        <Timeline title="Обучение" certLink={certificates}>
                            <TimelineItem
                                date="2012"
                                name="Люберецкий медицинский колледж"
                                description='Диплом о среднем профессиональном образования по специальности "Сестринское дело"'
                            />
                            <TimelineItem
                                date="2016"
                                name="Российский университет дружбы народов (РУДН)"
                                description='Диплом по специальности "Сестринское дело в косметологии"'
                            />
                            <TimelineItem
                                date="2016"
                                name='Научно-производственная фирма "Галатея"'
                                description='Сертификат "Ультразвуковая и микротоковая терапия в косметологии"'
                            />
                            <TimelineItem
                                date="2016"
                                name="Первый профессиональный институт эстетики"
                                description={[
                                    'Сертификат "Объемное наращивание ресниц"',
                                    'Сертификат "Мастер по наращиванию ресниц"',
                                    'Сертификат "Скульптурный массаж лица (тибетская техника)"',
                                    'Сертификат "Хиромассаж лица (испанская техника)"',
                                    'Сертификат "Косметический (классический) массаж лица"',
                                ]}
                            />
                        </Timeline>
                    </div>
        </Layout>
    )
}

export default DolidzeTatianaDoctor

export const pageQuery = graphql`
    query DolidzeTatianaDoctorQuery {
        ...Helmet
        dolidzeTatianaGraybg: imageSharp(
            fluid: { originalName: { regex: "/dolidze-tatiana-graybg/" } }
        ) {
            fluid(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
