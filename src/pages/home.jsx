import React from "react";
import Header from "../components/header/header";
import Layout from "../components/layout/layout";
import Form from "../components/form/form";
import List from "../components/list/list";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
