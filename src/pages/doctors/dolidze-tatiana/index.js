import React from 'react'
import {graphql} from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './dolidze-tatiana-certificates.pdf'

function DolidzeTatianaDoctor({ data }) {
    return (
        <div>
            <Helmet
                data={data}
                title="Долидзе Татьяна Джумберовна"
                description="Долидзе Татьяна Джумберовна - ассистент врача-косметолога в клинике &quot;Знак Качества&quot;"
            />
            <DoctorInfoPanel
                name="Долидзе Татьяна Джумберовна"
                position="ассистент врача-косметолога"
                description="Владеет техниками косметического, пластического, испанского, точечного, скульптурирующего массажей."
                imageSizes={data.dolidzeTatianaGraybg.sizes}
            />
            <Timeline title="Обучение" certLink={certificates}>
                <TimelineItem
                    date="2012"
                    name="Люберецкий медицинский колледж"
                    description="Диплом о среднем профессиональном образования по специальности &quot;Сестринское дело&quot;"
                />
                <TimelineItem
                    date="2016"
                    name="Российский университет дружбы народов (РУДН)"
                    description="Диплом по специальности &quot;Сестринское дело в косметологии&quot;"
                />
                <TimelineItem
                    date="2016"
                    name="Научно-производственная фирма &quot;Галатея&quot;"
                    description="Сертификат &quot;Ультразвуковая и микротоковая терапия в косметологии&quot;"
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
    )
}

export default DolidzeTatianaDoctor

export const pageQuery = graphql`
    query DolidzeTatianaDoctorQuery {
        ...Helmet
        dolidzeTatianaGraybg: imageSharp(
            id: { regex: "/dolidze-tatiana-graybg/" }
        ) {
            sizes(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
