<script setup>
import { useAPI } from "../composables/useAPI";
const { characters, character, getCharacters, quotes } = useAPI();

character.value = "";
quotes.value = "";
</script>

<template>
  <div>
    <ul class="grid grid-cols-3 gap-12">
      <router-link
        class="
          p-4
          bg-pink-100
          rounded-lg
          shadow-2xl
          cursor-pointer
          hover:scale-105
        "
        v-for="character in characters"
        :key="character._id"
        :to="`/character/${character._id}`"
      >
        <div class="mt-16">
          <h3 class="text-xl font-semibold tracking-tight">
            Character Name: {{ character.name }}
          </h3>
          <p>Realm: {{ character.realm }}</p>
          <p>Race: {{ character.race }}</p>
          <p>Gender: {{ character.gender }}</p>
          <p>Birthdate: {{ character.birth }}</p>
          <p>Death: {{ character.death }}</p>
        </div>
      </router-link>
    </ul>
  </div>
  <p>{{ characters }}</p>
</template>
