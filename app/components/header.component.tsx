import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
    <>
    <header>
        <nav className="grid grid-cols-5">
            <Image alt="logo" width={32} height={32} src={``}/>
            <div>
                <Link href={`#`}>Historia de la parroquia</Link>
            </div>
            <div>
                <Link href={`#`}>Organización</Link>
            </div>
            <div>
                <Link href={`#`}>Actividades</Link>
            </div>
            <div>
                <Link href={`#`}>Biblia</Link>
            </div>
        </nav>
    </header>
    </>)
}