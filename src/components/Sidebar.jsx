import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Sidebar() {
    const [sideMenu, setSideMenu] = useState([
        {
            name: 'product',
            path: '/product',
            isOpen: false,
            children: [
                '딸기', '바나나', '오렌지'
            ],
        },
        {
            name: 'signUp',
            path: '/signUp',
            isOpen: false,
            children: [
                '고라니', '너구리', '족제비'
            ],
        }
    ]);
    
    const onClickMenuOpenState = (prev) => {
        // setSideMenu({
        //     ...prev, isOpen: !(prev.isOpen)
        // });
    }

    return (
        <S.SidebarContainer>
            {sideMenu.map((menu)=>(
                <S.MenuItemSection>
                    <S.MenuTitleFlex>
                        <S.MenuTitle>{menu.name}</S.MenuTitle>
                        <S.MenuOpenState>{menu.isOpen ? '닫기' : '열기'}</S.MenuOpenState>
                    </S.MenuTitleFlex>
                    {menu.children.map((item)=>(
                        <S.MenuItem><S.MenuItemLink to={`${menu.path}/${item}`}>{item}</S.MenuItemLink></S.MenuItem>
                    ))}
                </S.MenuItemSection>
            ))}
        </S.SidebarContainer>
    );
}

const SidebarContainer = styled.aside`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 200px;
    height: calc(100vh - 30px);
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
`;

const MenuItemSection = styled.ul`
    padding-left: 10px;
    font-size: 1.5rem;
`;

const MenuTitleFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuTitle = styled.div`
    color: darkblue;
    /* border: solid 1px gray; */
`;

const MenuOpenState = styled.div`
    font-size: 1rem;
`;

const MenuItem = styled.li`
    list-style: none;
    padding: 10px 0 10px 10px;
    height: 15px;
    font-size: 1rem;
    &:hover {
        font-weight: bold;
        color: red;
    }
`;

const MenuItemLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const S ={
    SidebarContainer,
    MenuItemSection,
    MenuTitleFlex,
    MenuTitle,
    MenuOpenState,
    MenuItem,
    MenuItemLink
}