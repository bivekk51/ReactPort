import React from 'react'

const Education = () => {
    const education = [
        {
            type: 'Bachelors In Information Management',
            college: 'Mechi Multiple Campus(TU)',
            date: '2022 - present'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl">Education</h2>
                <ul className="list-inside">
                    {
                        education.map((degree, index) => (
                            <li key={index}>
                                <span className="font-bold">{degree.type}</span> | <span>{degree.college}</span> | <span>{degree.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )

}

export default Education