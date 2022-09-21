import styled from "@emotion/styled";




export const StatisticsTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #fff;
  color: #585c5f;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  border-radius: 6px;
`



export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}