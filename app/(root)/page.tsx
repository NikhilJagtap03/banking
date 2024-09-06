import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
const loggedIn = { firstName: 'Nikhil', lastName: 'Jagtap', email:'nikhilv.jagtap2003@gmail.com'};

  return (
    <div>
      <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type='greeting' 
              title='Welcome' 
              user={loggedIn?.firstName || 'Guest'}
              subtext='Access and manage your account and transaction efficiently.' 
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={2750.35}  
            />
          </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{},{}]}/>
      </section>
    </div>
  )
}

export default Home
