import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button `
    font-size: 20px;
    color: #fff;
    background: #EB9B00;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background: #B87900;
        border-color: #B87900
    }
`

export const AbBotao = () => {
  return (<BotaoEstilizado>Clique aqui</BotaoEstilizado>);
};


