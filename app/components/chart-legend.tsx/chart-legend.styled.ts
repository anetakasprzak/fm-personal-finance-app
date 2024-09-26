import { CSSProperties } from "react";
import styled from "styled-components";

export const BudgetEl = styled.div<{ borderColor: CSSProperties["color"] }>`
  border-left: 5px solid ${(props) => props.borderColor};
`;
