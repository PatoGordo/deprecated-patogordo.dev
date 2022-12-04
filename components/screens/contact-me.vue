<script lang="ts" setup>
import { AxiosError } from "axios";
import { useI18n } from "vue-i18n";
import { api } from "~/services/api";

const { locale } = useI18n();

const name = ref("");
const email = ref("");
const message = ref("");

const isSending = ref(false);
const sent = ref(false);
const hasError = ref(false);

const handleSendMessage = async () => {
  try {
    isSending.value = true;
    const res = await api.post("/contact/save", {
      origin: "Portfolio",
      name: name.value,
      email: email.value,
      message: message.value,
    });

    name.value = "";
    email.value = "";
    message.value = "";

    isSending.value = false;
    sent.value = true;

    setTimeout(() => {
      sent.value = false;
    }, 3000);
  } catch (error) {
    isSending.value = false;

    const err = (error as AxiosError).response?.data as {
      message: string;
      pt_message: string;
      errors: string;
    };

    if (locale.value === "en") {
      alert(err?.message + "  -  " + JSON.stringify(err?.errors || {}));
    }

    if (locale.value === "pt") {
      alert(err?.pt_message + "  -  " + JSON.stringify(err?.errors || {}));
    }

    hasError.value = true;

    setTimeout(() => {
      hasError.value = false;
    }, 3000);
  }
};
</script>

<template>
  <div
    id="contact-me"
    class="w-screen min-h-screen sm:p-16 p-4 flex flex-col items-center justify-start gap-8"
  >
    <h2 class="text-3xl font-bold">{{ $t("contactme.contact_me") }}</h2>

    <div
      class="w-full h-full mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4 place-items-center justify-items-center"
    >
      <div class="sm:w-4/6 w-3/4">
        <svgs-personal-information />
      </div>

      <div class="sm:w-4/6 w-full">
        <form
          @submit.prevent="handleSendMessage"
          class="w-full flex flex-col items-start justify-start gap-4"
        >
          <div class="form-control">
            <label for="contact-me-name"
              >{{ $t("contactme.your_m") }} {{ $t("contactme.name") }}</label
            >
            <input
              v-model="name"
              id="contact-me-name"
              type="text"
              :placeholder="`${$t('contactme.write_here_your_m')} ${$t(
                'contactme.name'
              )}`"
              required
            />
          </div>
          <div class="form-control">
            <label for="contact-me-email"
              >{{ $t("contactme.your_m") }} {{ $t("contactme.email") }}</label
            >
            <input
              v-model="email"
              id="contact-me-email"
              type="email"
              :placeholder="`${$t('contactme.write_here_your_m')} ${$t(
                'contactme.email'
              )}`"
              required
            />
          </div>
          <div class="form-control">
            <label for="contact-me-message"
              >{{ $t("contactme.your_f") }} {{ $t("contactme.message") }}</label
            >
            <textarea
              v-model="message"
              id="contact-me-message"
              :placeholder="`${$t('contactme.write_here_your_f')} ${$t(
                'contactme.message'
              )}`"
              required
            ></textarea>
          </div>
          <button
            class="btn btn-primary w-full"
            :class="sent ? 'bg-secondary' : hasError ? 'bg-error' : ''"
            :disabled="isSending"
          >
            {{
              isSending
                ? `${$t("contactme.sending")}...`
                : sent
                ? `${$t("contactme.message_sent")}!`
                : hasError
                ? `${$t("contactme.failed_to_send_your_message")}`
                : `${$t("contactme.send_message")}`
            }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
