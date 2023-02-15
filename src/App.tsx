import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>

        <h1>Conteudo...</h1>
      </main>

      <Footer />

    </div>
  );
}

export default App;