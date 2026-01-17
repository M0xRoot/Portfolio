<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 cl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">My services</h2>
    </div>
    <div
      class="py-8 xl:px-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      >
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <component
            :is="service.icon"
            class="mx-auto text-primary"
            :size="80"
          />
        </div>
        <div class="text-center">
          <h3
            class="pt-3 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <p
            class="text-gray-200 pt-4 text-sm group-hover:text-white md:text-base"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import {
  IconNetwork,
  IconCode,
  IconDatabaseCog,
  IconShieldLock,
  IconDeviceMobile,
  IconDeviceMobileCog,
} from "@tabler/icons-vue";
const services = ref([
  {
    id: 1,
    icon: IconShieldLock,
    name: "Web Security",
    description:
      "Conducting comprehensive web application security audits and penetration testing, mitigating vulnerabilities, and enforcing secure coding best practices.",
  },
  {
    id: 2,
    icon: IconNetwork,
    name: "Network Security",
    description:
      "Conducting audits and implementing safeguards to secure networks, prevent breaches, and protect sensitive data.",
  },
  {
    id: 3,
    icon: IconCode,
    name: "Frontend Development",
    description:
      "Crafting responsive, high-performance user interfaces with Vue 3 and Vuetify, ensuring seamless UX and modern web standards.",
  },
  {
    id: 4,
    icon: IconDatabaseCog,
    name: "Backend Development",
    description:
      "Designing scalable and secure backend systems with Laravel and Django, optimized database architectures.",
  },
  {
    id: 5,
    icon: IconDeviceMobile,
    name: "App Development",
    description:
      "Building production-ready mobile applications with Ionic Vue for iOS and Android, delivering seamless cross-platform performance and native-like experiences.",
  },
  {
    id: 6,
    icon: IconDeviceMobileCog,
    name: "Production",
    description: "Delivering stable, production-ready applications.",
  },
]);
</script>
