import React from 'react'
import {graphql} from 'gatsby'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './portnova-ekaterina-certificates.pdf'

function PortnovaEkaterinaDoctor({ data }) {
    return (
        <div>
            <Helmet
                data={data}
                title="Портнова Екатерина Вячеславовна"
                description="Портнова Екатерина Вячеславовна - специалист по лазерным и световым технологиям в клинике &quot;Знак Качества&quot;"
            />
            <DoctorInfoPanel
                name="Портнова Екатерина Вячеславовна"
                position="специалист по лазерным и световым технологиям"
                description="Ведущий специалист клиники &quot;Знак Качества&quot; по световым и лазерным технологиям. В основе ее работы лежат принципы сочетания комфорта и удобства для пациентов в процессе лечения. Стаж работы по специальности более 5 лет. Сертифицированный специалист по лазерным технологиям. Выполняет процедуры по улучшению состояния кожи с применением терапевтических методов."
                imageSizes={data.portnovaEkaterinaGraybg.sizes}
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
                    name="Компания &quot;Syneron&quot;"
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
                    description="Удостоверение &quot;Мезотерапия в дерматологии и эстетической медицине&quot;"
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
                    name="ООО &quot;Вип Клиник&quot;"
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
                    description="Специализация &quot;Лазерная дерматокосметология&quot;"
                />
                <TimelineItem
                    date="2011"
                    name="МОМК №2"
                    description="Повышение квалификации, специализация &quot;Сестринская косметология&quot;"
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
                    name="ООО &quot;Астрея&quot;"
                    description="Применение профессиональных пилингов Mediderma/Sesderma/Sesvalia/Dietes"
                />
                <TimelineItem
                    date="2012"
                    name="Dermalogica"
                    description="Сертификат по работе с космецевтикой Dermalogica"
                />
                <TimelineItem
                    date="2012"
                    name="Компания &quot;Опти Мед&quot;"
                    description="Сертификат по работе с космецевтикой Hollyland"
                />
                <TimelineItem
                    date=""
                    name="ООО &quot;Восточный экспресс&quot;"
                    description="Сертификат по работе с мезонитями &quot;Тредлифтинг в противовозрастной медицине&quot;"
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
                    description="Сертификат по программе &quot;Лечение косметологических дефектов (пигментных сосудистых образований) и процедуры фотоэпиляции Quantum Lumenis&quot;"
                />
                <TimelineItem
                    date="2017"
                    name="Компания &quot;Опти Мед&quot;"
                    description="Сертификат по работе с космецевтикой &quot;Holy Land&quot;"
                />
                <TimelineItem
                    date="2014 - 2017"
                    name="Московский медицинский институт &quot;Реавиз&quot;"
                    description="Обучение"
                />
            </Timeline>
        </div>
    )
}

export default PortnovaEkaterinaDoctor

export const pageQuery = graphql`
    query PortnovaEkaterinaDoctorQuery {
        ...Helmet
        portnovaEkaterinaGraybg: imageSharp(
            id: { regex: "/portnova-ekaterina-graybg/" }
        ) {
            sizes(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
