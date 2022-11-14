import React from 'react';
import Img from 'next/image';
import { CaretRight } from 'phosphor-react';
import logo from '../../assets/mkedge-logo.png';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Img src={logo} alt='logo' className={styles.logo} />
      </div>
      <div>
        <a href="#">Já sou cliente</a>
        <CaretRight size={12} weight="bold" className={styles.chevronRight} />
      </div>
    </header>
  );
}

export default Header;
