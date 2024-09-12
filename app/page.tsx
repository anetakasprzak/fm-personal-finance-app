"use client";
import Nav from "./components/nav/nav";
import { Container } from "./page.styled";

export default function Home() {
  return (
    <Container>
      <Nav />
      <div style={{ height: "100vh" }}>hello</div>
    </Container>
  );
}
