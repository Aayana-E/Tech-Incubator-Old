import React, { useEffect, useState } from "react";
import CompanyHome from '../Pages/CompanyHome';
import StudentHome from '../Pages/StudentHome';
import {db} from "../database"
import { Route } from "react-router-dom";

//import {Router, Routes} from 'react-router-dom';

//import {Route, Link, BrowserRouter as Router,Routes} from 'react-router-dom';
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Home = (props) => {
    //Fetching
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] =useState([]);
    const [goToCompanyHome, setGoToCompanyHome] = React.useState(false);
    useEffect(()=>{
        const getProfileFromFirebase = [];
        const Profile = db.collection("CustomerProfile").onSnapshot((querySnapshot)=> {
            querySnapshot.forEach((doc) => {
                getProfileFromFirebase.push({...doc.data(), 
                //    key: doc,id, 
                })
                
            });
            setPosts(getProfileFromFirebase);
            setLoading(false);
        });
        return ()=> Profile();
    }, []);
    
    if (loading){
        return <h1>Loading Company Profiles</h1>;
       
    }
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

       db.collection("CustomerProfile").add({formData});
       db.collection("CustomerProfile").add({formData});
        console.log({formData});
    }


    //const [goToCompanyHome, setGoToCompanyHome] = React.useState(false);

    if (goToCompanyHome){
        return <Route><Navigate to = "/CompanyHome"></Navigate></Route>;
    }

   // const ChangetoCompany = (event) =>{
   //     setGoToCompanyHome =true;
    //    
    //    console.log("Company Page")
    //}
   

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
                
                <button onClick={()=> {
                    setGoToCompanyHome(true);
                    }}>
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
                    <input type="file" accept= "image/*" id="Logo" placeholder="Upload Logo?"></input>
                    <br></br>
                    <button className="Submit"> Submit</button>
                </form>
            </div>
            
            {//Show Data
            }
            <div className="Company Info">
                <h1>Company Profiles</h1>
                {posts.length > 0 ? (
                    posts.map((post)=> 
                        <div key={post.key}>{post.Profile} </div>))
                    :(
                        <h1>No Profiles (Check again later)</h1>
                    )
                    
                };
            </div>
            
            


        </section>
        
        
    

    )
};

export default Home;

