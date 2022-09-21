import PropTypes from 'prop-types';
import { StatisticsTitle } from './Statistics.styled';
import { Box } from "../Box";
import { getRandomHexColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
   
    return (
        <Box p={5} width="260px" ml="auto" mr="auto">

            {title && <StatisticsTitle>{title}</StatisticsTitle>}
        
            <Box as="ul" display="flex">
                {stats.map(({ id, label, percentage }) => (
                    <Box as="li" p={3} borderRadius={3} key={id} bg={getRandomHexColor()}>
                        <Box as="p" color="white">{label} </Box>
                        <Box as="p" color="white">{percentage}%</Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    )
};

