import React from 'react';
import { styled } from 'styled-components';


export interface AbTagsProps {
    texto: string
}

const TagStyled = styled.div`
    font-family: sans-serif; 
    color: #FFFFFF;
    background: #EB9B00;
    padding: 24px 32px;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
`

export const AbTag = ({texto}: AbTagsProps) => {
    return (
        <TagStyled>
            {texto}
        </TagStyled>
    )
}
