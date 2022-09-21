import PropTypes from 'prop-types';
import {
    TransactionHistoryTable,
    TransactionHistoryThead,
    TransactionHistoryTbodyEl
} from './TransactionHistory.styled';
import { Box } from "../Box";


export const TransactionHistory = ({ items }) => {
    return (
        <Box as="section" px={5} py={6}>
        <TransactionHistoryTable>
            <TransactionHistoryThead>
                <tr>
                    <Box as="th" py={4}>Type</Box>
                    <Box as="th" py={4}>Amount</Box>
                    <Box as="th" py={4}>Currency</Box>
                </tr>
            </TransactionHistoryThead>
                
            <tbody >
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionHistoryTbodyEl key={id}>
                        <Box as="td" p={4} border="1px solid #C0C0C0">{type}</Box>
                         <Box as="td" p={4} border="1px solid #C0C0C0">{amount}</Box>
                         <Box as="td" p={4} border="1px solid #C0C0C0">{currency}</Box>
                    </TransactionHistoryTbodyEl>
                ))}
            </tbody>
        </TransactionHistoryTable>
        </Box>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    )  
}