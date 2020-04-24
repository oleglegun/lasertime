import React from 'react'
import { graphql } from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './portnova-ekaterina-certificates.pdf'
import Layout from '../../../components/Layout'

function PortnovaEkaterinaDoctor({data} ) {
    return (
        <Layout>
                    <div>
                        <Helmet
                            data={data}
                            title="Портнова Екатерина Вячеславовна"
                            description='Портнова Екатерина Вячеславовна - специалист по лазерным и световым технологиям в клинике "Знак Качества"'
                        />
                        <DoctorInfoPanel
                            name="Портнова Екатерина Вячеславовна"
                            position="специалист по лазерным и световым технологиям"
                            description='Ведущий специалист клиники "Знак Качества" по световым и лазерным технологиям. В основе ее работы лежат принципы сочетания комфорта и удобства для пациентов в процессе лечения. Стаж работы по специальности более 5 лет. Сертифицированный специалист по лазерным технологиям. Выполняет процедуры по улучшению состояния кожи с применением терапевтических методов.'
                            imageSizes={data.portnovaEkaterinaGraybg.fluid}
                        />
                        <Timeline title="Обучение" certLink={certificates}>
                            <TimelineItem
                                date="2002 - 2006"
                                name="МОМК №2"
                                description={[
                                    'Специальность "Сестринское дело" (с отличием)',
                                    'Повышение квалификации, специализация "Физиотерапия"',
                                    'Повышение квалификации, специализация "Косметология"',
                                ]}
                            />

                            <TimelineItem
                                date="2006"
                                name='Компания "Syneron"'
                                description="Сертификат по технологии Elos DS/SR"
                            />

                            <TimelineItem
                                date="2008 - 2009"
                                name="Эстетик Консалтинг"
                                description={[
                                    'Эстетические протоколы по коррекции фигуры',
                                    'Мунальная техника эндермологического липомассажа',
                                    'Сертификат по курсу обучения на аппарате Cellu MG Keymodule 1 "LPG Systems"',
                                    'Сертификат по курсу обучения на аппарате Cellu MG Keymodule 2 "LPG Systems"',
                                ]}
                            />

                            <TimelineItem
                                date="2009"
                                name="ГОУВПО СПБ ГМА им. М.И. Мечникова"
                                description='Удостоверение "Мезотерапия в дерматологии и эстетической медицине"'
                            />
                            <TimelineItem
                                date="2009"
                                name="Компания DEKA"
                                description={[
                                    'Сертификат по лазерным технологиям на аппарате "Synchro Play"',
                                    'Сертификат по лазерным технологиям на аппарате "Smart Xide DOT"',
                                ]}
                            />
                            <TimelineItem
                                date="2009"
                                name='ООО "Вип Клиник"'
                                description={[
                                    'Сертификат по работе на аппарате VIP-LINE (коррекция фигуры)',
                                    'Сертификат по работе на аппарате Revital RF (радиоволновой лифтинг)',
                                    'Сертификат по работе на аппарате RAH-Medicell (ультразвуковая кавитация)',
                                ]}
                            />
                            <TimelineItem
                                date="2010"
                                name="Учебно-методический центр MARTINEX"
                                description="Диплом по работе с клеточной космецевтикой GERNETIC International"
                            />
                            <TimelineItem
                                date="2011"
                                name="Государственный научный центр лазерной медицины федерального медико-биологического агенства"
                                description='Специализация "Лазерная дерматокосметология"'
                            />
                            <TimelineItem
                                date="2011"
                                name="МОМК №2"
                                description='Повышение квалификации, специализация "Сестринская косметология"'
                            />
                            <TimelineItem
                                date="2011"
                                name="Компания Maruga"
                                description="Сертификат по работе с пилингом Inno Peel"
                            />

                            <TimelineItem
                                date="2012"
                                name="Институт красоты Fijie Paris"
                                description="Сертификат по работе с препаратом Meso-Wharton P199"
                            />
                            <TimelineItem
                                date="2012"
                                name='ООО "Астрея"'
                                description="Применение профессиональных пилингов Mediderma/Sesderma/Sesvalia/Dietes"
                            />
                            <TimelineItem
                                date="2012"
                                name="Dermalogica"
                                description="Сертификат по работе с космецевтикой Dermalogica"
                            />
                            <TimelineItem
                                date="2012"
                                name='Компания "Опти Мед"'
                                description="Сертификат по работе с космецевтикой Hollyland"
                            />
                            <TimelineItem
                                date=""
                                name='ООО "Восточный экспресс"'
                                description='Сертификат по работе с мезонитями "Тредлифтинг в противовозрастной медицине"'
                            />
                            <TimelineItem
                                date="2013"
                                name="Компания Mesoexpert"
                                description="Сертификат по работе с мезонитями Reanane-V-line"
                            />
                            <TimelineItem
                                date="2016"
                                name="Дом Русской Косметики (ЧУ ДПО ДРК)"
                                description={[
                                    'Удостоверение "Современные инъекционные методы в эстетической медицине"',
                                    'Сертификат по программе "Редермализация препаратом Hyalual"',
                                    'Сертификат по контурной пластике',
                                    'Сертификат по программе "Мезонити в программах коррекции возрастных изменений лица и тела"',
                                    'Сертификат по работе "Ботулотоксин типа А"',
                                    'Сертификат "Мезотерапия лица и тела"',
                                    'Сертификат "Биоревитализация"',
                                    'Сертификат "Склеротерапия"',
                                    'Сертификат "Плазмолифтинг",',
                                ]}
                            />
                            <TimelineItem
                                date="2017"
                                name=""
                                description='Сертификат по программе "Лечение косметологических дефектов (пигментных сосудистых образований) и процедуры фотоэпиляции Quantum Lumenis"'
                            />
                            <TimelineItem
                                date="2017"
                                name='Компания "Опти Мед"'
                                description='Сертификат по работе с космецевтикой "Holy Land"'
                            />
                            <TimelineItem
                                date="2014 - 2021"
                                name='Московский медицинский институт "Реавиз"'
                                description='Диплом по специальности "Лечебное Дело"'
                            />
                        </Timeline>
                    </div>
        </Layout>
    )
}

export default PortnovaEkaterinaDoctor

export const pageQuery = graphql`
    query PortnovaEkaterinaDoctorQuery {
        ...Helmet
        portnovaEkaterinaGraybg: imageSharp(
            fluid: { originalName: { regex: "/portnova-ekaterina-graybg/" } }
        ) {
            fluid(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
