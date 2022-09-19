import styled from "@emotion/styled";


export const StatisticsWrapper = styled.section`
    padding: 50px;
    width: 260px;
    margin-left: auto;
    margin-right: auto;
`

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
export const StatisticsList = styled.ul`
    display: flex;
`
export const StatisticsEl = styled.li`
padding: 10px;
background-color: ${getRandomHexColor};
border-radius: 6px;
`
export const MetaInfo = styled.span`
 color: white;
`


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}