import styled from "styled-components";

export const Button = styled.button`
margin: 8px;
padding: 4px 12px;
width: 75px;
border-radius: 4px;
background-color: transparent;
border: none;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

&:hover{
    background-color: #f0f0f0;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const ButtonsContainer = styled.div`
margin-bottom: 18px;
`;