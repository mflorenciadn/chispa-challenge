import React from "react";
import styled from "@emotion/styled";
import Header from "@components/Header";
import { NavItem } from "@interfaces/nav";

type AppLayoutProps = {
  children: React.ReactNode;
  navData: NavItem[];
};

const AppLayout = ({ children, navData }: AppLayoutProps) => {
  return (
    <Container>
      <Header data={navData} />
      {children}
    </Container>
  );
};

export default AppLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #2b2b2b;
  background: #ffffff;
`;
