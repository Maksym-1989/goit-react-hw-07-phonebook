import React from "react";
import ContactForm from "../contactForm/ContactForm";
import Section from "../section/Section";
import ContactList from "../contactList/ContactList";
import Filter from "../Filter/Filter";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
