type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured: boolean;
};
type SmallProject = {
    id: string;
    title: string;
    description: string;
    embedUrl?: string;
    link: string;
    icon: string;
};