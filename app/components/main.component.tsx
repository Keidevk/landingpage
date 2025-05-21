import Image from "next/image";

export default function Main(){
    return(
    <>
    <main className="grid grid-cols-3">
        <Image alt="img2" width={300} height={300} src={``}/>
        <div>
            <h1>Ubicación</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, eligendi praesentium. Officiis, tempora sint? Optio similique sint saepe? Ipsa tempore velit qui perspiciatis quos. Ut earum facilis minus et hic!</p>
        </div>
        <Image alt="img1" width={300} height={300} src={``}/>
    </main>
    </>)
}