import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import popIn from "../../utils/transitions/pop.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncDeleteContact,
  asyncSetContactList,
} from "../../redux/actions/contacts";
import { get, save } from "../../utils/storage";
import {
  constactsSelector,
  errorSelector,
  filteredContactSelector,
  loaderSelector,
} from "../../redux/selectors";
import LoaderSection from "../Loader/Loader";
import Modal from "../Modal/Modal";
import Error from "../Error/Error";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => constactsSelector(state));
  const filteredContacts = useSelector((state) =>
    filteredContactSelector(state)
  );
  const loader = useSelector((state) => loaderSelector(state));
  const error = useSelector((state) => errorSelector(state));

  const onDelete = (id) => {
    dispatch(asyncDeleteContact(id));
  };

  useEffect(() => {
    dispatch(asyncSetContactList(get("contacts")));
  }, [dispatch]);

  useEffect(() => {
    save("contacts", contactList);
  }, [contactList]);

  return (
    <>
      {loader && (
        <Modal>
          <LoaderSection />
        </Modal>
      )}
      {error && (
        <Modal>
          <Error />
        </Modal>
      )}
      <CSSTransition
        in={!contactList.length}
        timeout={250}
        classNames={slideIn}
        mountOnEnter
        unmountOnExit
      >
        <p>Phonebook is empty</p>
      </CSSTransition>

      <TransitionGroup component="ul" className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <CSSTransition key={contact.id} classNames={popIn} timeout={250}>
            <li className={styles.contactListItem}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.number}>{contact.number}</span>
              <button type="button" onClick={() => onDelete(contact.id)}>
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
