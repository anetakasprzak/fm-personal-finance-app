"use client";
import Nav from "./components/nav/nav";
import { Container } from "./page.styled";

export default function Home() {
  return (
    <Container>
      <div style={{ height: "100vh", order: "2" }}>hello</div>
      <Nav />
    </Container>
  );
}
