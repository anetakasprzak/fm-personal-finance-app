import { ReactNode } from "react";
import {
  ContainerBox,
  HeadingSmall,
  SeeDetailsBox,
  LinkBox,
  HeadingLinkBox,
} from "./container.styled";
import Link from "next/link";
import Image from "next/image";

type ContainerProps = {
  children: ReactNode;
  heading: string;
  href: string;
  linkText: string;
};

export default function Container({
  children,
  heading,
  href,
  linkText,
}: ContainerProps) {
  return (
    <ContainerBox>
      <HeadingLinkBox>
        <HeadingSmall>{heading}</HeadingSmall>
        <SeeDetailsBox>
          <LinkBox>
            <Link href={href}>{linkText}</Link>
          </LinkBox>
          <Image
            src="/static/images/icon-caret-right.svg"
            width={4}
            height={4}
            alt="arrow icon"
          />
        </SeeDetailsBox>
      </HeadingLinkBox>
      {children}
    </ContainerBox>
  );
}
