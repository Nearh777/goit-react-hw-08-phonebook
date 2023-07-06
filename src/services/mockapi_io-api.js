import axios from 'axios';


// axios.defaults.baseURL = 'https://649bd2f0048075719236fa98.mockapi.io';

//!  'https://649bd2f0048075719236fa98.mockapi.io/contacts'
export async function axiosGetAddAllContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export async function axiosPostAddContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export async function axiosDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};






//todo ------------------  РЕПЕТА ------------------
// axios.defaults.baseURL = 'http://localhost:4040'; //! OLD

export async function fetchAuthors() {
  const { data } = await axios.get(`/authors?_embed=books`);
  return data;
}

export async function fetchBooks() {
  const { data } = await axios.get(`/books`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}
//todo __________________ РЕПЕТА __________________