import React from 'react'

export const Footer = () => {
    // to add style in react
    let footerstyle={
        position: "relative",
        top: "35vh",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-1" style={footerstyle}>
            <p className="text-center">Copyright &copy; MyTodoList.com owns and control byMyBook.inc</p>
        </footer>
    )
}
