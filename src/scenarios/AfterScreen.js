import React from 'react'
import image from '../img/logo.png';

export const AfterScreen = () => {
    return (
        <div>
            <p style={{fontWeight:'bold', padding:'10%', fontSize:'150%'}}>Hopelijk heeft u genoten van de voorstelling</p>
            <img src={image} style={{width:'50%', padding:'10%'}} />
        </div>
    )
}
