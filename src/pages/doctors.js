import React from 'react'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'
import DoctorPreview from '../components/DoctorPreview'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

function Doctors({ data }) {
    return (
        <Layout>
            <div>
                <Helmet data={data} title="Врачи" description="" />
                <ArticleHeaderImage
                    title={'Врачи'}
                    imgSizes={data.doctorsHeader.fluid}
                    alignLeft
                    noEffects
                />

                <Link to="/doctors/legun-alla">
                    <DoctorPreview
                        name="Легун Алла Александровна"
                        position="главный врач"
                    />
                </Link>
                <Link to="/doctors/portnova-ekaterina">
                    <DoctorPreview
                        name="Портнова Екатерина Вячеславовна"
                        position="специалист по лазерным и световым технологиям"
                    />
                </Link>
                <Link to="/doctors/dolidze-tatiana">
                    <DoctorPreview
                        name="Долидзе Татьяна Джумберовна"
                        position="ассистент врача-косметолога"
                    />
                </Link>
                <Link to="/doctors/gvaramiya-aleksey">
                    <DoctorPreview
                        name="Гварамия Алексей Алекович"
                        position="пластический хирург"
                    />
                </Link>
            </div>
        </Layout>
    )
}

Doctors.propTypes = {}

Doctors.defaultProps = {}

export default Doctors

export const pageQuery = graphql`
    query Doctors {
        ...Helmet
        doctorsHeader: imageSharp(
            fluid: { originalName: { regex: "/doctors-header/" } }
        ) {
            fluid(maxWidth: 960, quality: 65) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
`
