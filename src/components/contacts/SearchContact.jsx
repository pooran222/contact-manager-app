import { PURPLE } from "../../helpers/Color/Colors";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

const SearchContact = () => {
  const {contactSearch}=useContext(ContactContext);
  return (
    <div className="input-group mx-2 w-100" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE}}
      >
        <i className="fas fa-search"style={{color:"#f3e5f5"}} />
      </span>
      <input
        dir="rtl"
        type="text"
        onChange={event=>contactSearch(event.target.value)}
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
