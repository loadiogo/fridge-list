import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 136px 570px;

  span {
    font-size: 48px;
    font-weight: 900;
    color: #FFF;
  }
  
  button {
    width: 679px;
    background: #22577A;
    color: #FFF;
    border: 0;
    border-radius: 20px;
    margin-top: auto;
    padding: 1rem;
    flex-direction: row;
    

    img {
      padding-right: 1rem;
    }

    span {
      flex: 1;
      padding-left: 1rem;
      text-align: center;
      font-weight: bold;
    }
  }
`;
