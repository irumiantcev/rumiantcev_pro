import Image from 'next/image';
import { FaAt, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import skills from '../data/skills.json';

const About = () => (
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
                    className='py-1 px-3 text-sm bg-amber-600 dark:bg-transparent border border-amber-600 text-amber-100 dark:text-amber-600 rounded-2xl'
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
            <a href="mailto:rumisigor@gmail.com" className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2'>
                <FaAt size={26} />
            </a>
            <a href="https://t.me/irumiantcev" target='_blank' className='hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2'>
                <FaTelegramPlane size={26} />
            </a>
        </div>
    </section>
);

export default About;