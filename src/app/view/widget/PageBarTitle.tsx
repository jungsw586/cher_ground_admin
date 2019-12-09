import React from "react";
import styled from "styled-components";

interface PageBarTitleProps {
  title: string;
}

const PageBarTitleBar: React.FunctionComponent<PageBarTitleProps> = props => {
  return (
    <PageTitleLayout>
      <div className="Large-Web-Title">{props.title}</div>
    </PageTitleLayout>
  );
};

const PageTitleLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  width: 100%;
  height: 82px;
`;
export default PageBarTitleBar;
