import React from "react";
import CompanyHome from '../Pages/CompanyHome';
import StudentHome from '../Pages/StudentHome';
import {db} from "../fire"


//import {Router, Routes} from 'react-router-dom';

//import {Route, Link, BrowserRouter as Router,Routes} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Home = (props) => {
    //const navigate = useNavigate();
    //let navigate = useNavigate();
    
    //Form
    const GetCompanyName = (event) =>{
        event.preventDefault();
        const elementsArray = [...event.target.elements]
        
        
        const formData = elementsArray.reduce((accumulator, currentValue) =>{
            if (currentValue.id){
                accumulator[currentValue.id]= currentValue.value;
            }
            return accumulator;
        },{});

       // db.collection("CustomerProfile").add("Google");
        console.log({formData});
    }
   

    return(
        
        <section className="home">
            <nav>
                <h2>Tech Incubator</h2>
                <button onClick={props.handleLogout}>Logout</button>
                
               
            </nav>
            
           
            <div className="Home_Content">
            
                <br></br>
                {
                //<Routes>
                   // <Link to={ROUTES.COMPANYHOME}>
                  //      <li>Company</li>
                 //   </Link>
                //</Routes>
                }
                
                <button onClick={props.ChangetoCompany}>
                    Company  
                </button>
                <button>Student</button>
                 

            </div>
            <div className="Form">
                <h1>Company Profile</h1>
                <br></br>
                <form onSubmit={GetCompanyName}>
                    <input type="text" id="CompanyName" placeholder="Company Name?"></input>
                    <br></br>
                    <input type="file" accept= "image/*" id="CompanyName" placeholder="Upload Logo?"></input>
                    <br></br>
                    <button className="Submit"> Submit</button>
                </form>
            </div>
            


        </section>
        
        
    

    )
};

export default Home;

