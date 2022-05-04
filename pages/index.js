import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

import Header from '../components/Header';
import skills from '../data/skills.json';
import experience from '../data/experience.json';
import Script from 'next/script';

const Index = () => {
    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }



    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    return (
        <div className='text-gray-700 dark:text-gray-100'>
            <Head>
                <title>Igor Rumiantcev - Frontend Developer</title>
            </Head>

            <Header />

            <section className='relative bg-white dark:bg-gray-800 mx-auto -mt-48 mb-12 p-8 xl:p-12 w-full xl:w-1/2 2xl:w-[750px] max-w-[calc(100%-1rem)] rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-700'>
                <button
                    onClick={toggleTheme}
                    className='right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 p-2 transition rounded-full'
                >
                    {theme ? (theme === 'dark' ? <IoSunnyOutline size={24} color='#fff' /> : <IoMoonOutline size={24} />) : ''}
                </button>


                <section className='border-b dark:border-gray-700 pb-10 mb-12'>
                    <Image
                        src='/images/igor.jpg'
                        width='128px'
                        height='128px'
                        alt='Igor Rumiantcev'
                        className='rounded-full'
                    />

                    <h1 className='text-3xl font-black mt-3 mb-1'>Igor Rumiantcev</h1>

                    <h3 className='text-gray-500 dark:text-gray-400 gap-2 flex'><span>Frontend</span> · <span>Backend</span> · <span>Belgrade, Serbia</span></h3>

                    <div className='flex flex-wrap gap-3 mt-3 mb-12'>
                        {skills.map((item, index) => (
                            <div
                                key={`${item}${index}`}
                                className='py-1 px-3 text-sm bg-amber-600 dark:bg-transparent dark:border dark:border-amber-600 text-amber-100 dark:text-amber-600 rounded-2xl'
                            >
                                {item}
                            </div>
                        ) )}
                    </div>

                    <h2 className='font-bold text-2xl mb-5'>Hi 👋</h2>

                    <div className='mb-5'>
                        <p className='mb-2'>My name is Igor and I'm frontend developer. My passion is SPA with React and Mobile Apps with React Native.</p>
                        <p className='mb-2'>I'm interested in 3D computer graphics and animation in Web, so I use Three.js, GreenSock, etc in my projects.</p>
                        <p>I also know PHP. I have been working for the last 6 years as FullStack Developer (70% - Frontend, 30% - Backend).</p>
                    </div>

                    <div className='flex gap-4'>
                        <a href='https://www.linkedin.com/in/rumiantcev/' target='_blank' className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2'>
                            <FaLinkedinIn size={26}/>
                        </a>
                        <a href="https://github.com/irumiantcev" target='_blank' className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2'>
                            <FaGithub size={26} />
                        </a>
                        <a href="https://t.me/irumiantcev" target='_blank' className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2'>
                            <FaTelegramPlane size={26} />
                        </a>
                    </div>
                </section>

                <section>
                    <h2 className='font-bold text-2xl mb-3'>Experience</h2>

                    <div>
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-row items-start border-b dark:border-gray-700 last:border-0 py-5 px-2 last:pb-0'
                            >
                                <div className='inline-flex min-w-[40px]'>
                                    <Image
                                        src={item.img}
                                        width='40px'
                                        height='40px'
                                        className='object-contain rounded-md'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='ml-5'>
                                    <h3 className='font-bold'>{item.position}</h3>
                                    <p className='text-gray-500 dark:text-gray-400 text-sm mt-1'>{item.title} · {item.period}</p>
                                    <p className='whitespace-pre-line text-gray-500 dark:text-gray-400 leading-normal text-sm mt-2'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}
export default Index;

// export async function getServerSideProps(context) {
//
//     console.log('context', context);
//
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }