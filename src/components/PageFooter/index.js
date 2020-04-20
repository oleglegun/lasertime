import React from 'react'

class PageFooter extends React.Component {
    render() {
        return (
            <div className="PageFooter">
                <div className="PageFooter__wrapper">
                    <div className="PageFooter__licence">
                        Лицензия на осуществление медицинской деятельности{' '}
                        <span style={{ whiteSpace: 'noWrap' }}>
                            <a
                                href="/pdf/license.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                № ЛО-77-01-019977
                            </a>
                        </span>
                        <span> от 02.06.2020 г.</span>
                    </div>
                    <div className="PageFooter__warning">
                        Использовании любых материалов сайта без
                        предварительного согласования с администрацией
                        запрещено.
                    </div>
                    <div className="PageFooter__copyright">
                        © 2021 Клиника “Знак Качества”.
                        <span className="PageFooter__copyright-text">
                            Все авторские права защищены.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

PageFooter.propTypes = {}
PageFooter.defaultProps = {}

export default PageFooter
