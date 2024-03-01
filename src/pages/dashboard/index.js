import React, { useEffect } from 'react';
import './styles.css';
import backgroundImg from '../../assets/img/capa para o projeto.svg';
import Menu from '../../componente/Menu';
import imagem from '../../assets/img/xyz.png'; // Ajuste o nome do arquivo conforme necessário
import anime from 'animejs/lib/anime.es.js'; // Importe a biblioteca Anime.js

export default function Dashboard() {
    useEffect(() => {
        anime({
            targets: '.centered-image', // Seleciona o elemento com a classe 'centered-image'
            translateY: [-100, 0], // Animação de translação vertical de -100px para 0px
            opacity: [0, 1], // Animação da opacidade de 0 para 1
            duration: 1000, // Duração da animação em milissegundos
            easing: 'easeInOutQuad', // Tipo de easing (curva de aceleração)
            delay: 500 // Atraso antes do início da animação
        });
    }, []);

    var objPropLogEl = document.querySelector('.js-object-log');

var myObject = {
  prop1: 0,
  prop2: '0%'
}

anime({
  targets: myObject,
  prop1: 50,
  prop2: '100%',
  easing: 'linear',
  round: 1,
  update: function() {
    objPropLogEl.innerHTML = JSON.stringify(myObject);
  }
});

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <h1>página principal</h1>
                <img src={imagem} alt="Imagem" className="centered-image" />
            </div>
        </div>
    );
}
