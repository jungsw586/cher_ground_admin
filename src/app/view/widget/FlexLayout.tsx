import styled from "styled-components";

interface FlexLayoutProps {
  flex_flow?: string;
  width?: string;
  justfy: string;
  align: string;
  margin?: string;
  padding?: string;
}

const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: ${props => props.flex_flow};
  justify-content: ${props => props.justfy};
  align-items: ${props => props.align};
`;

export default FlexLayout;
