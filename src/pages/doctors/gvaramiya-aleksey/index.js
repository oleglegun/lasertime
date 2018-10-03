import React from 'react'
import {graphql} from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './gvaramiya-aleksey-certificates.pdf'

function GvaramiyaAlekseyDoctor({ data }) {
    return (
        <div>
            <Helmet
                data={data}
                title="Гварамия Алексей Алекович"
                description="Гварамия Алексей Алекович - пластический хирург, врач высшей категории в клинике &quot;Знак Качества&quot;"
            />
            <DoctorInfoPanel
                name="Гварамия Алексей Алекович"
                position="пластический хирург"
                description="Пластический хирург, врач высшей категории. Главный внештатный окружной специалист по Южному округу города Москвы. Аккредитованный эксперт по контролю и  надзору за клиниками, занимающимися деятельностью &quot;пластическая хирургия&quot;. Действительный и сертифицированный член Российского Общества Пластических, Эстетических и Реконструктивных хирургов. Провел более 3500 операций по комплексной реювенации (омоложению) лица."
                imageSizes={data.gvaramiyaAlekseyGraybg.sizes}
            />
            <Timeline title="Обучение" certLink={certificates}>
                <TimelineItem
                    date="1991"
                    name="Второй московский медицинский институт им.Н.И.Пирогова"
                    description="Диплом по специальности &quot;Лечебное дело&quot;"
                />
                <TimelineItem
                    date="1991 - 1993"
                    name="Научно-практическое объединение &quot;Косметология&quot; Минздрава России"
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
                    description="Повышение квалификации по специальности &quot;Хирургия&quot;"
                />
                <TimelineItem
                    date="2000"
                    name="Медицинская академия последипломного образования (г. Санкт-Петербург)"
                    description="Повышение квалификации по специальности &quot;Пластическая, реконструктивная и эстетическая хирургия&quot;"
                />
                <TimelineItem
                    date="2002"
                    name="Российская медицинская академия последипломного образования (г. Москва)"
                    description="Повышение квалификации по программе &quot;Микрохирургия&quot;"
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
                    description="Повышение квалификации по программе &quot;Хирургия&quot;"
                />
                <TimelineItem
                    date="2012"
                    name="Московский государственный медико-стоматологический университет им.А.И.Евдокимова"
                    description="Повышение квалификации по программе &quot;Актуальные вопросы онкологии&quot;"
                />
                <TimelineItem
                    date="2013"
                    name="Первый московский государственный медицинский университет им И.М. Сеченова"
                    description="Профессиональная переподготовка по специальности &quot;Пластическая хирургия&quot;"
                />
                <TimelineItem
                    date="2015"
                    name="г. Майами, США"
                    description="Стажировка у доктора Оскара Рамиреса"
                />
            </Timeline>
        </div>
    )
}

export default GvaramiyaAlekseyDoctor

export const pageQuery = graphql`
    query GvaramiyaAlekseyDoctorQuery {
        ...Helmet
        gvaramiyaAlekseyGraybg: imageSharp(
            id: { regex: "/gvaramiya-aleksey-graybg/" }
        ) {
            sizes(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
