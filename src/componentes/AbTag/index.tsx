import React from 'react';
import { styled } from 'styled-components';


export interface AbTagsProps {
    texto: string
}

const TagStyled = styled.div`
    color: #FFFFFF;
    background: #EB9B00;
    font-family: sans-serif; 
    padding: 24px 32px;
    font-weight: 700;
    font-size: 1.4rem;
    display: inline-block;
`

export const AbTag = ({texto}: AbTagsProps) => {
    return (
        <TagStyled>
            {texto}
        </TagStyled>
    )
}
