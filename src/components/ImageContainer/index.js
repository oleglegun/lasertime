import React from 'react'
import PropTypes from 'prop-types'

/*<ImageContainer align="center" center width="oneThird" oneThird></ImageContainer>*/

function ImageContainer({ oneHalf, oneThird, oneFourth, children }) {
    let sizeModifier
    
    if (oneHalf) sizeModifier = 'one-half'
    else if (oneThird) sizeModifier = 'one-third'
    else if (oneFourth) sizeModifier = 'one-fourth'
    else sizeModifier = 'size-auto'
    
    return <div className={`ImageContainer ImageContainer--${sizeModifier}`}>{children}</div>
}

ImageContainer.propTypes = {
    oneHalf: PropTypes.bool, // element width
    oneThird: PropTypes.bool, // element width
    oneFourth: PropTypes.bool, // element width
    children: PropTypes.node.isRequired,
}

export default ImageContainer
