import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { CURRENT, ORANGE, PINK } from "../../helpers/Color/Colors";


const Contacts = () => {
  const {loading,deleteContact,filteredContacts}=useContext(ContactContext);
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-end">
                <Link
                  to={"/contacts/add"}
                  className="btn"
                  style={{ backgroundColor: PINK ,color: "#f3e5f5",margin:"3.5rem"}}
                >
                  ساخت مخاطب جدید
                  <i className="fas fa-plus mx-2 text-light"/>
                </Link>
              </p>
            </div>
          </div>
        </div> 
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {filteredContacts.length > 0 ? (
             filteredContacts.map((c) => (
                <Contact
                  key={c.id}
                  deleteContact={() => deleteContact(c.id, c.fullName)}
                  contact={c}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENT}}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  مخاطب یافت نشد ...
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="پیدا نشد"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
