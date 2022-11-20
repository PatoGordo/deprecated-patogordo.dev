<script lang="ts" setup>
defineProps({
  img: String,
  img_alt: String,
  title: String,
  content: String,
  projectUrl: String,
  codeUrl: String,
});
</script>

<template>
  <div class="project-card">
    <header class="flex flex-row items-center justify-start gap-4">
      <img :src="img" :alt="img_alt" class="w-16 h-16 rounded-full" />
      <h3 class="text-xl font-bold">{{ title }}</h3>
    </header>
    <p class="text-lg">
      {{ content }}
    </p>
    <span class="w-full gap-4 flex flex-row items-stretch justify-between mt-auto">
      <a
        :href="projectUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary w-full"
      >
        {{ $t("projects.see_project") }}
      </a>
      <a
        :href="codeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-outlined w-full"
      >
        {{ $t("projects.see_code") }}
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  @apply bg-[#dedede] rounded-lg flex flex-col items-start justify-start p-4 gap-4 sm:w-[380px] w-full;
  width: min(380px, 100%);
}
</style>
