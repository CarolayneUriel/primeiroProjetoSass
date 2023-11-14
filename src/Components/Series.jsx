import React from "react";

import Friends from "../assets/friends.jpg";
import Anne from "../assets/anne.webp";
import TheWitcher from "../assets/the-witcher.webp";
import GOT from "../assets/got.jpg";
import Lioness from "../assets/lioness.jpg";
import Stranger from "../assets/stranger.jpg";

import "../Styles/Style.scss"

export default function Series(){


    return(
        <main>
            <h1>Séries</h1>
            <section>
                <div>
                    <figure>
                        <img src={Friends} alt="poster do série Friends" />
                        <img src={Anne} alt="poster do série A Anne with an E" />
                        <img src={TheWitcher} alt="poster do série The Witcher" />
                        
                    </figure>
                </div>

                <div>
                    <figure>
                        <img src={GOT} alt="poster do série Game of Thrones" />
                        <img src={Lioness} alt="poster do série Operação Lioness" />
                        <img src={Stranger} alt="poster do série Stranger Things" />
                    </figure>
                </div> 
            </section>

        </main>
    )
}