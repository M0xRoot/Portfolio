<template>
  <div class="bg-[#111827] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <UserSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <ProjectSection />
          <ContactSection />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
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
const ProjectSection = defineAsyncComponent(
  () => import("@/components/ProjectSection.vue"),
);
const ContactSection = defineAsyncComponent(
  () => import("@/components/ContactSection.vue"),
);
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const BackToTop = defineAsyncComponent(
  () => import("@/components/BackToTop.vue"),
);
const LoadingSpinner = defineAsyncComponent(
  () => import("@/components/LoadingSpinner.vue"),
);
</script>
