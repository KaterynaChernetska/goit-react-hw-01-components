import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {Transaction} from './TransactionHistory/TransactionHistory';
import userInfo from './Profile/user.json';
import data from './Statistics/data.json';
import friendsList from './FriendList/friends.json';
// import transactionInfo from './TransactionHistory/transactions.json';
import transactionInfo from './TransactionHistory/transactions.json';




export const App = () => {
  return (
    <div>
      <Profile user={userInfo} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
      <Transaction transactions={transactionInfo}/>
    </div>
  );
};
