import React from "react";

import "./style.css";
import Avatar from "../../assets/avatar.png";

export default function PostList() {
  return (
    <div className="container">
      <div className="info">
        <div className="test">
          <div className="image">
            <img src={Avatar} alt="" />
          </div>
          <div className="info-people">
            <h2 className="name">Roosevelt Souza</h2>
            <span className="date">24 Jan 2020</span>
          </div>
        </div>

        <div className="post">
          <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
        </div>
      </div>

      <hr />

      <div className="coments">
        <div>
          <img src={Avatar} alt="" srcset="" />
        </div>
        <div className="data">
          <span className="name">Mateus Guilherme </span>
          <span className="coment">
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos, mas também o salto para a tipografia
            electrónica, mantendo-se essencialmente inalterada.
          </span>
        </div>
      </div>
    </div>
  );
}
