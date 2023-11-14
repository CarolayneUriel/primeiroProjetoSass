import React from "react";

import Universe from "../assets/the-universe.jpg";
import Amy from "../assets/amy.jpg";
import Animais from "../assets/mundo-animal.webp";

import "../Styles/Style.scss"


export default function Documentary(){


    return(
        <main>
            <h1>Documentários</h1>
            <section>
                
                <div>
                    <figure>
                        <img src={Universe} alt="Capa do documentário the universe" />
                        <img src={Amy} alt="Capa do documentário sobre Amy winehouse" />
                        <img src={Animais} alt="Capa do documentário sobre predadores do mundo animal" />
                    </figure>
                </div>
            </section>
            
        </main>
    )
}