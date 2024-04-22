import Image from 'next/image';
import { FaAt, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

import skills from '../data/skills.json';

export const About = () => (
    <section className="mb-12 border-b pb-10 dark:border-gray-700">
        <Image src="/images/igor.jpg" width="128" height="128" alt="Igor Rumiantcev" className="rounded-full" />

        <h1 className="mb-1 mt-3 text-3xl font-black">Igor Rumiantcev</h1>

        <h3 className="flex gap-2 text-gray-500 dark:text-gray-400">
            <span>Frontend</span> · <span>React</span> · <span>React Native</span> · <span>Three.js</span> · <span>Belgrade, Serbia</span>
        </h3>

        <div className="mb-12 mt-3 flex flex-wrap gap-3">
            {skills.map((item, index) => (
                <div
                    key={`${item}${index}`}
                    className="rounded-2xl border border-amber-600 bg-amber-600 px-3 py-1 text-sm text-amber-100 dark:bg-transparent dark:text-amber-600"
                >
                    {item}
                </div>
            ))}
        </div>

        <h2 className="mb-5 text-2xl font-bold">Hi 👋</h2>

        <div className="mb-5">
            <p className="mb-2">
                My name is Igor and I am a dedicated Frontend Developer with a strong passion for Single Page Applications (SPAs) using
                React and Mobile App development with React Native.
            </p>
            <p className="mb-2">
                My expertise extends to the exciting world of 3D computer graphics and animation on the web, where I leverage tools like
                Three.js and GreenSock to bring creative visions to life.
            </p>
            <p>
                Additionally, I possess a solid foundation in PHP. Over the last 6 years, I have cultivated my skills as a FullStack
                Developer, focusing predominantly on frontend (70%) and backend (30%) development.
            </p>
        </div>

        <div className="flex gap-4">
            <a
                href="https://www.linkedin.com/in/rumiantcev/"
                target="_blank"
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <FaLinkedinIn size={26} />
            </a>
            <a href="https://github.com/irumiantcev" target="_blank" className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <FaGithub size={26} />
            </a>
            <a href="mailto:rumisigor@gmail.com" className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <FaAt size={26} />
            </a>
            <a href="https://t.me/irumiantcev" target="_blank" className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <FaTelegramPlane size={26} />
            </a>
        </div>
    </section>
);
