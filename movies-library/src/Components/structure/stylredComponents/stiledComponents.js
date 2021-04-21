import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// $colors: {
//   lightGrey: 227, 227, 227;
//   White: 255, 255, 255, 1;
//   DarkBlue: 3, 37, 65, 1;
//   LightGreen: 30, 213, 16, 1;
//   LightBlue: 1, 180, 228, 1;
// }
// const DarkBlue = "227, 227, 227, 1";

export const ComponentWrapper = styled.div`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top};
  /* display: ${(props) => props.display}; */
  ${({ grid }) => {
    grid &&
      css`
        place-items: center;
      `;
  }}
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: 2rem;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor || "white"};
`;
const StyledContainer = styled.div`
  margin: 0 auto;
  margin-bottom: ${(props) => props.marginBottom};

  padding: 0;
  width: 1200px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content:center;
  flex-direction: ${(props) => props.flexDirection || 'row'};

`;
export const Container = (props) => {
  return <StyledContainer {...props} />;
};

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
`;
export const InnerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
