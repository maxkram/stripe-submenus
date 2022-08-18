import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
    const { closeSubmenu } = useGlobalContext();

    return (
        <section className='hero'>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>Payments for internet</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate architecto et possimus sequi iste eveniet!
                    </p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} alt='phone' className='phone-img' />
                </article>
            </div>
        </section>
    );
};

export default Hero;
