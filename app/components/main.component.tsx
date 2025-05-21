'use client'
import Image from "next/image";
// import { Historia } from "./historia.component";

export default function Main(){
    return(
    <>
    <main>
        <div className="my-10 bg-[#CC0900]">
            <Image className="w-min h-min m-auto " alt="img2" width={300} height={300} src={`/logo2.jpg`}/>
        </div>
        <div>
            <h1>Ubicación</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, eligendi praesentium. Officiis, tempora sint? Optio similique sint saepe? Ipsa tempore velit qui perspiciatis quos. Ut earum facilis minus et hic!</p>
        </div>
        {/* <Historia/> */}
    </main>
    </>)
}