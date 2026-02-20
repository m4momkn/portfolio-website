import content from '../data/content.json';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ProjectsPage = () => {
    const projects = content.projects;

    return (
        <div className="max-w-5xl">
            <SEO
                title="Projects"
                description="Explore Mahmoud Elkady's automation projects — from AI-powered workflows to custom business integrations."
            />
            <div className="animate-fade-in-up">
                <h1 className="text-4xl font-bold mb-2">Projects</h1>
                <p className="text-gray-600 mb-12">Playground - Small MVP to Production Apps</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <Link to={`/projects/${project.id}`} key={project.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group block">
                            <div className="h-48 bg-gray-100 overflow-hidden relative">
                                <img
                                    src={project.image || "https://images.unsplash.com/photo-1664575602276-acd073f104c1?fit=crop&w=500&h=300"}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>

                                <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors cursor-pointer">
                                        View Details
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
