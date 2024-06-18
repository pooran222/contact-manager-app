import { useState ,useEffect,useRef } from "react";
import  "../App.css";

 const MyForm=()=>{
            const  inputsRef=useRef([]);

            const addRef = element =>{
                if(element && !inputsRef.current.includes(element)){
                    inputsRef.current.push(element);
                }
            }
            useEffect(()=>{
                console.log(inputsRef);
            },[]);
            const handleSubmit = event =>{
                event.preventDefault();
                console.log(`Name:${inputsRef.current[0].value},Email:${inputsRef.current[1].value}}`);
            }
    return(
        <>
        <div className="App container  justify-content-center m-5">
            <h4>controlledComponent</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input ref={addRef} className="m-2" type="text" name="name" id="name"/>
                <br/>
                <label htmlFor="email">Email</label>
                <input ref={addRef} className="m-2" type="email" name="email" id="email"/>
                <br></br>
                <button className="btn btn-success m-3"> Submit</button> 
            </form>
            
        </div>
        </>
    );

 }
 export default MyForm;