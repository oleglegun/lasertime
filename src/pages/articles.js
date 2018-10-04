import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import Layout from '../components/Layout'

function ArticleList()  {
    return (
        <Layout>
            <StaticQuery
                query={pageQuery}
                render={data => (
                    <div>
                        <Helmet data={data} title="Статьи" description="" />
                        <ArticleHeaderImage
                            title={'Статьи'}
                            imgSizes={data.articlesHeader.fluid}
                            alignRight
                            noEffects
                        />

                        <div className="PageContent__wrapper">
                            <ArticlePreview
                                title={
                                    'LPG-массаж или подтяжка лица без операции'
                                }
                                path={'/articles/lpg-massage/'}
                                imageSizes={data.LPGMassageArticle.fluid}
                                description={
                                    'Технология LPG-массажа представляет собой одну из наиболее безопасных альтернатив операционному лечению целлюлита, процедуре липосакции и операционной подтяжке лица.'
                                }
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Омоложение без скальпеля!'}
                                path={'/articles/rejuvenation-without-scalpel/'}
                                imageSizes={
                                    data.RejuvenationWithoutScalpelArticle.fluid
                                }
                                description={
                                    'Косметологи нашего времени стараются найти альтернативу любым операционным вмешательствам. В данной статье мы рассмотрим одну из них.'
                                }
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Пилинг PRX-T33 - сохраняем сияние и красоту кожи!'
                                }
                                path={'/articles/peeling-prx-t33/'}
                                imageSizes={data.peelingPrxT33Article.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Плацентарные препараты или машина времени!'
                                }
                                path={'/articles/placental-drugs/'}
                                imageSizes={data.placentalDrugsArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Векторный лифтинг Radiesse'}
                                path={'/articles/vector-lifting-radiesse/'}
                                imageSizes={
                                    data.vectorLiftingRadiesseArticle.fluid
                                }
                                description={
                                    'Не так давно единственным способом победить возрастные изменения была пластическая хирургия. Однако современные альтернативные методы не только дают аналогичный результат, но и восстанавливают упругость кожи.'
                                }
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Лазерный карбоновый пилинг'}
                                path={'/articles/laser-carbon-peeling/'}
                                imageSizes={
                                    data.laserCarbonPeelingArticle.fluid
                                }
                                description={
                                    'Одной из самых инновационных технологий чистки лица является лазерный карбоновый пилинг. Главным преимуществом этой процедуры считается одновременный омолаживающий эффект, а также решение множества дерматологических проблем.'
                                }
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Как мужчине помолодеть на 15 лет?'}
                                path={'/articles/smas-lifting-male/'}
                                imageSizes={data.smasLiftingMaleArticle.fluid}
                                description={
                                    'Моложавый вид – секрет успеха, а все предубеждения по поводу коррекции внешности наконец-то отходят на второй план.'
                                }
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Мужская косметология'}
                                path={'/articles/male-cosmetology/'}
                                imageSizes={data.maleCosmetologyArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Всё, что нужно знать о чистке лица'}
                                path={'/articles/face-cleansing-interview/'}
                                imageSizes={data.faceCleansingInterview.fluid}
                                description={''}
                                type={'interview'}
                            />
                            <ArticlePreview
                                title={
                                    'Всё, что нужно знать о лазерной эпиляции'
                                }
                                path={'/articles/laser-epilation-interview/'}
                                imageSizes={data.laserEpilationInterview.fluid}
                                description={''}
                                type={'interview'}
                            />
                            <ArticlePreview
                                title={
                                    'Всё, что нужно знать о PRP плазмолифтинге'
                                }
                                path={'/articles/plazmolifting-interview/'}
                                imageSizes={data.plazmoliftingInterview.fluid}
                                description={''}
                                type={'interview'}
                            />
                            <ArticlePreview
                                title={
                                    'Всё, что нужно знать о фракционном DOT омоложении'
                                }
                                path={'/articles/dot-rejuvenation-interview/'}
                                imageSizes={data.dotRejuvenationInterview.fluid}
                                description={''}
                                type={'interview'}
                            />

                            <ArticlePreview
                                title={'Глубокий 3D лифтинг на аппарате INFINI'}
                                path={'/3d-lifting-infini-moscow/'}
                                imageSizes={data.liftingInfiniArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Биоревитализация – недорогая и очень эффективная процедура'
                                }
                                path={'/biorevitalization-moscow/'}
                                imageSizes={data.biorevitalizationArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Безыгольная биоревитализация'}
                                path={'/biorevitalization-vitalaser-moscow/'}
                                imageSizes={
                                    data.biorevitalizationVitalaserArticle.fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Контурная пластика – современный метод борьбы с морщинами'
                                }
                                path={'/contour-correction-moscow/'}
                                imageSizes={data.contourCorrectionArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Итальянские нити Dermafil Happy Lift – революция в лифтинге'
                                }
                                path={'/dermafil-happy-lift-threads/'}
                                imageSizes={
                                    data.dermafilHappyLiftThreadsArticle.fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Чистка лица в Москве - вся правда о процедуре!'
                                }
                                path={'/facial-cleansing-moscow/'}
                                imageSizes={data.facialCleansingArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Филлеры на основе гиалуроновой кислоты'}
                                path={'/hyaluronic-fillers-moscow/'}
                                imageSizes={data.hyaluronicFillersArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Гипергидроз (Москва) - излечим!'}
                                path={'/hyperhidrosis-moscow/'}
                                imageSizes={data.hyperhidrosisArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Лазерная эпиляция в Москве недорого: мифы и реальность!'
                                }
                                path={'/laser-epilation-moscow/'}
                                imageSizes={data.laserEpilationArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Лазерное удаление пигментных пятен'}
                                path={'/laser-pigment-spot-removal-moscow/'}
                                imageSizes={
                                    data.laserPigmentSpotRemovalArticle.fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Преимущества фракционного омоложения'}
                                path={'/laser-rejuvenation-advantages-moscow/'}
                                imageSizes={
                                    data.laserRejuvenationAdvantagesArticle
                                        .fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Фракционное лазерное омоложение'}
                                path={'/laser-rejuvenation-moscow/'}
                                imageSizes={data.laserRejuvenationArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Увеличение губ в Москве'}
                                path={'/lip-augmentation-moscow/'}
                                imageSizes={data.lipAugmentationArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Тянем - потянем и вытянем лицо мезонитями'
                                }
                                path={'/meso-threads-moscow/'}
                                imageSizes={data.mesoThreadsArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Мезотерапия: молодость и свежесть'}
                                path={'/mesotherapy-moscow/'}
                                imageSizes={data.mesotherapyArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Фотоомоложение - современные технологии красоты'
                                }
                                path={'/photo-rejuvenation-moscow/'}
                                imageSizes={data.photoRejuvenationArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Плазмолифтинг лица в Москве'}
                                path={'/plazmolifting-moscow/'}
                                imageSizes={data.plazmoliftingArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={
                                    'Ритидэктомия - фейслифтинг, подтяжка лица и шеи'
                                }
                                path={'/ritidectomy-facelifting-moscow/'}
                                imageSizes={
                                    data.ritidectomyFaceliftingArticle.fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Нити Silhouette Lift Soft'}
                                path={'/silhouette-lift-soft-threads/'}
                                imageSizes={
                                    data.silhouetteLiftSoftThreadsArticle.fluid
                                }
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Нити Spring Thread'}
                                path={'/spring-thread/'}
                                imageSizes={data.springThreadArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                            <ArticlePreview
                                title={'Ультразвуковой пилинг'}
                                path={'/supersonic-peeling-moscow/'}
                                imageSizes={data.supersonicPeelingArticle.fluid}
                                description={''}
                                type={'article'}
                            />
                        </div>
                    </div>
                )}
            />
        </Layout>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
        articlesHeader: imageSharp(
            fluid: { originalName: { regex: "/articles-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 60) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        # Preview images
        LPGMassageArticle: imageSharp(
            fluid: { originalName: { regex: "/lpg-massage-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        laserCarbonPeelingArticle: imageSharp(
            fluid: { originalName: { regex: "/laser-carbon-peeling-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        RejuvenationWithoutScalpelArticle: imageSharp(
            fluid: {
                originalName: {
                    regex: "/rejuvenation-without-scalpel-article/"
                }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        peelingPrxT33Article: imageSharp(
            fluid: { originalName: { regex: "/peeling-prx-t33-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        placentalDrugsArticle: imageSharp(
            fluid: { originalName: { regex: "/placental-drugs-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        vectorLiftingRadiesseArticle: imageSharp(
            fluid: {
                originalName: { regex: "/vector-lifting-radiesse-article/" }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        smasLiftingMaleArticle: imageSharp(
            fluid: { originalName: { regex: "/smas-lifting-male-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        maleCosmetologyArticle: imageSharp(
            fluid: { originalName: { regex: "/male-cosmetology-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        faceCleansingInterview: imageSharp(
            fluid: { originalName: { regex: "/face-cleansing-interview/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        laserEpilationInterview: imageSharp(
            fluid: { originalName: { regex: "/laser-epilation-interview/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        plazmoliftingInterview: imageSharp(
            fluid: { originalName: { regex: "/plazmolifting-interview/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        dotRejuvenationInterview: imageSharp(
            fluid: { originalName: { regex: "/dot-rejuvenation-interview/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        liftingInfiniArticle: imageSharp(
            fluid: { originalName: { regex: "/3d-lifting-infini-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        biorevitalizationArticle: imageSharp(
            fluid: { originalName: { regex: "/biorevitalization-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        biorevitalizationVitalaserArticle: imageSharp(
            fluid: {
                originalName: { regex: "/biorevitalization-vitalaser-article/" }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        contourCorrectionArticle: imageSharp(
            fluid: { originalName: { regex: "/contour-correction-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        dermafilHappyLiftThreadsArticle: imageSharp(
            fluid: {
                originalName: { regex: "/dermafil-happy-lift-threads-article/" }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        facialCleansingArticle: imageSharp(
            fluid: { originalName: { regex: "/facial-cleansing-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        hyaluronicFillersArticle: imageSharp(
            fluid: { originalName: { regex: "/hyaluronic-fillers-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        hyperhidrosisArticle: imageSharp(
            fluid: { originalName: { regex: "/hyperhidrosis-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        laserEpilationArticle: imageSharp(
            fluid: { originalName: { regex: "/laser-epilation-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        laserPigmentSpotRemovalArticle: imageSharp(
            fluid: {
                originalName: { regex: "/laser-pigment-spot-removal-article/" }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        laserRejuvenationAdvantagesArticle: imageSharp(
            fluid: {
                originalName: {
                    regex: "/laser-rejuvenation-advantages-article/"
                }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        laserRejuvenationArticle: imageSharp(
            fluid: { originalName: { regex: "/dot-rejuvenation-interview/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        lipAugmentationArticle: imageSharp(
            fluid: { originalName: { regex: "/lip-augmentation-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        mesoThreadsArticle: imageSharp(
            fluid: { originalName: { regex: "/meso-threads-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        mesotherapyArticle: imageSharp(
            fluid: { originalName: { regex: "/mesotherapy-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        photoRejuvenationArticle: imageSharp(
            fluid: { originalName: { regex: "/photo-rejuvenation-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        plazmoliftingArticle: imageSharp(
            fluid: { originalName: { regex: "/plazmolifting-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        ritidectomyFaceliftingArticle: imageSharp(
            fluid: {
                originalName: { regex: "/ritidectomy-facelifting-article/" }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        silhouetteLiftSoftThreadsArticle: imageSharp(
            fluid: {
                originalName: {
                    regex: "/silhouette-lift-soft-threads-article/"
                }
            }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }

        springThreadArticle: imageSharp(
            fluid: { originalName: { regex: "/spring-thread-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
        supersonicPeelingArticle: imageSharp(
            fluid: { originalName: { regex: "/supersonic-peeling-article/" } }
        ) {
            fluid(maxWidth: 180) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
