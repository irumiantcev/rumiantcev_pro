import Image from 'next/image';
import experience from '../data/experience.json';

export const Experience = () => (
    <section className="mb-12 border-b pb-10 dark:border-gray-700">
        <h2 className="mb-3 text-2xl font-bold">Experience</h2>

        <div>
            {experience.map((item, index) => (
                <div key={index} className="flex flex-row items-start border-b px-2 py-5 last:border-0 last:pb-0 dark:border-gray-700">
                    <div className="inline-flex min-w-[40px]">
                        <Image src={item.img} width="40" height="40" className="rounded-md object-contain" alt={item.title} />
                    </div>
                    <div className="ml-5">
                        <h3 className="font-bold">{item.position}</h3>
                        <p className="mt-1 text-sm">{item.title}</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                        <p className="mt-2 whitespace-pre-line text-sm leading-normal">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
