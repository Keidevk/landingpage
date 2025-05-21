'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Header(){
    const refOrg = useRef(null)
    function showPanelOptions(){
        
    }
    return(
    <>
    <header>
        <nav className="grid grid-cols-4 ">
            <Image className="rounded-full" alt="logo" width={100} height={100} src={`/logo1.jpg`}/>
            <Link className="py-10" href={`/historia`}>Historia de la parroquia</Link>
            <div ref={refOrg} onMouseOver={showPanelOptions} className="py-10">
                <ul>
                    <li>Organización</li>
                    
                </ul>
            </div>
            <Link className="py-10" href={`#`}>Actividades</Link>
        </nav>
    </header>
    </>)
}