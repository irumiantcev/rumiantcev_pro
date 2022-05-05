import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects.json';

const Projects = () => (
    <section>
        <h2 className='font-bold text-2xl mb-3'>Projects</h2>

        <div>
            {projects.map((item, index) => (
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
                        <h3 className='font-bold'>{item.title}</h3>
                        <p className='flex flex-wrap gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1'>
                            <span>{item.period}</span>
                            <span>·</span>
                            <a className='flex items-center gap-2 text-blue-600 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-400' href={item.link} target='_blank'><FaExternalLinkAlt /> Show project</a>
                        </p>
                        <p className='whitespace-pre-line text-gray-500 dark:text-gray-400 leading-normal text-sm mt-2'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;