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

    return (
        <S.SidebarContainer>
            {sideMenu.map((menu)=>(
                <ul>
                    {menu.name}
                    {menu.children.map((item)=>(
                        <li><Link to={`${menu.path}/${item}`}>{item}</Link></li>
                    ))}
                </ul>
            ))}
        </S.SidebarContainer>
    );
}

const SidebarContainer = styled.aside`
    width: 200px;
    height: calc(100vh - 30px);
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
`;

const S ={
    SidebarContainer
}