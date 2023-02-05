import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import {Transaction} from '../TransactionHistory/TransactionHistory';
import userInfo from '../Profile/user.json';
import data from '../Statistics/data.json';
import friendsList from '../FriendList/friends.json';
import transactionInfo from '../TransactionHistory/transactions.json';
import {Container} from './App.styled';



export const App = () => {
  return (
    <Container>
      <Profile user={userInfo} />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friendsList} />
      <Transaction transactions={transactionInfo}/>
    </Container>
  );
};
