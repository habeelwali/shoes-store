import React from 'react'

export default function Color({colour}) {
    return (
        <div className="color">
        {
            colour.map((colour, index) => (
                <button key={index} style={{background: colour}}>{colour}</button>
            ))
        }
    </div>
    )
}
