import { useReducer } from 'react';

interface AccountProps {
    balance: number;
    remove: (balance: number) => void;
  }
  
const initialState = {count: 0};

function reducer(state: {count: number}, action: {type: string}) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    default:
      throw new Error();
  }
}


export const Account = (props: AccountProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {balance, remove} = props;
    return (
        <div className='account'>
            <p>Balance: {balance}</p>
            <p>Transactions: {state.count}</p>
            <button className='btn' onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button className='btn' onClick={() => remove(balance)}>Delete</button>
        </div>
    )
}