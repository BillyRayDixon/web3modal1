import styled from 'styled-components';
// import { Link } from 'react-scroll'

export const ScrollContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    flex-direction: column;
    align-text: center;
`

export const HeroH1 = styled.h1`
    color: #dba034;
    font-size: 48px;
    text-align: centre;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #dba034;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 15px;

    
`

export const logoWrapper = styled.div`
    justify-content: center;
    align-items: center;
`

export const TopLine = styled.p`
    color: black;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transofmr: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1;
    font-weight: 600;
    color: #dba034;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`

export const Heading2 = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 30px;
    line-height: 1;
    color: #dba034;
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #dba034;
`

export const MintInfo = styled.div`
    padding-top: 30px;
    background: #000;
    justify-content: center;
    align-items: center;
    height: 1300px;
    flex-direction: column;
    align-text: center;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
        height: 2700px;
    };
`

export const Bod = styled.div`
    background: 0;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
        height: 1000px;
    };
`

export const BodyColumn1 = styled.div`
    flex-direction: column;
    justify-content: flex;
    align-items: center;
    display: flex;
    padding: 0 15px;
    grid-area: col1;
    background: #000;
    height: 1900px;

    @media screen and (max-width: 768px) {
        height: 1400px;
    };
`



export const BodyColumn2 = styled.div`
    flex-direction: column;
    justify-content: flex;
    align-items: center;
    display: flex;
    padding: 0 15px;
    grid-area: col2;
    background: #000;
    height: 1900px;
`

export const BodyColumn3 = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 15px;
    grid-area: col1;
    background: #000;
    // height: 800px;
`

export const BodyColumn4 = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 15px;
    grid-area: col1;
    background: #000;
    height: 1000px;

    @media screen and (max-width: 800px) {
        height: 400px;
    };
`

export const BodyColumn5 = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 15px;
    grid-area: col2;
    background: #000;
    height: 1000px;

    @media screen and (max-width: 800px) {
        height: 600px;
    };
    
`

export const GifSpacer = styled.div`
    height: 50px;
`


export const GifWrapper = styled.div`
    justify-content: center;
    align-items: center;

`

export const NftGif = styled.img`
    height: 750px;
    width: 750px;
    background: white;


    @media screen and (max-width: 800px) {
        height: 600px;
        width: 600px;
    }

    @media screen and (max-width: 650px) {
        height: 400px;
        width: 400px;
    }

    @media screen and (max-width: 650px) {
        height: 400px;
        width: 400px;
    }

    @media screen and (max-width: 440px) {
        height: 350px;
        width: 350px;
    }

    @media screen and (max-width: 420px) {
        height: 300px;
        width: 300px;
    }

    @media screen and (max-width: 280px) {
        height: 150px;
        width: 150px;
    }
`

// function blinkingEffect() {
//     return keyframes`
//       50% {
//         opacity: 0;
//       }
//     `;
//   }

// export const AnimatedComponent = styled(Link)`
//     animation: ${blinkingEffect} 1s linear infinite;
//     max-width: 440px;
//     margin-bottom: 35px;
//     font-size: 18px;
//     line-height: 24px;
//     color: #7b2056;
//     text-align: center;
//     cursor: pointer;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #000;
//         color: #dba034;
        
//     };

    
// `


export const SpacerOne = styled.div`
  height: 50px;
`

export const BodyLogo = styled.img`
  height: 50px;
  background: #000;
`


export const BorderSpacer = styled.img`
  height: 2px;
  width: 100%;
  background: #dba034;
`

export const FiftySpacer = styled.div`
  height: 50px;
  background: 0;
  width: 100%;
`

export const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`




