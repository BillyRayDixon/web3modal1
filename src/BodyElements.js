import styled, {keyframes} from 'styled-components'

export const BodyContainer = styled.div`
    height: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #000;
    color: black;


    
`
export const BodyContainer2 = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #000;
    color: black;
    color: yellow;
    @media screen and (max-width: 630px) {
        height: 1000px;
    }
`
export const MintWrapper = styled.div`
    width: 800px;
    padding-top: 0;
    padding-bottom: 60px;
    background: #000;
    border-radius: 10px;
    height: 480px;
    @media screen and (max-width: 960px) {
        width: 500px;
        height: 840px;
    }

    @media screen and (max-width: 630px) {
        width: 400px;
        height: 830px;
    }
`

export const MintTextWrapper = styled.div`
    
    width: 1000px;
    height: 400px;
    // background: black;
    border-radius: 10px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 960px) {
        grid-template-areas: 'col2' 'col1';
        width: 500px;
    };

    @media screen and (max-width: 630px) {
        width: 380px;
        height: 350px;
    }
`

export const TopLine = styled.p`
    text-align: center;
    color: #dba034;
    background: 0;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    font-size: 2.1em;
    line-height: 1.1;
    font-weight: 600;
    color: #dba034;

    
`

export const Subtitle2 = styled.h2`
    text-align: center;
    margin-bottom: 35px;
    font-size: 1.4em;
    line-height: 24px;
    color: #dba034;

`

export const Column8 = styled.div`
    // margin-bottom: 15px;
    grid-area: col2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 360px;
    background: #000;
    width: 50%

    

    @media screen and (max-width: 630px) {
        width: 95%;
        height: 200px;
    }
    

`

export const BorderSpacer = styled.img`
  height: 2px;
  width: 100%;
  background: #dba034;
`

export const Column8Image = styled.img`
    height: 500px;
    width: 400px;

    @media screen and (max-width: 960px) {
        width: 300px;
        height: 240px;
    }

`

export const Column9 = styled.div`
    margin-bottom: 15px;
    // padding: 0 50px;
    grid-area: col1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 360px;
    background: 0;
    width: 100%;
    @media screen and (max-width: 960px) {
        width: 500px;
    }

    @media screen and (max-width: 630px) {
        width: 400px;
    }
    
    
`

export const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
    background: 0;
    padding: 0px 15px;
`

export const TenSpacer = styled.div`
  height: 10px;
`;

export const StyledRoundButton = styled.button`
  border-radius: 20px;
  border: 1PX;
  background: #dba034;
  padding: 0em 2.5em;
  font-weight: bold;
  font-size: 20px;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MintAmountDiv = styled.div`
    text-align: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background: 0;
    flex: 1;
`

export const MintNumber = styled.h3`
    font-size: 14px;
    color: #dba034;
`

export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
    border-radius: 45px;
    background: #000;
    white-space: nowrap;
    padding: 18px 36px;
    color: #dba034;
    font-size:  16px;
    outline: none;
    border: 2px solid #dba034;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #dba034;
        color: #fff;
        
    };
`


export const InfoTextWrapper = styled.div`
    // width: 800px;
    height: 400px;
    background: 0;
    border-radius: 10px;
    display: flex;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`

export const FiftySpacer = styled.div`
  height: 50px;
  background: 0;
  width: 100%;
`
export const BackgroundContainer = styled.div`
  color: #fff;
  background: #000;
  width: 100%;
  height: 1100px;
  @media screen and (max-width: 768px) {
      padding: 100px 0;
  };
`;

export const HeroOffest = styled.div`
  height: 200px;
  
`




function blinkingEffect() {
    return keyframes`
      50% {
        transform: scale(5);
        opacity: 0.2;
      }
    `;
  }

export const BodyPixel = styled.img`
    animation: ${blinkingEffect} 3s linear infinite;
    width: 10px;
    background: #000;
    height: 10px;
    

`

export const FiftySpacerWide = styled.div`
  height: 380px;
`

export const MintBodyBod = styled.div`
    background: 0;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    width: 60%;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
        height: 900px;
    };
`