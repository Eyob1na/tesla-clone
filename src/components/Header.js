import React,{useState} from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

const [burgerStatus,setBurgerStatus]=useState(false);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            
            
            <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header


const Container=styled.div`
    z-index:10;
    min-height:60px;
    position:fixed;
    padding: 0 20px;
    align-items:center;
    display:flex;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;

`
const Menu=styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    a{
        font-weight:600;
        padding:0 10px;
        flex-wrap:no-wrap;
        text-transform:uppercase;
    }
    @media(max-width:768px){
        display:none;
    }
`

const RightMenu=styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        padding:0 10px;
        margin-right:10px;
        text-transform:uppercase;
    }
`
const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    z-index:16;
    width:300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props=>props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li
    {
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);

        a
        {
            font-weight:600;
        }
        
    }
`
const CustomClose=styled(CloseIcon)`

`
const CloseWrapper=styled.div`
    justify-content:flex-end; 
    display:flex;
`