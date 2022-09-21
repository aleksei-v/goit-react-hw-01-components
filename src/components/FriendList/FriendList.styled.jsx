import styled from "@emotion/styled";


export const FriendListEl = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`
export const FriendStatus = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
   border-radius: 50%;
   background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`

export const FriendName = styled.p`
    color: #2F4F4F;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
`