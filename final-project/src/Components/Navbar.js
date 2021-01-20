import React from 'react'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__text'>
                <div className='logo'>
                    <im src="/34.png" alt= "logo"></im>
                </div>
                <ul className='navbar__ul'>
                        <li >
                        <a href='#five' id='six'>Home</a>
                        </li>
                        <li >
                            <a href='#one' id='six'>Menu</a>
                        </li>
                        <li>
                        <a href='#two' id='six'>Shop</a>
                        </li>
                        <li>
                        <a href='#three' id='six'>About Us</a>
                        </li>
                        <li>
                        <a href='#four' id='six'>Contact</a>
                        </li>
                    </ul>

            </div>
        </nav>
    )
}
