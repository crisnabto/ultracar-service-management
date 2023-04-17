import React from 'react';
import styles from '../css/HamburgerMenu.module.css';

function HamburgerMenu() {
  return (
    <nav className={styles.showMenu}>
      <a href="cadastrar">Cadastrar Nova Escola</a>
      <a href="escolas">Listagem de Escolas</a>
      <a href="sobre">Sobre</a>
    </nav>
  );
}

export default HamburgerMenu;
