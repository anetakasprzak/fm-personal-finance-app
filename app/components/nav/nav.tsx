import Image from "next/image";
import data from "../../data/data.json";
import {
  NavContainer,
  NavText,
  NavEl,
  Logo,
  CloseMenuBox,
  CloseMenuText,
  NavFlexWrapper,
} from "./nav.styled";

export default function Nav() {
  return (
    <NavContainer>
      <NavFlexWrapper>
        <Logo
          src="../../../static/images/logo-large.svg"
          alt="logo"
          width={121}
          height={21}
        />
        {data.nav.map((nav) => (
          <NavEl key={nav.id}>
            <Image src={nav.image} alt="nav icon" width={24} height={24} />
            <NavText>{nav.text}</NavText>
          </NavEl>
        ))}
      </NavFlexWrapper>
      <CloseMenuBox>
        <Image
          src="../../../static/images/icon-minimize-menu.svg"
          alt="close menu icon"
          width={24}
          height={24}
        />
        <CloseMenuText>Minimize Menu</CloseMenuText>
      </CloseMenuBox>
    </NavContainer>
  );
}
