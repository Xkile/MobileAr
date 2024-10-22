import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all components
import SignUp from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Forgot from './Components/ForgotPasswrod/Forgot';
import Market from './Components/MarketList/Market';
import Ratepage from './Components/Rate/Ratepage';
import Product from './Components/Product/Product';
import ShoppingCart from './Components/Cart/ShoppingCart'; 
import Payment from './Components/Payment/Payment';
import Address from './Components/Address/Address';
import Confirmation from './Components/Confirmation/Confirmation';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define all Routes */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/market" element={<Market />} />
          <Route path="/rate" element={<Ratepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/address" element={<Address />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
