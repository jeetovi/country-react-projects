import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import Country from './components/Country/Country';
// import Preson from './components/Person/Preson';
// import './components/Person/Person.css'
 import './components/Country.css'
import Country from './components/Country';


function App() {
  return (
    <div className="App">
      <LodeCountryData></LodeCountryData>
    
    </div>
  );
}
function LodeCountryData(){
  const [countries, setCountry] = useState([]);
  useEffect(() =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => setCountry(data))

  },[]);
  return(
    <div >
      <h1>World All counrty juerny at Home</h1>
      <h2>Countris All: {countries.length}</h2>
      <div className='countris-container'>
      {
      
        countries.map(country =>  <Country
        
          country={country}
          key ={country.cca3}
        
        
        ></Country>)
      }
 </div>
  

 


      {/* <h3>All country:{countries.length}</h3>
      {
      countries.map(country => <Country 
         name={country.name.common} 
         Name={country.name.official} 
         continents={country.continents} 
         flags={country.flags.png}  
         
         
         > </Country>)
      } */}
    </div>
  )
}
// function Country(props){
//   return(
//     <div>
//       <h1>Country Name:{props.name}</h1>
//       <h3>official Name:{props.name}</h3>
//       <h3>continents Name:{props.continents}</h3>
//       <h3>National flags:{props.flags}
// </h3>
//     </div>
//   )
// }
 export default App;




 







