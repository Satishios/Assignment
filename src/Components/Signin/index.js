import React, {  useRef, useState } from "react";
import user from "./Assignment/assign/user.jpg";


const Signin = () => {
    const [open, setopen] = useState(false);
    const Menus = ["Profile", 'your apps', 'Settings', 'Layout'];

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click',(e)=>{
        if (e.target !== menuRef .current && e.target !== imgRef .current) {
            setopen(false);
        }
    });

    return (
        <div className="h-screen bg-gray-200 flex justify-center pt-14">
            <div className="Relative">
                <img onClick={() => setopen} src={ imgRef} alt="user" className="h-20 w-20
                object-cover border-4 border-gray-400 round"></img>
                {
                    open && (
                        <div ref={menuRef} className="bg-white p-4 w-52 shadow-lg absolute-left-14 top-24">
                        <ul>
                            {
                                Menus.map((menu) => (
                                    <li className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" Key={menu}>{menu}</li>
                                ))
                            }
                        </ul>
                    </div>
                    )}
            </div>
        </div>
    );
}

export default Signin;