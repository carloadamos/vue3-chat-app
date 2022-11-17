<script setup lang="ts">
import ChatListItemVue from "./components/ChatListItem.vue";
import { onMounted } from "vue";

onMounted(() => {
  const ws = new WebSocket("ws://localhost:3333");

  ws.addEventListener("open", () => {
    console.log("We are connected");
    ws.send("Hello from Frontend");
  });
});
</script>

<template>
  <ChatListItemVue />
  <div class="font-sans">
    Hello from App.vue
  </div>
</template>

<style scoped>
</style>
