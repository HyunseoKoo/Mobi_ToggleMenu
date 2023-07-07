import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Sidebar() {
    const listRef = useRef({});
    const {prod, user} = useParams();
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
        },
    ]);

    useEffect(()=> {
        for(let i=0; i<sideMenu.length; i++) {
            listRef.current[i].style.maxHeight = '0';
        }
    }, [])

    // useMemo(() => {
        
    // }, [prod, user])

    const onClickMenuOpenState = (i, e, menu) => {
        // 리액트 배열 안 특정 객체 값 변경
        let findIndex = sideMenu.findIndex((item) => item.name === e.target.title);
        let copiedMenu = [...sideMenu];

        const style = listRef.current[i].style;

        if(copiedMenu[findIndex].isOpen) {
            console.log(copiedMenu[findIndex].isOpen);
            style.maxHeight = '0';
        } else if (!copiedMenu[findIndex].isOpen) {
            style.maxHeight =  `${listRef.current[i].scrollHeight}px`;
        }

        copiedMenu[findIndex].isOpen = !menu.isOpen;
        setSideMenu(copiedMenu);
    };
      
    return (
        <S.SidebarContainer>
            {sideMenu.map((menu, i)=>(
                <S.MenuItemSection>
                    <S.MenuTitleFlex>
                        <S.MenuTitle>{menu.name}</S.MenuTitle>
                        <S.MenuOpenState title={menu.name} onClick={(e)=>onClickMenuOpenState(i, e, menu)}>{menu.isOpen ? 'close' : 'open'}</S.MenuOpenState>
                    </S.MenuTitleFlex>
                    <S.MenuItemUl isOpen={menu.isOpen} ref={(element) => listRef.current[i] = element}>
                        {menu.children.map((item)=>(
                            <S.MenuItemLink to={`${menu.path}/${item}`}>
                                <S.MenuItem 
                                    key={item.name}
                                    style={{
                                    // "background-color": item === prod || item === user ? 'beige' : 'none',
                                    boxShadow: item === prod || item === user ? "5px 5px 5px gray" : 'none',
                                }}>
                                    {item}
                                </S.MenuItem>
                            </S.MenuItemLink>
                        ))}
                    </S.MenuItemUl>
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
`;

const MenuOpenState = styled.button`
    font-size: 1rem;
`;

const MenuItemUl = styled.ul`
    overflow: hidden;
    transition: max-height 0.3s ease-out;
`;

const MenuItem = styled.li`
    list-style: none;
    padding: 10px 0 10px 10px;
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
    MenuItemUl,
    MenuItem,
    MenuItemLink
}