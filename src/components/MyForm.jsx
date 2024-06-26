import { useEffect,useRef } from "react";
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
           
            
        </div>
        </>
    );

 }
 export default MyForm;