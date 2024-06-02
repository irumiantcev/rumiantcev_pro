import Image from 'next/image';

import experience from '../data/experience.json';

export const Experience = () => (
    <section className="mb-12 border-b pb-10 dark:border-gray-700">
        <h2 className="mb-3 text-2xl font-bold">Experience</h2>

        {experience.map((item, index) => (
            <div key={index} className="flex flex-row items-start gap-5 border-b px-2 py-5 last:border-0 last:pb-0 dark:border-gray-700">
                <div className="relative flex h-10 w-10 shrink-0">
                    <Image src={item.img} fill className="rounded-md" alt={item.title} />
                </div>

                {item.experience ? (
                    <div className="w-full">
                        <h3 className="mb-1 font-bold">{item.title}</h3>
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{item.location}</p>

                        {item.experience.map((experienceItem, index) => (
                            <div key={index} className="mb-3 border-b pb-3 last:mb-0 last:border-0 last:pb-0 dark:border-gray-700">
                                <h3 className="mb-1 font-bold">{experienceItem.position}</h3>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{experienceItem.period}</p>
                                <p className="whitespace-pre-line text-sm leading-7">{experienceItem.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full">
                        <h3 className="mb-1 font-bold">{item.position}</h3>
                        <p className="mb-1 text-sm">{item.title}</p>
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                        <p className="whitespace-pre-line text-sm leading-7">{item.description}</p>
                    </div>
                )}
            </div>
        ))}
    </section>
);
