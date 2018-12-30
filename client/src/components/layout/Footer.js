import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white mt-5 p-4 text-center">
                Copyright &copy; {new Date().getFullYear()} MERN Stack
             </footer>
        </div>
    )
}
