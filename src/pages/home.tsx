import React from "react";
import { MainLayout } from "../layouts/main-layout";
import { Header } from "../components/header/header";
import { HomeCards } from "../containers/home/home-cards";

export const HomePage: React.FC = () => {
  return (
    <MainLayout
      children={
        <>
          <Header />
          <HomeCards />
          <div className="h-16" />
        </>
      }
    ></MainLayout>
  );
};
