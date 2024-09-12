import Image from "next/image";
import data from "../../data/data.json";
import { NavContainer, NavText, NavEl } from "./nav.styled";

export default function Nav() {
  return (
    <NavContainer>
      {data.nav.map((nav) => (
        <NavEl key={nav.id}>
          <Image src={nav.image} alt="nav icon" width={24} height={24} />
          <NavText>{nav.text}</NavText>
        </NavEl>
      ))}
    </NavContainer>
  );
}
