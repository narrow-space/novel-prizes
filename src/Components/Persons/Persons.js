import React, { useState } from 'react';
import { useEffect } from 'react';
import Details from '../Details/Details';
import Person from '../person/Person';

const Persons = () => {
    const [persons,setPersons]=useState([]);
    const [details,setDetails]=useState([]);


    const handleIncrease=(person)=>{
        // console.log(person);
       
        const newdetails=[...details,person];
        setDetails(newdetails)
        console.log(newdetails);
        

    }
   

    useEffect(()=>{

        fetch('./prize.json')
        .then(res=>res.json())
        .then(data=>setPersons(data))
    },[])
    return (
        <div className="row mx-4 ">
            <div className="col-md-9">
             <div className="row  my-4 ">
           {
                persons.map(person=><Person key={person.key} handleIncrease={handleIncrease}  person={person} ></Person>)
           }

             </div>
            </div>
            <div className="col-md-3">
              <Details details={details}></Details>
            </div>

        </div>
    );
};

export default Persons;