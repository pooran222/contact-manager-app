import { COMMENT, CURRENT, FOREGROUND, PURPLE, YELLOW } from "./helpers/Color/Colors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { createContact, getAllContacts, getAllGroups } from "../src/services/contactServices";
        
import { ContactContext } from "./context/ContactContext";

import {EditContact,Navbar,Contacts,ViewContact,AddContact} from "./components";

import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import MyForm from "./components/MyForm";

import { ToastContainer,toast } from "react-toastify";
import _ from 'lodash';
import {confirmAlert} from "react-confirm-alert"
import { deleteContact } from "../src/services/contactServices";
import {useEffect} from "react";
import { useImmer } from "use-immer";

const App = () => {
  
  const [loading, setLoading] = useImmer(false);
  const [contacts, setContacts] =useImmer([]);
  const [filteredContacts, setFilteredContacts] = useImmer([]);
  const [groups, setGroups] = useImmer([]);


  const navigate = useNavigate();

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const createContactForm = async (values) => {
    try {
      setLoading(draft=>!draft);
      const { status ,data} = await createContact(values); 
      if (status === 201) {
       toast.success("مخاطب با موفقیت ساخته شد");
        setContacts((draft) => {
                draft.push(data)}) ;
                setFilteredContacts((draft)=>{draft.push(data)});
        setLoading((prevLoading=>!prevLoading));
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
      setLoading((prevLoading=>!prevLoading));

    }
  };



  const confirmDelete = (contactId, contactFullName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENT,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
            <p style={{ color: FOREGROUND }}>
              مطمئنی که میخوای مخاطب {contactFullName} رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
                toast.success("مخاطب با موفقیت حذف شد")
              }}
              
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            > مطمئن هستم
              <GiConfirmed />
            </button>
            
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              انصراف
              <MdOutlineCancel />
            </button>
          </div>
        );
      },

    });
  };


  const removeContact = async (contactId) => {
    const  contactsBackup = [...contacts];
    try {
      setContacts(draft => contacts.filter(c => c.id !== contactId));
      setFilteredContacts(draft => contacts.filter(c => c.id !== contactId))
      const { status } = await deleteContact(contactId);

      if (status !== 200) {
        setContacts(contactsBackup);
        setFilteredContacts(contactsBackup);
      }
    } catch (err) {
      console.log(err.message);

      setContacts(contactsBackup);
      setFilteredContacts(contactsBackup);
    }
  };


  const contactSearch =_.debounce ((query) => {
    if(!query)
    return 
  setFilteredContacts([...contacts]);
        setFilteredContacts((draft) => draft.filter((c)=> c.fullName.toLowerCase().includes(query.toLowerCase())));
  },1000); 

  
    return (
      
      <ContactContext.Provider value  =
       {{
        loading,
        setLoading,
        setContacts,
        contacts,
        setFilteredContacts,
        filteredContacts,
        groups,
        deleteContact:confirmDelete,
     createContact:createContactForm,
     contactSearch,
      }}>
          <HelmetProvider>
          <div className="App">
          <Helmet>
            <title>مدیریت مخاطبین</title>
            
          </Helmet>
    <ToastContainer rtl={true} position="top-right" theme="colored" />

    <Navbar  /> 
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={Contacts} loading={loading} />}

        />
        <Route path="/contacts/add" element={<AddContact />} />
         <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact  />} />
      </Routes>
    </div>
          </HelmetProvider>

          <MyForm/>
          <hr color="info"></hr>
      </ContactContext.Provider>


      );
};
 
export default App;
