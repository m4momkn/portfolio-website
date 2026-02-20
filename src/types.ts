export interface Personal {
    name: string;
    role: string;
    tagline: string;
    email: string;
    location: string;
    social: Record<string, string>;
}

export interface HeroStat {
    label: string;
    value: string;
}

export interface Hero {
    stats: HeroStat[];
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface ProjectCta {
    text: string;
    buttonText: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    tech: string[];
    challenge: string[];
    solution: string[];
    results: string[];
    workflowDiagram: string[];
    cta: ProjectCta;
    image: string;
}

export interface ExpertiseCategory {
    category: string;
    items: string[];
    icon: string;
}

export interface About {
    story: string;
    expertise: ExpertiseCategory[];
}

export interface Contact {
    formEndpoint: string;
    bookingUrl: string;
}

export interface Content {
    personal: Personal;
    hero: Hero;
    services: Service[];
    projects: Project[];
    about: About;
    contact: Contact;
}
