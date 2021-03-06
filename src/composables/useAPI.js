import { ref } from "vue";
import axios from "axios";

const characters = ref();
const character = ref();
const quotes = ref();

const api = axios.create({
  baseURL: "https://the-one-api.dev/v2/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export const useAPI = () => {
  const getCharacters = async () => {
    const response = await api.get("character");
    characters.value = response.data.docs;
  };

  const getCharacter = async (id) => {
    const response = await api.get(`character/${id}`);
    character.value = response.data.docs[0];
  };

  const getQuotes = async (id) => {
    const response = await api.get(`character/${id}/quote`);
    quotes.value = response.data.docs;
  };

  getCharacters();

  return {
    characters,
    character,
    quotes,
    getQuotes,
    getCharacters,
    getCharacter,
  };
};
