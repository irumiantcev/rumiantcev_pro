import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

import projects from '../data/projects.json';

export const Projects = () => (
    <section>
        <h2 className="mb-3 text-2xl font-bold">Projects</h2>

        {projects.map((item, index) => (
            <div key={index} className="flex flex-row items-start gap-5 border-b px-2 py-5 last:border-0 last:pb-0 dark:border-gray-700">
                <div className="relative flex h-10 w-10 shrink-0">
                    <Image src={item.img} fill className="rounded-md" alt={item.title} />
                </div>

                <div className="w-full">
                    <h3 className="mb-1 font-bold">{item.title}</h3>

                    <p className="mb-2 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{item.period}</span>

                        {item.link && (
                            <>
                                <span>·</span>
                                <a
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-400"
                                    href={item.link}
                                    target="_blank"
                                >
                                    <FaExternalLinkAlt /> Show project
                                </a>
                            </>
                        )}
                    </p>

                    <p className="mb-4 whitespace-pre-line text-sm leading-normal text-gray-500 dark:text-gray-400">{item.description}</p>

                    <div className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                        Skills:{' '}
                        <div className="flex flex-wrap gap-1">
                            {item.skills.map((skill, index) => (
                                <div className='after:ml-1 after:content-["·"] last:after:ml-0 last:after:content-none' key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </section>
);
