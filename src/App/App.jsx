import { Profile } from "../components/Profile/Profile";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Box } from "../components/Box";


export const App = () => {
  return (
    <>

    <Box pt={5} pb={5} bg="wrapperColor">
      <Profile user={user}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} /> 
      <Statistics title="Upload stats" stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
      
      </>
  );
};
