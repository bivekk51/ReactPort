import React from 'react'

const Experience = () => {
    const experience = [
        {
            type: ' Software Development Intern',
            company: 'Lishnu Tech',
            date: 'June 2024- Present'
        },
        {
            type: 'Coding Teacher',
            company: 'SID Institute',
            date: 'September 2023- March 2024'
        }
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Experience</h2>
                <ul className="list-disc list-inside">
                    {
                        experience.map((exp, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-bold">{exp.type}</span> | <span>{exp.company}</span> | <span>{exp.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )


}

export default Experience