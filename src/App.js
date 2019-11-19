import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user';
import stats from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="Upload Stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory transProps={transactions} />
  </div>
);

export default App;
