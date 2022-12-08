import styled from 'styled-components';


export const BodyContainer = styled.div`
    color: #000;
    background: #000;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    };
`

export const BodyWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1300px;
    width: 100%;
    // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
    background: #000;
`


export const BodyRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    };
`

export const BodyRowNoColumn = styled.div`
    display: flex;
    align-items: center;
    height: 400px;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 500px;
        flex-direction: column;
    };
`

export const BodyRowNoColumn2 = styled.div`
    display: flex;
    align-items: center;
    height: 600px;
    width: 100%;
    justify-content: center;
    background: #000;
    margin: 0;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    background: #000;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    background: #000;
`

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    margin: 0;
    // padding-bottom: 60px;
    background: #000;
`



export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #dba034;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`

export const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #dba034;
`


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`




export const VidWrapper = styled.video`
    width: 700px;
    background: #000;
    height: 350px;
    max-width: 90%;
    @media screen and (max-width: 1220px) {
        width: 600px;
        height: 300px;
    };

`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

