import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Index/Main";
import Service from "./pages/service/service";
import Events from "./pages/Events/Events";
import Products from "./pages/Products/Products";
import Coupons from "./pages/Coupons/Coupons";
import Blogs from "./pages/Blogs/Blogs";
import Community from "./pages/Community/Community";
import Allinone from "./pages/Allinone/Allinone";
import Profile from "./pages/Profile/Profile";
import Myprofile from "./pages/Myprofile/Myprofile";

import Alllisting from "./pages/Myprofile/All_listing/Alllisting";
import Dashboard from "./pages/Myprofile/Dashboard/Dashboard";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Main/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Coupons" element={<Coupons/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/Community" element={<Community/>} />
          <Route path="/Allinone" element={<Allinone/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Myprofile" element={<Myprofile/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        
          <Route path="/Alllisting" element={<Alllisting/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
