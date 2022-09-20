import styled, {keyframes} from 'styled-components'


const bounding = keyframes`
  from {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  to {
    width: 140%;
    height: 140%;
    opacity: 0;
  }
`;

export const ButtonWrapper = styled.div`
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: relative;

    &::before{
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        background-color: rgb(96,217,250);
        animation: ${bounding} 4s 0s ease-in-out infinite;
        border-radius: 50%;
        z-index: 0;
    }

    &::after{
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        background-color: rgb(96,217,250);
        animation: ${bounding} 4s 2s ease-in-out infinite;
        border-radius: 50%;
        z-index: 0;
    }
`

export const ButtonComponent = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgb(22,22,22);
    border: 0px solid black;
    cursor: pointer;
    display: block;
    color: rgb(96,217,250);
    position: relative;
    z-index: 1;

    &:active{
        transform: scale(.92);
    }
`