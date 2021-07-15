import styled from 'styled-components';

export const HomeContainer = styled.div`
 flex-direction: column;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center; 
`

 export const Content = styled.div`
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: center; 
 `

export const input = styled.input`
border: 1px solid #ddd;
border-radius: .25rem 0 0 .25rem;
height: 1.5rem;
padding: 0 .5rem

&:focus,
&:active {
    outLine: none;
    box-shadow: none;
}
`;

export const button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
&:active {
    outLine: none;
    box-shadow: none;
}
`;

export const ErroMsg = styled.span`
   display: block;
   font-size: 0.65
   color: red;
   font-weight: 600;
   margin-top: 1rem;  
  `