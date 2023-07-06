import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    const navigate = useNavigate();
    return (
        <S.HeaderContainer onClick={()=>navigate('/')}>
            MENU-TOGGLE
        </S.HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    padding: 5px;
    width: 100%;
    height: 30px;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
`;

const S = {
    HeaderContainer
};
