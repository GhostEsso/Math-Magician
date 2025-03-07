/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Home.css';
import React from 'react';

function Home() {
  return (
    <section className="Homepage">
      <div className="hero-section">
        <h1>Bienvenue sur Math Magicians</h1>
        <p className="tagline">Votre assistant mathématique intelligent</p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Calculatrice Avancée</h2>
          <p>
            Accédez à notre calculatrice intuitive et puissante pour résoudre vos calculs
            mathématiques. Parfaite pour les étudiants, professionnels et tous ceux qui
            ont besoin d'un outil de calcul fiable.
          </p>
        </div>

        <div className="feature-card">
          <h2>Citations Inspirantes</h2>
          <p>
            Découvrez des citations inspirantes de mathématiciens célèbres et de penseurs
            qui ont façonné le monde des mathématiques. Une dose quotidienne de motivation
            et de sagesse mathématique.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <p>
          Math Magicians combine la puissance des mathématiques avec une interface moderne
          et conviviale. Que vous soyez étudiant, enseignant ou professionnel, nos outils
          sont conçus pour répondre à vos besoins quotidiens en calculs et en inspiration
          mathématique.
        </p>
      </div>
    </section>
  );
}

export default Home;
