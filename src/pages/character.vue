<script setup>
import { useRoute } from "vue-router";

import { useAPI } from "../composables/useAPI";

const route = useRoute();

const { id } = route.params;

const { character, getCharacter, quotes, getQuotes } = useAPI();

getCharacter(id);
getQuotes(id);
</script>

<template>
  <div
    v-if="character"
    class="py-8 mt-16 text-center bg-pink-50 max-w-md mx-auto rounded-lg"
  >
    <h3 class="text-xl font-semibold tracking-tight">
      Character Name: {{ character.name }}
    </h3>
    <p>Realm: {{ character.realm }}</p>
    <p>Race: {{ character.race }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Birthdate: {{ character.birth }}</p>
    <p>Death: {{ character.death }}</p>
  </div>

  <div v-else>Loading ...</div>
  <div class="mt-8">
    <p
      class="px-4 py-6 my-4 text-xl italic text-center bg-pink-100 rounded-lg"
      v-for="quote in quotes"
      :key="quote._id"
    >
      {{ quote.dialog }}
    </p>
  </div>
</template>
