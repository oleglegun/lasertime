import React from 'react'
import {graphql} from 'gatsby'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function ArticleList({ data }) {
    return (
        <div>
            <Helmet data={data} title="Статьи" description="" />
            <ArticleHeaderImage
                title={'Статьи'}
                imgSizes={data.articlesHeader.sizes}
                alignRight
                noEffects
            />

            <div className="PageContent__wrapper">
                <ArticlePreview
                    title={'LPG-массаж или подтяжка лица без операции'}
                    path={'/articles/lpg-massage/'}
                    imageSizes={data.LPGMassageArticle.sizes}
                    description={
                        'Технология LPG-массажа представляет собой одну из наиболее безопасных альтернатив операционному лечению целлюлита, процедуре липосакции и операционной подтяжке лица.'
                    }
                    type={'article'}
                />
                <ArticlePreview
                    title={'Омоложение без скальпеля!'}
                    path={'/articles/rejuvenation-without-scalpel/'}
                    imageSizes={data.RejuvenationWithoutScalpelArticle.sizes}
                    description={
                        'Косметологи нашего времени стараются найти альтернативу любым операционным вмешательствам. В данной статье мы рассмотрим одну из них.'
                    }
                    type={'article'}
                />
                <ArticlePreview
                    title={'Пилинг PRX-T33 - сохраняем сияние и красоту кожи!'}
                    path={'/articles/peeling-prx-t33/'}
                    imageSizes={data.peelingPrxT33Article.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Плацентарные препараты или машина времени!'}
                    path={'/articles/placental-drugs/'}
                    imageSizes={data.placentalDrugsArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Векторный лифтинг Radiesse'}
                    path={'/articles/vector-lifting-radiesse/'}
                    imageSizes={data.vectorLiftingRadiesseArticle.sizes}
                    description={
                        'Не так давно единственным способом победить возрастные изменения была пластическая хирургия. Однако современные альтернативные методы не только дают аналогичный результат, но и восстанавливают упругость кожи.'
                    }
                    type={'article'}
                />
                <ArticlePreview
                    title={'Лазерный карбоновый пилинг'}
                    path={'/articles/laser-carbon-peeling/'}
                    imageSizes={data.laserCarbonPeelingArticle.sizes}
                    description={
                        'Одной из самых инновационных технологий чистки лица является лазерный карбоновый пилинг. Главным преимуществом этой процедуры считается одновременный омолаживающий эффект, а также решение множества дерматологических проблем.'
                    }
                    type={'article'}
                />
                <ArticlePreview
                    title={'Как мужчине помолодеть на 15 лет?'}
                    path={'/articles/smas-lifting-male/'}
                    imageSizes={data.smasLiftingMaleArticle.sizes}
                    description={
                        'Моложавый вид – секрет успеха, а все предубеждения по поводу коррекции внешности наконец-то отходят на второй план.'
                    }
                    type={'article'}
                />
                <ArticlePreview
                    title={'Мужская косметология'}
                    path={'/articles/male-cosmetology/'}
                    imageSizes={data.maleCosmetologyArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о чистке лица'}
                    path={'/articles/face-cleansing-interview/'}
                    imageSizes={data.faceCleansingInterview.sizes}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о лазерной эпиляции'}
                    path={'/articles/laser-epilation-interview/'}
                    imageSizes={data.laserEpilationInterview.sizes}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о PRP плазмолифтинге'}
                    path={'/articles/plazmolifting-interview/'}
                    imageSizes={data.plazmoliftingInterview.sizes}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о фракционном DOT омоложении'}
                    path={'/articles/dot-rejuvenation-interview/'}
                    imageSizes={data.dotRejuvenationInterview.sizes}
                    description={''}
                    type={'interview'}
                />

                <ArticlePreview
                    title={'Глубокий 3D лифтинг на аппарате INFINI'}
                    path={'/3d-lifting-infini-moscow/'}
                    imageSizes={data.liftingInfiniArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Биоревитализация – недорогая и очень эффективная процедура'
                    }
                    path={'/biorevitalization-moscow/'}
                    imageSizes={data.biorevitalizationArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Безыгольная биоревитализация'}
                    path={'/biorevitalization-vitalaser-moscow/'}
                    imageSizes={data.biorevitalizationVitalaserArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Контурная пластика – современный метод борьбы с морщинами'
                    }
                    path={'/contour-correction-moscow/'}
                    imageSizes={data.contourCorrectionArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Итальянские нити Dermafil Happy Lift – революция в лифтинге'
                    }
                    path={'/dermafil-happy-lift-threads/'}
                    imageSizes={data.dermafilHappyLiftThreadsArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Чистка лица в Москве - вся правда о процедуре!'}
                    path={'/facial-cleansing-moscow/'}
                    imageSizes={data.facialCleansingArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Филлеры на основе гиалуроновой кислоты'}
                    path={'/hyaluronic-fillers-moscow/'}
                    imageSizes={data.hyaluronicFillersArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Гипергидроз (Москва) - излечим!'}
                    path={'/hyperhidrosis-moscow/'}
                    imageSizes={data.hyperhidrosisArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Лазерная эпиляция в Москве недорого: мифы и реальность!'
                    }
                    path={'/laser-epilation-moscow/'}
                    imageSizes={data.laserEpilationArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Лазерное удаление пигментных пятен'}
                    path={'/laser-pigment-spot-removal-moscow/'}
                    imageSizes={data.laserPigmentSpotRemovalArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Преимущества фракционного омоложения'}
                    path={'/laser-rejuvenation-advantages-moscow/'}
                    imageSizes={data.laserRejuvenationAdvantagesArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Фракционное лазерное омоложение'}
                    path={'/laser-rejuvenation-moscow/'}
                    imageSizes={data.laserRejuvenationArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Увеличение губ в Москве'}
                    path={'/lip-augmentation-moscow/'}
                    imageSizes={data.lipAugmentationArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Тянем - потянем и вытянем лицо мезонитями'}
                    path={'/meso-threads-moscow/'}
                    imageSizes={data.mesoThreadsArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Мезотерапия: молодость и свежесть'}
                    path={'/mesotherapy-moscow/'}
                    imageSizes={data.mesotherapyArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Фотоомоложение - современные технологии красоты'}
                    path={'/photo-rejuvenation-moscow/'}
                    imageSizes={data.photoRejuvenationArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Плазмолифтинг лица в Москве'}
                    path={'/plazmolifting-moscow/'}
                    imageSizes={data.plazmoliftingArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Ритидэктомия - фейслифтинг, подтяжка лица и шеи'}
                    path={'/ritidectomy-facelifting-moscow/'}
                    imageSizes={data.ritidectomyFaceliftingArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Нити Silhouette Lift Soft'}
                    path={'/silhouette-lift-soft-threads/'}
                    imageSizes={data.silhouetteLiftSoftThreadsArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Нити Spring Thread'}
                    path={'/spring-thread/'}
                    imageSizes={data.springThreadArticle.sizes}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Ультразвуковой пилинг'}
                    path={'/supersonic-peeling-moscow/'}
                    imageSizes={data.supersonicPeelingArticle.sizes}
                    description={''}
                    type={'article'}
                />
            </div>
        </div>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
        articlesHeader: imageSharp(id: { regex: "/articles-header/" }) {
            sizes(maxWidth: 960, quality: 60) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        # Preview images
        LPGMassageArticle: imageSharp(id: { regex: "/lpg-massage-article/" }) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserCarbonPeelingArticle: imageSharp(
            id: { regex: "/laser-carbon-peeling-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        RejuvenationWithoutScalpelArticle: imageSharp(
            id: { regex: "/rejuvenation-without-scalpel-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        peelingPrxT33Article: imageSharp(
            id: { regex: "/peeling-prx-t33-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        placentalDrugsArticle: imageSharp(
            id: { regex: "/placental-drugs-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        vectorLiftingRadiesseArticle: imageSharp(
            id: { regex: "/vector-lifting-radiesse-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        smasLiftingMaleArticle: imageSharp(
            id: { regex: "/smas-lifting-male-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        maleCosmetologyArticle: imageSharp(
            id: { regex: "/male-cosmetology-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        faceCleansingInterview: imageSharp(
            id: { regex: "/face-cleansing-interview/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserEpilationInterview: imageSharp(
            id: { regex: "/laser-epilation-interview/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        plazmoliftingInterview: imageSharp(
            id: { regex: "/plazmolifting-interview/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        dotRejuvenationInterview: imageSharp(
            id: { regex: "/dot-rejuvenation-interview/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        liftingInfiniArticle: imageSharp(
            id: { regex: "/3d-lifting-infini-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        biorevitalizationArticle: imageSharp(
            id: { regex: "/biorevitalization-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        biorevitalizationVitalaserArticle: imageSharp(
            id: { regex: "/biorevitalization-vitalaser-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        contourCorrectionArticle: imageSharp(
            id: { regex: "/contour-correction-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        dermafilHappyLiftThreadsArticle: imageSharp(
            id: { regex: "/dermafil-happy-lift-threads-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        facialCleansingArticle: imageSharp(
            id: { regex: "/facial-cleansing-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        hyaluronicFillersArticle: imageSharp(
            id: { regex: "/hyaluronic-fillers-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        hyperhidrosisArticle: imageSharp(
            id: { regex: "/hyperhidrosis-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        laserEpilationArticle: imageSharp(
            id: { regex: "/laser-epilation-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        laserPigmentSpotRemovalArticle: imageSharp(
            id: { regex: "/laser-pigment-spot-removal-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        laserRejuvenationAdvantagesArticle: imageSharp(
            id: { regex: "/laser-rejuvenation-advantages-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        laserRejuvenationArticle: imageSharp(
            id: { regex: "/dot-rejuvenation-interview/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        lipAugmentationArticle: imageSharp(
            id: { regex: "/lip-augmentation-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        mesoThreadsArticle: imageSharp(
            id: { regex: "/meso-threads-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        mesotherapyArticle: imageSharp(id: { regex: "/mesotherapy-article/" }) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        photoRejuvenationArticle: imageSharp(
            id: { regex: "/photo-rejuvenation-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        plazmoliftingArticle: imageSharp(
            id: { regex: "/plazmolifting-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        ritidectomyFaceliftingArticle: imageSharp(
            id: { regex: "/ritidectomy-facelifting-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        silhouetteLiftSoftThreadsArticle: imageSharp(
            id: { regex: "/silhouette-lift-soft-threads-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        springThreadArticle: imageSharp(
            id: { regex: "/spring-thread-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        supersonicPeelingArticle: imageSharp(
            id: { regex: "/supersonic-peeling-article/" }
        ) {
            sizes(maxWidth: 180) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
