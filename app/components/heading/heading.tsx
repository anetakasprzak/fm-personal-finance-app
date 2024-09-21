import { Heading } from "./heading.styled";

type HeadingProps = {
  children: string;
};

export default function MainHeading(props: HeadingProps) {
  return <Heading>{props.children}</Heading>;
}
