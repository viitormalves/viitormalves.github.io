import React from "react";
import Picture from '../Images/Picture.jpeg'
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header className="header-container">
                <h1 className="h">Seja Bem-Vindo</h1>
                <img src={ Picture } alt='Foto Vítor M. Alves' className="foto-img"/>
                <div className="header-container-2">
                  <h3 className="h">Olá! Eu sou o Vítor Magalhães Alves</h3>
                  <h3 className="h">Estudante de Desenvolvedor Web Full-Stack</h3>
                  <h4>vtr.vma@hotmail.com</h4>
                  <a href="https://www.linkedin.com/in/viitormalves/" target="_blank" rel="noopener noreferrer">LindedIn</a>
                </div>
            </header>
        )
    }
}

export default Header;
