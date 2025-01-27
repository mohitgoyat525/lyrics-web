import React from 'react'

const Description = (props) => {
    return (
        <p className={`${props.className} leading-[179.5%] lg:text-xl md:text-lg text-base text-white opacity-[70%]`}>{props.title}</p>
    )
}

export default Description