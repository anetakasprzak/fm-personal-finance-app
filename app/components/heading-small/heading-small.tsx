import { HeadingSmall } from "./heading-small.styled";

type HeadingSmallProps = {
  children: string;
};

export default function SmallHeading(props: HeadingSmallProps) {
  return <HeadingSmall>{props.children}</HeadingSmall>;
}
