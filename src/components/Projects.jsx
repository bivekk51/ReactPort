import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: 'TicTacToe',
            url: 'https://web-tictactoev0.netlify.app/',
            desc: 'Web Game'
        },
        {
            title: 'Ecommerce(Basic)',
            url: 'https://fakeecom.netlify.app/',
            desc: 'Web App'
        },
        {
            title: 'WPM Counter',
            url: 'https://github.com/bivekk51/WPM-counter',
            desc: 'Java CLI(unpublished)'
        },
        {
            title: 'CLI TicTacToe',
            url: 'https://github.com/bivekk51/TicTacToe',
            desc: 'Java CLI(unpublished)'
        },
        {
            title: 'Goods Listing(CRUD)',
            url: 'https://github.com/bivekk51/crudeBIM',
            desc: 'LARAVEL CRUD (unpublished)'
        }
    ];

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Projects</h2>
                <ul className="list-disc list-inside">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-2">
                            <a href={project.url} className="text-black-500 underline font-bold" target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>: <span>{project.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default Projects