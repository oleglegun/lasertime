import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

function ArticleAuthorBlock({ image, name, description, link }) {
    return (
        <div className="ArticleAuthor">
            <div className="ArticleAuthor__header">
                <div className="ArticleAuthor__header-wrapper">
                    <div className="ArticleAuthor__img">
                        <img src={image} />
                    </div>
                    <div className="ArticleAuthor__name">{name}</div>
                </div>
            </div>
            <div className="ArticleAuthor__body">
                <div className="ArticleAuthor__title">
                    <div className="ArticleAuthor__title-wrapper">О враче</div>
                </div>
                <div className="ArticleAuthor__description">{description}</div>
                <div className="ArticleAuthor__link">
                    <Link to={link}>Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

ArticleAuthorBlock.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

ArticleAuthorBlock.defaultProps = {
    image: '/img/articles/legun-alla-author.jpg',
    name: 'Легун Алла Александровна',
    description:
        'На наши вопросы отвечает главный врач клиники "Знак Качества", дерматовенеролог, косметолог, онкодерматолог, специалист по детской дерматологии, трихолог - Легун Алла Александровна. Эксперт по аппаратным и лазерным технологиям, а также инъекционным методикам. Использует новейшие методы лечения патологий кожи, постоянно повышая свою квалификацию. Проходит частые стажировки в России и зарубежом.',
    link: '/doctors/legun-alla/',
}

export default ArticleAuthorBlock
