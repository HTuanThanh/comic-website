import styled from "styled-components";

export const ButtonWrapper = styled.button`
background-color: ${(props) => ((props.active) ? "#01B4E4" : "none")};;
border-radius: 5px;
border: 0px;
`;

