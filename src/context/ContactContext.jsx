import { createContext } from "react";


export  const ContactContext= createContext({
    loading:false,
    setLoading:()=>{},
    setContacts:()=>{},
    contacts:[],
    setFilteredContacts:()=>{},
    filteredContacts:[],
    contactQuery:{},
    groups:[],
    deleteContact:()=>{},
    updateContact:()=>{},
    createContact:()=>{},
    contactSearch:()=>{},
    }
);
