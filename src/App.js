import React from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <>
      <Header />
      <InputForm />
      <ContactsFilter />
      <ContactList />
    </>
  );
}

export default App;
