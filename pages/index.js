import { useEffect, useState } from 'react';
import Head from 'next/head';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Index = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

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

    return (
        <div className='text-gray-700 dark:text-gray-100'>
            <Head>
                <title>Igor Rumiantcev - Frontend Developer</title>
            </Head>

            <Header />

            <section className='relative bg-white dark:bg-gray-800 mx-auto -mt-48 mb-12 p-8 xl:p-12 w-full xl:w-1/2 2xl:w-[750px] max-w-[calc(100%-1rem)] rounded-xl shadow-xl dark:shadow-none border dark:border-gray-700'>
                <button
                    onClick={toggleTheme}
                    className='right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 p-2 transition rounded-full'
                >
                    {theme ? (theme === 'dark' ? <IoSunnyOutline size={24} color='#fff' /> : <IoMoonOutline size={24} />) : ''}
                </button>

                <About />
                <Experience />
                <Projects />
            </section>
        </div>
    );
}

export default Index;