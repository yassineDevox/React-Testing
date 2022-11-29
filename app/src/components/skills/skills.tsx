import React, { useState } from 'react'

interface StringProps {
    items: String[]
}

const Skills = (props: StringProps) => {

const [logged,loggedIn] = useState(false)
return <div>
    { logged ? <button>Start Learning 😇</button>:<button>login ⚠️</button> }
   <ul>
        {props.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul> 
</div>

    
}

export default Skills