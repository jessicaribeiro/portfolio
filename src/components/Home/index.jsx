import React from 'react';
import './styles.scss';
import Video from '../../images/home-background.mp4';
import {FaArrowRight} from 'react-icons/fa';

const Home = () => {
    return (
        <section id="home" className="section-home">
            <video className="section-home-video" autoPlay muted loop>
                <source src={Video} type="video/mp4"/>
            </video>
            <div className="intro">
                <div className="intro-container">
                    <div>Hello, I'm <span>Jessica Ribeiro</span>,</div>
                    <div>I'm a Software Engineer.</div>
                    <div className="button-view">
                        <span>View my work</span>
                        <FaArrowRight className="icon-arrow"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;