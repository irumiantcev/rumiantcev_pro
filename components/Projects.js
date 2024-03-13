import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects.json';

export const Projects = () => (
    <section>
        <h2 className="mb-3 text-2xl font-bold">Projects</h2>

        <div>
            {projects.map((item, index) => (
                <div key={index} className="flex flex-row items-start border-b px-2 py-5 last:border-0 last:pb-0 dark:border-gray-700">
                    <div className="inline-flex min-w-[40px]">
                        <Image src={item.img} width="40" height="40" className="rounded-md object-contain" alt={item.title} />
                    </div>

                    <div className="ml-5">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="mt-1 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
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
                        <p className="mt-2 whitespace-pre-line text-sm leading-normal text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                        <p className="mt-4 whitespace-pre-line text-sm leading-normal text-gray-500 dark:text-gray-400">
                            Skills:{' '}
                            {item.skills.map((skill, index) => (
                                <span
                                    className='mr-1 after:ml-1 after:content-["·"] first:ml-1 last:mr-0 last:after:ml-0 last:after:content-none'
                                    key={`${skill}${index}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
