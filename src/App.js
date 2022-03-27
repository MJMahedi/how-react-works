import logo from './logo.svg';
import './App.css';
import Device from './Components/Device/Device';
import DeviceDetails from './Components/DeviceDetails/DeviceDetails';
import Watch from './Components/Watch/Watch';
function App() {
  return (
    <div className="App">
      <Device name='Motorola' price="5700"></Device>
      <Watch></Watch>
      
      {/* <Products ></Products> */}
    </div>
  );
}
/* 
const allProducts =  [
 
    { Name : 'Mahedi' , roll : 20 , address : 'Raipur' },
    { Name : 'Hasan' , roll : 30 , address : 'masumpur' }
    
  ] ;
  
  allProducts.map(product => product.Name)

function Products (props){
  
  return (
    <div>
      
      <h2>Product name {props.length} </h2>
    </div>
  )
} */

export default App;
