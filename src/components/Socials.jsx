import React from 'react'

const Socials = () => {
    const socials = [
        {
            title: 'Github',
            url: 'https://github.com/bivekk51'
        },
        {
            title: 'HackerRank',
            url: 'https://www.hackerrank.com/profile/nepalbivek08'
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bivek-nepal-080899263/'
        },
        {
            title: 'Leetcode',
            url: 'https://leetcode.com/u/Bivek08/'
        },

    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Socials</h2>
                <ul className="list-disc list-inside">
                    {socials.map((social, index) => (
                        <li key={index} className="mb-2">
                            <a href={social.url} className="text-black-500 underline font-bold" target="_blank" rel="noopener noreferrer">
                                {social.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Socials