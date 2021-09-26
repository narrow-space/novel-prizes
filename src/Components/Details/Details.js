import React from 'react';
import './Details.css'

const Details = (props) => {

    const {details}=props||{};
    let totalsalary=0;
    for(const person of details){
        totalsalary=totalsalary+person.salary;
    }
  
    return (
        <div className="detail">
            <h4><i className="fas fa-user-friends"></i>Total Person Add:{details.length}</h4>
            <h4><i class="fas fa-dollar-sign"></i>Total Salary:{totalsalary}</h4>
            
            
            {
              details.map(detail=> 
                <div className="border-bottom rounded">
                 <p>Name:{detail.name}</p>
                 <img style={{"width":"70px", "clip-path": "circle()"}} src={detail.img} alt="" />
                 </div>
                 
                  
                
                )
          }
            
            
            
          
        </div>
        
    );
};

export default Details;