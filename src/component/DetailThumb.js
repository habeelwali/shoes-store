import React from 'react'

export default function DetailThumb({img,setIndex}) {
    return (
        <div className="thumb">
        {
            img.map((img, index) => (
                <img src={img} alt="" key={index} onClick={() => setIndex(index)} />
            ))
        }

    </div>
    )
}
