<script setup>
import { useRoute } from "vue-router";

import { useAPI } from "../composables/useAPI";

const route = useRoute();

const { id } = route.params;

const { character, getCharacter } = useAPI();
getCharacter(id);
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
</template>
