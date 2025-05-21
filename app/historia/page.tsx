'use client'
import Image from "next/image";


export default function Historia(){
    return(
        <>
        <h1 className="text-gray-900 text-2xl text-center font-semibold">Historia</h1>
  

        <div className="mt-4 inline-flex">
            <div className="flex-1">
                <Image alt="imagenhistoria" width={300} height={300} src={`/logo4.jpeg`} className="shadow-xl mt-10"/>
            </div>
            <div className="flex-5 m-auto p-3">
                <p>La Parroquia Santa Lucía en Ciudad Ojeda, Zulia, fue erigida el 19 de mayo de 1977 por el Mons. Marco Tulio Ramírez Roa. Se ubicó junto a la Plaza Bolívar. La fundación de Ciudad Ojeda en sí fue decretada el 19 de enero de 1937 por el presidente Eleazar López Contreras como un asentamiento para los habitantes de Lagunillas de Agua. Aunque la fundación formal fue el 19 de enero, la fecha de fundación que los pobladores fijaron fue el 13 de diciembre, día de Santa Lucía, quien es la santa patrona de la ciudad</p>
                <p>La iglesia Santa Lucía denominada como "Parroquia Eclesiástica de Santa Lucía", es un templo parroquial católico ubicado en el tradicional barrio El Empedrao, ícono cultural del municipio Maracaibo, Zulia. Fue construido en el siglo XIX utilizando el estilo neogótico por iniciativa de un grupo de parroquianos que se reunían desde 1834 en una de sus casas, con la intención de levantar un templo dedicado a la mártir siracusana, hecho que se dio por orden del presidente del Zulia, general Venancio Pulgar, dando inicio a las obras en 1867, y finalizando en 1876; luego, fue completamente reconstruido en el siglo XX por el presbítero José Luis Castellano, un cura que por cincuenta y dos años luchó por su reconstrucción y con el aporte exclusivo de la feligresía.</p>
            </div>
        </div>
        </>
    )
}