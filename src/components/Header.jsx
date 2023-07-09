import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    const navigate = useNavigate();
    return (
        <S.HeaderContainer>
            <div onClick={()=>navigate('/')}>MENU-TOGGLE</div>
        </S.HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    padding: 5px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    border-bottom: solid 1px #eaeaea;
    & > div {
        cursor: pointer;
    }
`;

const S = {
    HeaderContainer
};
