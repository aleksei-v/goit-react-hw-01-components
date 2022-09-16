import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
    return (
        <section>
            <ul>
                {friends.map(({ avatar, name, isOnline, id}) => (
                    <li key={id}>
                        <span>{isOnline}</span>
                        <img src={avatar} alt="User avatar" width="48" />
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </section>
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