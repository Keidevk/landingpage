'use client'
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
    <>
    <header>
        <nav className="grid grid-cols-4 ">
            <Image className="rounded-full" alt="logo" width={100} height={100} src={`/logo1.jpg`}/>
            <Link className="py-10" href={`/historia`}>Historia de la parroquia</Link>
            <Link className="py-10" href={`#`}>Organización</Link>
            <Link className="py-10" href={`#`}>Actividades</Link>
        </nav>
    </header>
    </>)
}