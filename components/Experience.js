import Image from 'next/image';
import experience from '../data/experience.json';

const Experience = () => (
    <section className='border-b dark:border-gray-700 pb-10 mb-12'>
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
);

export default Experience;