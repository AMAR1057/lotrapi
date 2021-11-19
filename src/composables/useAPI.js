import { ref } from "vue";
import axios from "axios";

const characters = ref();

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

  getCharacters();

  return { characters, getCharacters };
};
