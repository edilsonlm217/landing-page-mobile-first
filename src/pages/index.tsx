import CardVitrine from '../components/CardVitrine';

import styles from '../styles/styles.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.pageContainer}>
      <h1>
        Confira o{' '}
        <span className={styles.test}>plano disponível</span>{' '}
        para o seu negócio
      </h1>

      <div>
        <CardVitrine />
      </div>
    </div>
  );
}
