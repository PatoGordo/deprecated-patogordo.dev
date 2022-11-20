<script lang="ts" setup>
defineProps({
  title: String,
  data: Object,
});
</script>

<template>
  <div class="project-card">
    <header class="w-full flex flex-row items-center justify-center gap-4">
      <h3 class="w-full text-xl font-bold text-center">{{ title }}</h3>
    </header>
    <div class="w-full grid grid-cols-3 gap-4 place-items-center">
      <div
        v-for="item in data"
        class="flex flex-col items-center justify-center gap-1 font-medium"
      >
        <div
          class="w-16 h-16 p-4 bg-white flex items-center justify-center rounded-md"
          :class="item.bg"
        >
          <iconify-icon :icon="item.icon" width="48"></iconify-icon>
        </div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  @apply bg-[#dedede] rounded-lg flex flex-col items-start justify-start p-4 gap-4 sm:w-[380px] w-full;
  width: min(380px, 100%);
}
</style>
