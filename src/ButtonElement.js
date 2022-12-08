import styled from 'styled-components'
// import {Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom';

// export const Button = styled(Link)`
//     border-radius: 50px;
//     background: none;
//     white-space: nowrap;
//     padding: 12px 40px;
//     color: #dba034;
//     font-size: 16px;
//     outline: none;
//     border: 2px solid;
//     border-color: #dba034;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: all 0.2s ease-in-out;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #dba034;
//         color: #ffffff;
//         transform: scale(1.01);
//     };
// `

export const RouteButton = styled(LinkR)`
    border-radius: 50px;
    background: none;
    white-space: nowrap;
    padding: 12px 40px;
    color: #dba034;
    font-size: 16px;
    outline: none;
    border: 2px solid;
    border-color: #dba034;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #dba034;
        color: #f5f1e7;
        transform: scale(1.01);
    };
`



export const HeaderRouteButton = styled(LinkR)`
    border-radius: 50px;
    background: none;
    white-space: nowrap;
    padding: 12px 40px;
    color: #dba034;
    font-size: 16px;
    outline: none;
    border: 2px solid;
    border-color: #dba034;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #dba034;
        color: #f5f1e7;
        transform: scale(1.01);
    };

    @media screen and (max-width: 960px) {
        padding: 6px 20px;
        font-size: 10px;
    };
`



export const ConnectButton = styled.button`
    border-radius: 50px;
    background: 0;
    white-space: nowrap;
    padding: 12px 30px;
    color: #dba034;
    font-size:  20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: 0;
        color: #dba034;
        transform: scale(1.02);
    };
`


export const ButtonThing = styled.button`
    border-radius: 45px;
    background: ${({primary}) => (primary ? '#2180e2' : '#2180e2')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'white' : 'white')};
    font-size:  ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    // display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#43a0ff' : '#43a0ff')};
        color: white;
        transform: scale(1.02);
    };
`

