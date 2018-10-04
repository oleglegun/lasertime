import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './gvaramiya-aleksey-certificates.pdf'
import Layout from '../../../components/Layout'

function GvaramiyaAlekseyDoctor() {
    return (
        <Layout>
            <StaticQuery
                query={pageQuery}
                render={data => (
                    <div>
                        <Helmet
                            data={data}
                            title="Гварамия Алексей Алекович"
                            description='Гварамия Алексей Алекович - пластический хирург, врач высшей категории в клинике "Знак Качества"'
                        />
                        <DoctorInfoPanel
                            name="Гварамия Алексей Алекович"
                            position="пластический хирург"
                            description='Пластический хирург, врач высшей категории. Главный внештатный окружной специалист по Южному округу города Москвы. Аккредитованный эксперт по контролю и  надзору за клиниками, занимающимися деятельностью "пластическая хирургия". Действительный и сертифицированный член Российского Общества Пластических, Эстетических и Реконструктивных хирургов. Провел более 3500 операций по комплексной реювенации (омоложению) лица.'
                            imageSizes={data.gvaramiyaAlekseyGraybg.fluid}
                        />
                        <Timeline title="Обучение" certLink={certificates}>
                            <TimelineItem
                                date="1991"
                                name="Второй московский медицинский институт им.Н.И.Пирогова"
                                description='Диплом по специальности "Лечебное дело"'
                            />
                            <TimelineItem
                                date="1991 - 1993"
                                name='Научно-практическое объединение "Косметология" Минздрава России'
                                description="Подготовка в клинической ординатуре (руководитель Фришберг И.И.)"
                            />
                            <TimelineItem
                                date="1993"
                                name="Клиника Джона Барнетта (г. Даллас, штат Техас, США)"
                                description="Стажировка"
                            />
                            <TimelineItem
                                date="1993 - 1994"
                                name="Southwestern Medical Center"
                                description="Работа в отделении трансплантации кожи"
                            />
                            <TimelineItem
                                date="1999"
                                name="Международная Медицинская корпорация (г. Москва)"
                                description='Повышение квалификации по специальности "Хирургия"'
                            />
                            <TimelineItem
                                date="2000"
                                name="Медицинская академия последипломного образования (г. Санкт-Петербург)"
                                description='Повышение квалификации по специальности "Пластическая, реконструктивная и эстетическая хирургия"'
                            />
                            <TimelineItem
                                date="2002"
                                name="Российская медицинская академия последипломного образования (г. Москва)"
                                description='Повышение квалификации по программе "Микрохирургия"'
                            />
                            <TimelineItem
                                date="2006"
                                name="Российская медицинская академия последипломного образования (г. Москва)"
                                description={[
                                    'Повышение квалификации по программе "Хирургия"',
                                    'Профессиональная переподготовка по специальности "Хирургия"',
                                ]}
                            />
                            <TimelineItem
                                date="2011"
                                name="Российская медицинская академия последипломного образования (г. Москва)"
                                description='Повышение квалификации по программе "Хирургия"'
                            />
                            <TimelineItem
                                date="2012"
                                name="Московский государственный медико-стоматологический университет им.А.И.Евдокимова"
                                description='Повышение квалификации по программе "Актуальные вопросы онкологии"'
                            />
                            <TimelineItem
                                date="2013"
                                name="Первый московский государственный медицинский университет им И.М. Сеченова"
                                description='Профессиональная переподготовка по специальности "Пластическая хирургия"'
                            />
                            <TimelineItem
                                date="2015"
                                name="г. Майами, США"
                                description="Стажировка у доктора Оскара Рамиреса"
                            />
                        </Timeline>
                    </div>
                )}
            />
        </Layout>
    )
}

export default GvaramiyaAlekseyDoctor

export const pageQuery = graphql`
    query GvaramiyaAlekseyDoctorQuery {
        ...Helmet
        gvaramiyaAlekseyGraybg: imageSharp(
            fluid: { originalName: { regex: "/gvaramiya-aleksey-graybg/" } }
        ) {
            fluid(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
