import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline="Planetas" />
        <PlanetCard planetName="Terra" />
      </div>
    );
  }
}

export default App;
