import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Rajbirin Food BD</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Our Branches</a></li>
                        <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-base-100">
                                <li><a>Mango</a></li>
                                <li><a>Orange</a></li>
                                <li><a>Lemon</a></li>
                                <li><a>Jacfruit</a></li>
                                <li><a>Lichi</a></li>
                                <li><a>Strawberry</a></li>
                            </ul>
                        </li>
                        <li><a>About us</a></li>
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;