<script lang="ts" setup>
import GBreathLogo from "~/assets/gbreath-logo.png";
import NoHornyLogo from "~/assets/no-horny-logo.png";
import RocketLaunchesLogo from "~/assets/rocket-launches-logo.png";
import ResistorReaderLogo from "~/assets/resistor-reader-logo.png";
</script>

<template>
  <div
    id="projects"
    class="w-screen min-h-screen sm:p-16 p-4 flex flex-col items-center justify-start gap-8"
  >
    <h2 class="text-3xl font-bold">{{ $t("projects.projects") }}</h2>

    <div
      class="w-full mt-4 grid sm:grid-cols-3 grid-cols-1 gap-4 place-items-stretch justify-items-center"
    >
      <project-card
        title="GBreath"
        :img="GBreathLogo"
        img_alt="GBreath logo"
        :content="$t('projects.gbreath_content')"
        project-url="https://gbreath.netlify.app/"
        code-url="https://github.com/PatoGordo/GBreath/"
      />

      <project-card
        title="NoHorny"
        :img="NoHornyLogo"
        img_alt="NoHorny logo"
        :content="$t('projects.no-horny_content')"
        project-url="https://nohorny.netlify.app/"
        code-url="https://github.com/No-Horny/NoHorny/"
      />

      <project-card
        title="RocketLaunches"
        :img="RocketLaunchesLogo"
        img_alt="RocketLaunches logo"
        :content="$t('projects.rocket-launches_content')"
        project-url="https://rocketlaunches.netlify.app/"
        code-url="https://github.com/PatoGordo/RocketLaunches"
      />

      <project-card
        title="ResistorReader"
        :img="ResistorReaderLogo"
        img_alt="ResistorReader Logo"
        :content="$t('projects.resistor-reader_content')"
        project-url="https://resistor-reader.netlify.app/"
        code-url="https://github.com/PatoGordo/ResistorReader/"
      />
    </div>
  </div>
</template>
