import React from 'react';
import './Home.css';
import profile from '../../assets/Profile/zihad.png';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='cover'>
            <br /><br /> <br />
            <div className='w-11/12 mx-auto min-h-40 md:grid grid-cols-2 justify-center items-center'>
                <div className='lg:mr-10'>
                    <h3 className='text-4xl font-bold'>Hi! I am Md. Zihad</h3>
                    <h2 className='test-3xl font-semibold'>frontend developer</h2>
                    <p>With a strong foundation in HTML, CSS, and JavaScript, I specialize in bringing creative designs to life and ensuring an optimal user experience across all devices</p>
                </div>
                <div>
                    <img className='sm:flex items-center justify-center md:w-[450px] rounded-lg' src={profile} alt="Zihad Photo" />
                </div>
            </div>


            {/* About  */}
            <div>
                <About />
            </div>

            {/* Skill */}
            <Skill />

           {/* Project */}
           <Project />
        </div>
    );
};

export default Home;