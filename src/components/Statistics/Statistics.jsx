import PropTypes from 'prop-types';
import {
    StatisticsWrapper,
    StatisticsTitle,
    StatisticsList,
    StatisticsEl,
    MetaInfo
} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
   
    return (
        <StatisticsWrapper>

            {title && <StatisticsTitle>{title}</StatisticsTitle>}
        
            <StatisticsList>
                {stats.map(({id, label, percentage}) => (
                    <StatisticsEl key={id}>
                        <MetaInfo>{label} </MetaInfo>
                        <MetaInfo>{percentage}%</MetaInfo>
                    </StatisticsEl>
                ))}
            </StatisticsList>
        </StatisticsWrapper>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
       }).isRequired
    )
}

