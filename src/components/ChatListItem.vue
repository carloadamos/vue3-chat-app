<template>
  <div class="listitem">
    <div class="listitem__avatar">Avatar</div>
    <div class="listitem__content">
      <div class="listitem__content__sender">
        <div class="listitem__content__sender__name">Carlo</div>
        <div class="listitem__content__sender__time">17h</div>
      </div>
      <div class="listitem__content__message-preview">This is my message</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.listitem {
  &__avatar {
    @apply rounded-full bg-red-500;
  }
}
</style>
