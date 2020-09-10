import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ContactsFilter.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/actions/filter";

const ContactsFilter = () => {
  const contactList = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const inputChangeHandler = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <div className={styles.filterBlock}>
      <CSSTransition
        in={contactList.length > 1}
        classNames={slideIn}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <input
          type="text"
          onChange={inputChangeHandler}
          className={styles.input}
          placeholder="Find contacts by name"
        />
      </CSSTransition>
    </div>
  );
};

export default ContactsFilter;
