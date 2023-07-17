import React, { useState } from 'react';
import { styled } from 'styled-components';


const SectionStyled = styled.section<{ selecionado: boolean }>`
  background: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : 'transparent'};
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 190px;
  height: 90px;
  margin: 20px 0;
  border: 1px solid;
  border-color: ${props =>
    props.selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#EB9B00'};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  header {
    color: ${props => (props.selecionado ? '#ffffff' : '#EB9B00')};
    font-size: 1rem;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selecionado ? '#ffffff' : '#EB9B00')};
  }

  footer {
    color: ${props => (props.selecionado ? '#ffffff' : ' rgba(0, 0, 0, 0.54)')};
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export interface AbGrupoOpcao {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[];
  valorPadrao?: AbGrupoOpcao | null;
  onChange: (opcao: AbGrupoOpcao) => void;
}

export const AbGrupoOpcoes = ({ opcoes, onChange, valorPadrao }: AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null);

  const aoSelecionar = (opcao: AbGrupoOpcao): void => {
    setSelecao(opcao);
    if (onChange) onChange(opcao);
  };

  return (
    <>
      {opcoes.map(opcao => (
        <SectionStyled
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          selecionado={selecao?.id === opcao.id}
        >
          <header>{opcao.titulo}</header>
          <p>
            <strong>{opcao.corpo}</strong>
          </p>
          <footer>{opcao.rodape}</footer>
        </SectionStyled>
      ))}
    </>
  );
};
