import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators, State } from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{ amount }</h1>
      <button type="button" onClick={() => { depositMoney(1000); }}>Deposit</button>
      <button type="button" onClick={() => { withdrawMoney(500); }}>Withdraw</button>
      <button type="button" onClick={() => { bankrupt(); }}>Bankrupt</button>
    </div>
  );
};

export default App;
