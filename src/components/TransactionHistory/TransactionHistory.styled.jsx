import styled from "@emotion/styled";



export const TransactionHistoryTable = styled.table`
     table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`
export const TransactionHistoryThead = styled.thead`
    text-transform: uppercase;
    color: #fff;
    background-color: #55bdd6;
`

export const TransactionHistoryTbodyEl = styled.tr`
      background-color: #fff;
  &:nth-of-type(even) {
    background-color: #ecf2f3;
  }
`