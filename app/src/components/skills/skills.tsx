import React from 'react'

interface StringProps {
    items: String[]
}

const Skills = (props: StringProps) => {
    return <ul>
        {props.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>

}

export default Skills