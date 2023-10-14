import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';

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
    };

    return (
        <div className="text-gray-700 dark:text-gray-100">
            <Head>
                <title>Igor Rumiantcev - Frontend Developer</title>
            </Head>

            <Header />

            <section className="relative mx-auto -mt-48 mb-12 w-full max-w-[calc(100%-1rem)] rounded-xl border bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-none xl:w-1/2 xl:p-12 2xl:w-[750px]">
                <button
                    onClick={toggleTheme}
                    className="absolute right-12 rounded-full p-2 transition hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {theme ? theme === 'dark' ? <IoSunnyOutline size={24} color="#fff" /> : <IoMoonOutline size={24} /> : ''}
                </button>
                <About />
                <Experience />
                <Projects />
            </section>
        </div>
    );
};

export default Index;
