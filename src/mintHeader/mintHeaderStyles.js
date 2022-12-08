import styled from 'styled-components';



export const Nav = styled.nav`
    background: #000;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    // margin-top: 90px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    };
`;



export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.img`
    height: 90px;
    border-radius: 40px;
    background: #000;
    border: 0;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 890px) {
        width: 100px;
        height: 10px;
    };

    @media screen and (max-width: 960px) {
        width: 150px;
        height: 15px;
    };

    @media screen and (max-width: 1400px) {
        width: 500px;
        height: 50px;

    }



`;




