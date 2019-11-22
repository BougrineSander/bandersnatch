import React from 'react';
import image from '../img/happySadMask.png';
import loading from '../img/loading.gif'

export const BeforeScreen = () => {
    return (
        <div style={{height:'100%'}}>
        	<h1 style={{padding:'9%'}}>Out of the Box</h1>
            <img src={image} style={{width:'100%', padding:'10%'}} />
            <p style={{fontWeight:'bold', padding:'10%', fontSize:'150%'}}>De voorstelling begint straks</p>
            <img src={loading} style={{width:'20%'}} />
        </div>
    )
}
