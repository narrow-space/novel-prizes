import React from 'react';
import './Person.css'

const Person = (props) => {
    const{name,born,age,salary,img,country}=props.person||{};
    return (
        <div className="col-md-4 g-4 ">
            <div className="card card-section person-container">
                <div>
                <img src={img}  alt="..."/>
                </div>
                
                
            
                
  
  <div className="card-body">
    <h5 className="card-title">Name:{name}</h5>
    <p className="card-title">Country:{country}</p>
    <p className="card-text">Born:{born}</p>
    <p className="card-text">Age:{age}</p>
    <p className="card-text">Salary:${salary}</p>
  
    <button onClick={()=>props.handleIncrease(props.person)} className="btn btn-success"><i className="fas fa-search me-3"></i>Show Details</button>
    
    
    
  </div>
  
  <div className="d-flex justify-content-center icon">
  <h3><i class="fab fa-facebook border border-2 p-1 rounded-circle"></i></h3>
  <h3><i class="fab fa-twitter border border-2 p-1 rounded-circle "></i></h3>
  </div>
 
 
  
 
 
 
</div>
        </div>
    );
};

export default Person;