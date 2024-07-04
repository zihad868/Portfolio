import React from 'react';
import './Home.css';
import profile from '../../assets/Profile/zihad.png';

const Home = () => {
    return (
        <div className='cover'>
            <br /><br /> <br />
            <div className='w-11/12 mx-auto min-h-72 lg:grid grid-cols-2 justify-center items-center'>
                <div>
                    <h3 className='text-4xl font-bold'>Hi! I am Md. Zihad</h3>
                    <h2 className='test-2xl'>frontend developer</h2>
                </div>
                <div>
                    <img src={profile} alt="Zihad Image" />
                </div>
            </div>
        </div>
    );
};

export default Home;