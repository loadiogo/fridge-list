import React from 'react';
import { Container } from './styles';
import plus2 from '../../assets/plus2.svg'
import { Link } from 'react-router-dom';

const Intro = (): JSX.Element => {

  return (
    <Container>
      <span>Para começar a fazer sua lista de compras basta apertar no botão abaixo</span>
      <button 
          type="button"
          className="btn btn-block"          
          data-testid="add-product-button"
          onClick={() => {}}>

          <img src={plus2} alt="plus icon"/>

          <span>Adicionar Item</span>
      </button>
    </Container>
  );
}

export default Intro;