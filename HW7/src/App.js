
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewArrivals, Promotions, InStockProducts, DeliveryAndPayment, Forums, AboutUs, NotFound  } from './components/Task1'
import { MainPage } from './components/Task2';
import { MainPage2 } from './components/Task3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          {/* <Route path="/" element={<MainPage2 />} > */}
          {/*компонент использует навигацию!*/}
          <Route index element={<NewArrivals />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="in-stock-products" element={<InStockProducts />} />
          <Route path="delivery-and-payment" element={<DeliveryAndPayment />} />
          <Route path="forums" element={<Forums />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;