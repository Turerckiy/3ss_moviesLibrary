import styled from "styled-components";

// $colors: {
//   lightGrey: 227, 227, 227;
//   White: 255, 255, 255, 1;
//   DarkBlue: 3, 37, 65, 1;
//   LightGreen: 30, 213, 16, 1;
//   LightBlue: 1, 180, 228, 1;
// }
// const DarkBlue = "227, 227, 227, 1";
export const ComponentWrapper = styled.div`
  margin-bottom: 2rem;
`;
const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1440px;
  display: ${(props) => props.display};
  align-items: center;
`;
export const Container = (props) => {
  return <StyledContainer {...props} />;
};
// export const ExternalLink = (props) => {
//   return <StyledContainer {...props} />;
// };

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
`;
