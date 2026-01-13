import { motion } from 'framer-motion';
import content from '../data/content.json';

const AboutPage = () => {

    return (
        <div className="max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold mb-4">{content.personal.name}</h1>

                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-8">
                    {content.personal.role} • {content.personal.location}
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-bold mb-4">Who I Am</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {content.about.story}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">What I Do</h2>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.services.map(service => (
                                <div key={service.id} className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
