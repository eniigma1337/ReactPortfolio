import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Layout />
      <About />
      <Project />
      <Contact />
    </>
  );
}