import PropTypes from 'prop-types';
import {
    FriendListEl,
    FriendStatus,
    FriendName
} from './FriendList.styled';
import { Box } from "../Box";



export const FriendList = ({friends}) => {
    return (
        <Box as="section" p={5} width="200px" ml="auto" mr="auto">
            <Box as="ul" display="flex" flexDirection="column">
                {friends.map(({ avatar, name, isOnline, id}) => (
                    <FriendListEl key={id}>
                        <FriendStatus isOnline={isOnline}/>
                        <img src={avatar} alt="User avatar" width="48" />
                        <FriendName>{name}</FriendName>
                    </FriendListEl>
                ))}
            </Box>
        </Box>
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