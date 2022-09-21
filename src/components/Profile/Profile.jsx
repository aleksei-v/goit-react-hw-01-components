import PropTypes from 'prop-types';
import { Box } from "../Box";
import {
    MetaInfoWrapperEl,
    BlackEl,
    ImageBox
} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return <Box
        width="235px"
        ml="auto"
        mr="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="wrapperColor"
        bg="white"
    >
        <Box
            p="20px"
            textAlign="center"
        >
            <ImageBox
                src={avatar}
                width="80"
                alt="User avatar"
            />
            <BlackEl>{username}</BlackEl>
            <p>@{tag}</p>
            <p>{location}</p>
        </Box>

        <Box
        display="flex"
        justifyContent="center"
          bg="background"
        >
            <MetaInfoWrapperEl>
                <BlackEl>Followers</BlackEl>
                <BlackEl>{followers}</BlackEl>
            </MetaInfoWrapperEl>
            <MetaInfoWrapperEl>
                <BlackEl> Views</BlackEl>
                <BlackEl>{views}</BlackEl>
            </MetaInfoWrapperEl>
            <MetaInfoWrapperEl>
                <BlackEl> Likes</BlackEl>
                <BlackEl>{likes}</BlackEl>
            </MetaInfoWrapperEl>
        </Box>
    </Box>

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