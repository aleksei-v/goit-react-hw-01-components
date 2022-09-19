import PropTypes from 'prop-types';
import {
    FriendListWrapper,
    FriendListStyled,
    FriendListEl,
    FriendStatus,
    FriendName
} from './FriendList.styled';


export const FriendList = ({friends}) => {
    return (
        <FriendListWrapper>
            <FriendListStyled>
                {friends.map(({ avatar, name, isOnline, id}) => (
                    <FriendListEl key={id}>
                        <FriendStatus isOnline={isOnline}/>
                        <img src={avatar} alt="User avatar" width="48" />
                        <FriendName>{name}</FriendName>
                    </FriendListEl>
                ))}
            </FriendListStyled>
        </FriendListWrapper>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.elementType.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    )
}