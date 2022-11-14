import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>{`© ${currentYear} MK-Edge. Todos os direitos reservados.`}</p>
    </footer >
  );
}

export default Footer;
