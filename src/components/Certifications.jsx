import React from 'react'

const Certifications = () => {
    const certifications = [
        {
            title: 'Software Engineering Intern: HackerRank',
            url: 'https://www.hackerrank.com/certificates/855b7d7c8698'
        },
        {
            title: 'SQL Basics: HackerRank',
            url: 'https://www.hackerrank.com/certificates/687a557c3da3'
        },
        {
            title: 'Python Basics: HackerRank',
            url: 'https://www.hackerrank.com/certificates/46bcfe97386b'
        },
        
        

    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Socials</h2>
                <ul className="list-disc list-inside">
                    {certifications.map((certification, index) => (
                        <li key={index} className="mb-2">
                            <a href={certification.url} className="text-black-500 underline font-bold" target="_blank" rel="noopener noreferrer">
                                {certification.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Certifications