import React from 'react';

class MissionCard extends React.Component {
  render() {
    const {name, year, country, destination} = this.props
    return (
      <div data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    )
  }
}

export default MissionCard