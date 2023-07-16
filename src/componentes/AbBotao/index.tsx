import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  font-size: 20px;
  color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#ffffff': '#eb9b00'};
  background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#eb9b00': '#ffffff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  cursor: pointer;
  transition: 0.2s;
  ${(props: AbBotaoProps) => props.tipo === 'primario' 
    ? css`
      &:hover {
        background: #b87900;
        border-color: #b87900;
      }
    `
    : css`
      &:hover {
        color: #b87900;
        background: #ffffff;
        border-color: #b87900;
      }
    `
  }
`

export const AbBotao = ({ texto, onClick, tipo = 'primario' }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};