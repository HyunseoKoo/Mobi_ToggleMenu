import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { mockMenu } from '../consts/MenuList';

export default function Sidebar() {
    const listRef = useRef({});

    const location = useLocation();
	const PathNameArr = location.pathname.split('/');
	const currentMenu = PathNameArr[1];

    const {prod, user} = useParams();
    const [sideMenu, setSideMenu] = useState(mockMenu);

    
    
    useEffect(()=> {
        for(let i=0; i<sideMenu.length; i++) {
            // 마운트 됐을 때 모든 메뉴의 토글이 닫혀있도록 하기 위함
            listRef.current[i].style.maxHeight = '0';

            // 추가기능 : [product] 메뉴의 하위 탭을 클릭하면 [sign up] 메뉴 토글이 닫히고, [product] 메뉴 클릭버튼이 close로 바뀌는 로직
            if(sideMenu[i].isOpen === true) {
                let copiedMenu = [...sideMenu];
                copiedMenu[i].isOpen = false;
                setSideMenu(copiedMenu);
            }
        }

        // 메뉴 탭이 변경될 때마다 해당 탭의 메뉴가 슬라이드로 내려오도록 하기 위함
        const newButtonStateMenu = sideMenu.map((menu, idx) => {
            if(menu.children.includes(prod || user)) {
                listRef.current[idx].style.maxHeight =  `${listRef.current[idx].scrollHeight}px`;
                return {...menu, isOpen: true}
            }
            return menu;
        })
        setSideMenu(newButtonStateMenu)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMenu]);

    const onClickMenuOpenState = (idx, e, menu) => {
        let findIndex = sideMenu.findIndex((item) => item.name === e.target.title);
        let copiedMenu = [...sideMenu];
        const style = listRef.current[idx].style;

        if(copiedMenu[findIndex].isOpen) {
            style.maxHeight = '0';
        } else if (!copiedMenu[findIndex].isOpen) {
            style.maxHeight =  `${listRef.current[idx].scrollHeight}px`;
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
                                    key={item}
                                    currentMenu={item === prod || item === user}
                                >
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
    border-right: solid 1px #eaeaea;
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
    padding-bottom: 10px;
`;

const MenuTitle = styled.div`
    color: darkblue;
`;

const MenuOpenState = styled.button`
    font-size: 1rem;
    background-color: white;
    border: none;
    cursor: pointer;
`;

const MenuItemUl = styled.ul`
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    height: 300px;
`;

const MenuItem = styled.li`
    list-style: none;
    padding: 10px 0 10px 10px;
    font-size: 1rem;
    color: gray;
    background-color: ${({ currentMenu }) =>
		currentMenu ? '#FFD1D1' : 'none'};
    color: ${({ currentMenu }) =>
		currentMenu ? 'black' : 'none'};
    &:hover {
        font-weight: bold;
        color: hotpink;
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