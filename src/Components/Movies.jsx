import React from "react";

import Besouro from "../Assets/besouro.png"
import Dungeons from "../Assets/dungeons.jpg"
import mulherRei from "../Assets/mulher-rei.jpg"
import Elementos from "../Assets/elementos.webp"
import Seria from "../Assets/sereia.jpg"
import Selva from "../Assets/selva.jpg"

import "../Styles/Style.scss"

export default function Movies(){


    return(

         <main>
            <h1>Filmes</h1>
            <section>
                <div>
                    <figure>
                        <img src={Besouro} alt="poster do filme Besouro Azul" />
                        <img src={mulherRei} alt="poster do filme A Mulher Rei" />
                        <img src={Dungeons} alt="poster do filme Dungeons & Dragons" />
                        
                    </figure>
                </div>

                <div>
                    <figure>
                        <img src={Elementos} alt="poster do filme Elementos" />
                        <img src={Seria} alt="poster do filme A Pequena Sereia" />
                        <img src={Selva} alt="poster do filme Super Hérois Da selva" />
                    </figure>
                </div> 
            </section>
        </main>
        
    )
}