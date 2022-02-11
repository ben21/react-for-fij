import React from 'react';
import './style.css';

import SubTitle from './SubTitle';
import Title from './Title';
import Counter from './Counter';

export default function App() {
  const name = 'Benjamin';
  const maListe = [
    'Nawfal',
    'Fadel',
    'Giovanna',
    'Olga',
    'Kay',
    'Jean-François',
    'Benjamin',
  ];
  const employees = [
    {
      prenom: 'Fadel',
      salaire: 2000,
    },
    {
      prenom: 'Giovanna',
      salaire: 200,
    },
  ];
  const majeur = true;
  const dansLeSecret = true;

  return (
    <div>
      <Title />
      <h2>{name}</h2>

      <ul>
        {maListe.map((prenom) => (
          <li>{prenom}</li>
        ))}
      </ul>

      {/* Ceci est un commentaire */}

      <ul>
        {employees.map((employee) => (
          <li style={{ color: employee.salaire >= 2000 ? 'green' : 'red' }}>
            {employee.prenom} - {employee.salaire}
          </li>
        ))}
      </ul>
      <h3>{majeur ? 'Bienvenue' : 'Désolé'}</h3>
      <h3>{dansLeSecret && "Le secret est qu'il n'y a pas de secret"}</h3>
      <SubTitle />
      <Counter />
      <Counter />
    </div>
  );
}
