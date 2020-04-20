import React from 'react'
import PropTypes from 'prop-types'

/*<ImageContainer center oneThird></ImageContainer>*/

function ImageContainer({
    oneHalf,
    oneThird,
    oneFourth,
    left,
    right,
    center,
    captionText,
    captionStyle = 'basic',
    children,
}) {
    let sizeModifier, alignModifier

    if (oneHalf) sizeModifier = 'one-half'
    else if (oneThird) sizeModifier = 'one-third'
    else if (oneFourth) sizeModifier = 'one-fourth'
    else sizeModifier = 'size-auto'

    if (left) alignModifier = 'float-left'
    else if (right) alignModifier = 'float-right'
    // else alignModifier = 'align-center'

    return (
        <figure
            className={`ImageContainer ImageContainer--${sizeModifier} ImageContainer--${alignModifier}`}
        >
            {children}
            {captionText && (
                <figcaption
                    className={`ImageContainer__caption ImageContainer__caption--${captionStyle}`}
                >
                    {captionText}
                </figcaption>
            )}
        </figure>
    )
}

ImageContainer.propTypes = {
    /*-----------------------------------------------------------------------------
     *  Image width
     *----------------------------------------------------------------------------*/
    oneHalf: PropTypes.bool,
    oneThird: PropTypes.bool,
    oneFourth: PropTypes.bool,
    /*-----------------------------------------------------------------------------
     * Alignment
     *----------------------------------------------------------------------------*/
    left: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
    /*-----------------------------------------------------------------------------
     *  Add extra padding to align floated image with text
     *----------------------------------------------------------------------------*/
    paddingTop: PropTypes.bool,
    /*-----------------------------------------------------------------------------
     *  Caption
     *----------------------------------------------------------------------------*/
    captionText: PropTypes.string,
    captionStyle: PropTypes.oneOf(['basic', 'gray', 'gold', 'gray-stencil', 'gold-stencil']),
    children: PropTypes.node.isRequired,
}

export default ImageContainer
