<script lang="ts" setup>
const experientWith = [
  {
    icon: "vscode-icons:file-type-vue",
    name: "Vue 3",
  },
  {
    icon: "vscode-icons:file-type-nuxt",
    name: "Nuxt 3",
  },
  {
    icon: "logos:postgresql",
    name: "PostgreSQL",
  },
  {
    icon: "logos:typescript-icon",
    name: "TypeScript",
  },
  {
    icon: "logos:react",
    name: "React",
  },
  {
    icon: "logos:react",
    name: "React Native",
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "TailwindCSS",
  },
  {
    icon: "logos:mysql",
    name: "MySQL",
  },
  {
    icon: "logos:mongodb",
    name: "MongoDB",
  },
  {
    icon: "vscode-icons:file-type-git",
    name: "GIT",
  },
];

const studing = [
  {
    icon: "vscode-icons:file-type-angular",
    name: "Angular",
  },
  {
    icon: "vscode-icons:file-type-docker",
    name: "Docker",
  },
  {
    icon: "logos:redux",
    name: "Redux",
  },
  {
    icon: "logos:nextjs",
    name: "NextJS",
  },
];

const interestedIn = [
  {
    icon: "logos:nestjs",
    name: "NestJS",
  },
  {
    icon: "logos:rust",
    name: "Rust",
  },
  {
    icon: "logos:go",
    name: "Go Lang",
  },
  {
    icon: "logos:aws",
    name: "AWS",
  },
  {
    icon: "logos:cloudflare",
    name: "Cloudflare",
  },
];
</script>

<template>
  <div
    id="skills"
    class="w-screen min-h-screen sm:p-16 p-4 flex flex-col items-center justify-start gap-8"
  >
    <h2 class="text-3xl font-bold">{{ $t("skills.technologies_skills") }}</h2>

    <div
      class="w-full mt-4 grid sm:grid-cols-3 grid-cols-1 gap-4 place-items-stretch justify-items-center"
    >
      <skill-card :title="$t('skills.experient_with')" :data="experientWith" />
      <skill-card :title="$t('skills.studing')" :data="studing" />
      <skill-card :title="$t('skills.interested_in')" :data="interestedIn" />
    </div>
  </div>
</template>
