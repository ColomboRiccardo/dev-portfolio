import {Github, Linkedin, Mail} from "lucide-react";

export const PROJECTS: Project[] = [{
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization, machine learning predictions, and customizable reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Three.js', 'Python'],
    link: '#',
    featured: true
}, {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and advanced search capabilities.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    featured: true
}, {
    id: '3',
    title: 'Social Media Manager',
    description: 'Cross-platform social media management tool with scheduling, analytics, and AI-powered content suggestions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'OpenAI', 'TailwindCSS'],
    link: '#',
    featured: true
}];
export const SMALLPROJECTS: SmallProject[] = [{
    id: '1',
    title: 'Weather Widget',
    description: 'Real-time weather display with animations',
    embedUrl: 'https://example.com/weather',
    link: '#',
    icon: '🌤️'
}, {
    id: '2',
    title: 'Todo App',
    description: 'Minimalist task manager with drag & drop',
    link: '#',
    icon: '✅'
}, {
    id: '3',
    title: 'Color Palette Generator',
    description: 'AI-powered color scheme creator',
    link: '#',
    icon: '🎨'
}, {
    id: '4',
    title: 'Markdown Editor',
    description: 'Live preview markdown editor',
    link: '#',
    icon: '📝'
}];

export const TECHSTACK = ['React', 'TypeScript', 'Next.js', 'Node.js', 'TailwindCSS', 'Three.js', 'PostgreSQL', 'MongoDB', 'Python', 'Docker', 'AWS', 'Figma'];
export const SOCIALBUTTONS = [{icon: Github, link: '#'}, {icon: Linkedin, link: '#'}, {icon: Mail, link: '#'}]