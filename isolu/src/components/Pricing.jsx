import React, { Component } from 'react';
import "../styles/pricingCard.css";


class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: null,
    };
  }

  handleOptionClick = (index) => {
    this.setState({ activeOption: index });
  };

  render() {
    const options = [
      {
        backgroundUrl: 'https://blush.design/api/download?shareUri=h5neMsTHAa4bZwkd&c=Hair_0%7Ed5e1d5-0.1%7E150656_Skin_0%7Eef9e89-0.1%7Eef9e89&w=800&h=800&fm=png',
        icon: 'fas fa-walking',
        main: 'Blonkisoaz',
        sub: 'Omuke trughte a otufta',
      },   
        {
        backgroundUrl: 'https://storyset.com/illustration/internet-day/pana/animate?share=70804',
        icon: 'fas fa-walking',
        main: 'Blonkisoaz',
        sub: 'Omuke trughte a otufta',
      },
      // Agrega las otras opciones aquí
    ];

    return(
      <div className='body'>
    <div className="options">
    {options.map((option, index) => (
      <div
        key={index}
        className={`option ${this.state.activeOption === index ? 'active' : ''}`}
        onClick={() => this.handleOptionClick(index)}
        style={{ '--optionBackground': `url(${option.backgroundUrl})` }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className={option.icon}></i>
          </div>
          <div className="info">
            <div className="main">{option.main}</div>
            <div className="sub">{option.sub}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
  </div>
);
  }
}
export default Pricing;