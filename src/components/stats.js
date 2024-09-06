import React from 'react';
import Card from './card.js';
import IconBR from '../assets/icon-brand-recognition.svg'
import IconDR from '../assets/icon-detailed-records.svg'
import IconFC from '../assets/icon-fully-customizable.svg'


export default function Stats() {
    return (
        <div className='container'>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
            <div className='line'></div>
            <div className='cardContainer'>
                <Card img={IconBR} title='Brand Recognition' body='Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.'/>
                <Card img={IconDR} title='Detailed Records' body='Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.'/>
                <Card img={IconFC} title='Fully Customizable' body='Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.'/>
            </div>
            <div className='spacer'></div>
        </div>
    )
}


