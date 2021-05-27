import React from 'react'

export const About = () => {
    let merastyle={
        height:"32vh"
    }
    return (
        <>
        <div>
            this is an about page
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.</p>

            <h1>this is me</h1>
        </div>
        <div style={merastyle}></div>
        </>
    )
}
