import PropTypes from 'prop-types';
import {
    Description,
    StyledProfileWrapper,
    MetaInfoWrapper,
    MetaInfoWrapperEl,
    BlackEl,
    ImageBox
} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return <StyledProfileWrapper>
        <Description>
            <ImageBox
                src={avatar}
                width="80"
                alt="User avatar"
            />
            <BlackEl>{username}</BlackEl>
            <p>@{tag}</p>
            <p>{location}</p>
        </Description>

        <MetaInfoWrapper>
            <MetaInfoWrapperEl>
                <BlackEl>Followers</BlackEl>
                <span>{followers}</span>
            </MetaInfoWrapperEl>
            <MetaInfoWrapperEl>
                <BlackEl> Views</BlackEl>
                <span>{views}</span>
            </MetaInfoWrapperEl>
            <MetaInfoWrapperEl>
                <BlackEl> Likes</BlackEl>
                <span>{likes}</span>
            </MetaInfoWrapperEl>
        </MetaInfoWrapper>
    </StyledProfileWrapper>

}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    }).isRequired,
}