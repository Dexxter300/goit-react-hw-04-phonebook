import css from './list.module.css';

export const List = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <span className={css.contactText}>
              {contact.name}: {contact.number}
            </span>
            <button
              className={css.itemBtn}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
