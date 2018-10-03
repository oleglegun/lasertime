import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import articleIcon from './src/icon-article.svg'
import interviewIcon from './src/icon-interview.svg'
import interviewTypeText from './src/text-interview.svg'
import articleTypeText from './src/text-article.svg'
import placeholderImg from './src/placeholder-image.png'
import Img from 'gatsby-image'

function ArticlePreview({ type, imageSizes, image, title, description, path }) {
    const TypeIcon = type === 'interview' ? interviewIcon : articleIcon
    const TypeText = type === 'interview' ? interviewTypeText : articleTypeText

    return (
        <Link to={path}>
            <div className="ArticlePreview">
                <div className="ArticlePreview__img">
                    {imageSizes ? (
                        <Img sizes={imageSizes} />
                    ) : (
                        <img src={image} />
                    )}
                </div>
                <div
                    className={`ArticlePreview__article-type ArticlePreview__article-type--${type}`}
                >
                    <div className="ArticlePreview__article-type-icon">
                        <img src={TypeIcon} />
                    </div>
                    <div className="ArticlePreview__article-type-text">
                        <img src={TypeText} />
                    </div>
                </div>
                <div className="ArticlePreview__content">
                    <div className="ArticlePreview__title">
                        <div className="ArticlePreview__title-wrapper">
                            <h2 className="ArticlePreview__title-text">
                                {title}
                            </h2>
                        </div>
                    </div>
                    <div className="ArticlePreview__description">
                        {description}
                    </div>
                    <div className="ArticlePreview__link">Читать полностью</div>
                </div>
            </div>
        </Link>
    )
}

ArticlePreview.propTypes = {
    type: PropTypes.oneOf(['article', 'interview']),
    image: PropTypes.string,
    imageSizes: PropTypes.object,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

ArticlePreview.defaultProps = {
    type: 'article',
    image: placeholderImg,
    description: '',
}

export default ArticlePreview
