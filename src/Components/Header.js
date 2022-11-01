import React from 'react'
import { Navbar } from "flowbite-react";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <Navbar
            class="bg-transparent py-6 px-10"
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand>
                <svg class="w-8 h-8 mr-3" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Movie List
                </span>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="bg-[#0e131f]">
                <Navbar.Link
                    class={`${location.pathname === "/" ? "text-blue-500" : "text-white"} font-bold`}
                    href="/"
                    active={location.pathname === "/"}
                >
                    MOVIE
                </Navbar.Link>
                <Navbar.Link 
                    class={`${location.pathname === "/tv" ? "text-blue-500" : "text-white"} font-bold`}
                    href="/tv"
                    active={location.pathname === "/tv"}
                >
                    TV
                </Navbar.Link>
                <Navbar.Link 
                    class={`${location.pathname === "/favourite" ? "text-blue-500" : "text-white"} font-bold`}
                    href="/favourite"
                    active={location.pathname === "/favourite"}
                >
                    Favourite
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header