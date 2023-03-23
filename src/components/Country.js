import React from 'react';

const Country = (props) => {
     const {area,region,name,flags} = props.country
    return (
        <div  className='country bg-warning'>
            <h2>Area: {area}</h2>
             <h2>Area: {region}</h2>
             <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
            
            
        </div>
    );
};

export default Country;