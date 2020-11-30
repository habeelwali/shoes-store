import React from 'react'

export default function Size({size}) {
    return (
        <div className="size">
            {
                size.map((size, index) => (
                    <button key={index}>{size}</button>
                ))
            }
        </div>
    )
}
