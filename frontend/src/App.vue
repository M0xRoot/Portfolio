<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <UserSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <LastSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const UserSection = defineAsyncComponent(
  () => import("@/components/UserSection.vue"),
);
const ServicesSection = defineAsyncComponent(
  () => import("@/components/ServicesSection.vue"),
);
const AboutSection = defineAsyncComponent(
  () => import("@/components/AboutSection.vue"),
);
const ExperienceAndSkills = defineAsyncComponent(
  () => import("@/components/ExperienceAndSkills.vue"),
);
const LastSection = defineAsyncComponent(
  () => import("@/components/LastSection.vue"),
);
</script>
