import * as React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import About from '../pages/About'
import Author from '../pages/Author'
import Trading from '../pages/Trading'
import TradingIdeas from '../pages/TradingIdeas'
import TechnicalAnalysis from '../pages/TechnicalAnalysis'
import TradingSystem from '../pages/TradingSystem'
import MostRead from '../pages/MostRead'
import LatestPost from '../pages/LatestPost'
import Blockchain from '../pages/crypto/Blockchain'
import Nft from '../pages/crypto/Nft'
import Eth from '../pages/crypto/Eth'
import Altcoins from '../pages/crypto/Altcoins'
import Zk from '../pages/crypto/Zk'
import PrivacyNetworks from '../pages/crypto/PrivacyNetworks'
import GameFinance from '../pages/crypto/GameFinance'
import DataManagement from '../pages/crypto/DataManagement'
import News from '../pages/News'
import UserProfile from '../pages/UserProfile'



const Stack = () => {


  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/Trading" element={<Trading />} />
          <Route path="/Tradingideas" element={<TradingIdeas />} />
          <Route path="/TechnicalAnalysis" element={<TechnicalAnalysis />} />
          <Route path="/TradingSystem" element={<TradingSystem />} />
          <Route path="/MostRead" element={<MostRead />} />
          <Route path="/LatestPost" element={<LatestPost />} /> 
          <Route path="/News" element={<News />} /> 
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/Nft" element={<Nft />} />
          <Route path="/Eth" element={<Eth />} />
          <Route path="/Altcoins" element={<Altcoins />} />
          <Route path="/Zk" element={<Zk />} />
          <Route path="/PrivacyNetworks" element={<PrivacyNetworks />} />
          <Route path="/GameFinance" element={<GameFinance />} />
          <Route path="/DataManagement" element={<DataManagement />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>

      </BrowserRouter>
    </React.Fragment>
  )
}

export default Stack
