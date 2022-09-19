import PropTypes from 'prop-types';
import {
    TransactionHistoryWrapper,
    TransactionHistoryTable,
    TransactionHistoryThead,
    TransactionHistoryTheadEl,
    TransactionHistoryTbody,
    TransactionHistoryTbodyEl,
    TableCell
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryWrapper>
        <TransactionHistoryTable>
            <TransactionHistoryThead>
                <tr>
                    <TransactionHistoryTheadEl>Type</TransactionHistoryTheadEl>
                    <TransactionHistoryTheadEl>Amount</TransactionHistoryTheadEl>
                    <TransactionHistoryTheadEl>Currency</TransactionHistoryTheadEl>
                </tr>
            </TransactionHistoryThead>
                
            <TransactionHistoryTbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionHistoryTbodyEl key={id}>
                        <TableCell>{type}</TableCell>
                        <TableCell>{amount}</TableCell>
                        <TableCell>{currency}</TableCell>
                    </TransactionHistoryTbodyEl>
                ))}
            </TransactionHistoryTbody>
        </TransactionHistoryTable>
        </TransactionHistoryWrapper>
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