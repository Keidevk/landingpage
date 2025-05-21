'use client'
import Image from "next/image";


export default function Historia(){
    return(
        <>
        <h1 className="text-gray-900 text-2xl text-center font-semibold mt-3 shadow-lg">Historia</h1>
  

        <div className="mt-10 inline-flex shadow-black shadow-lg w-1/2">
            <div className="flex-1">
                <Image alt="imagenhistoria" width={300} height={300} src={`/logo1.jpg`} className="shadow-md"/>
            </div>
        </div>

        <div className="flex-5 m-auto p-3">
                <p>La Parroquia Santa Lucía en Ciudad Ojeda, Zulia, fue erigida el 19 de mayo de 1977 por el Mons. Marco Tulio Ramírez Roa. Se ubicó junto a la Plaza Bolívar. La fundación de Ciudad Ojeda en sí fue decretada el 19 de enero de 1937 por el presidente Eleazar López Contreras como un asentamiento para los habitantes de Lagunillas de Agua. Aunque la fundación formal fue el 19 de enero, la fecha de fundación que los pobladores fijaron fue el 13 de diciembre, día de Santa Lucía, quien es la santa patrona de la ciudad.</p>
        </div>
        </>
    )
}