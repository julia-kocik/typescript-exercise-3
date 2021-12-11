import React, { useState, useEffect } from 'react';
//import {userObjBackup} from '../data/data';
//import {accountsObjBackup} from '../data/data';
import axios from 'axios';
import { Account } from './Account';

interface GetUserResponse {
  email: string;
}
interface GetBankAccountsResponse {
  accounts: Array<{
    // Typ number uzyty dla uproszczenia zadania
    balance: number;
  }>;
}

interface UserDetailsViewProps {
  pageNo: number;
}

export const UserDetailsView = (props: UserDetailsViewProps) => {
  // Implementation...
  const [user, setUser] = useState<GetUserResponse | null>(null)
  const [account, setAccount] = useState<GetBankAccountsResponse["accounts"] | undefined>(undefined)
  const [pageNumber, setPageNumber] = useState<number>(props.pageNo);
  useEffect(() => {
    const fetchUser = async () => {
      //użyte mockAPI, gdyby były odpowiednie endpointy powinno być
      //const accountObj = await axios'/api/user'
      const userObj = await axios('https://mocki.io/v1/d053a495-3838-41d3-a5ba-cca3704f1fd1');
      setUser(userObj.data)
    };
    const fetchAccounts = async () => {
      //użyte mockAPI, gdyby były odpowiednie endpointy powinno być
      //const accountObj = await axios'/api/bank-accounts/'
      const accountsObj = await axios('https://mocki.io/v1/aeffce6f-6165-4c8e-a593-d11e29925a9c');
      setAccount(accountsObj.data.accounts)
    };
    const fetchAccountsByPageNo = async () => {
      const URL = `/api/bank-accounts/${pageNumber}`;
      //console.log(URL);
      await axios(URL);
    };

    fetchUser();
    fetchAccounts();
    fetchAccountsByPageNo()
  }, [pageNumber]);
  const removeAccount = (balance: number) => {
    const newAccounts = account?.filter(item => item.balance !== balance);
    setAccount((newAccounts));
  }
  return (
    user === null || account === null ?
    <h1>Loading...</h1>
    :
    <div>
        <h1>User is: {user?.email}</h1>
        {account?.map((item) => (
            <Account balance={item.balance} remove={removeAccount} />
        ))}
        <input
        type="number"
        value={pageNumber}
        min={0}
        max={5}
        onChange={event => setPageNumber(parseInt(event.target.value))}
      />
      <h1>Page Number is: {pageNumber}</h1>
    </div>
  )
};