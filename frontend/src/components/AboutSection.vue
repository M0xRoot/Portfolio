<template>
  <section class="relative text-white mt-20" id="about">
    <!-- Background glow -->
    <div
      class="absolute inset-x-0 top-0 h-64 flex items-start pointer-events-none"
    >
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary to-[#570cac] blur-2xl opacity-20"
      ></div>
    </div>
    <div
      class="relative md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10"
    >
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left mb-8">
          My Education
        </h2>

        <div class="space-y-6">
          <div
            v-for="education in educations"
            :key="education.id"
            class="flex items-center gap-4 md:w-[80%] w-full p-5 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
          >
            <!-- Icon -->
            <IconSchool class="text-primary flex-shrink-0" :size="48" />

            <!-- Text -->
            <div>
              <h3
                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ education.school }}
              </h3>
              <p class="text-gray-300 text-sm">
                {{ education.program }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
        data-aos="flip left"
      >
        <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">
          More
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >About
          </span>
          Me
        </h2>
        <p class="text-base lg:text-lg mt-8 py-8">
          I am a Full-Stack Developer with hands-on experience in building and
          maintaining secure, scalable web applications. My technical expertise
          includes frontend development with Vue 3 and Tailwind CSS, as well as
          backend engineering using Laravel and Django, where I design RESTful
          APIs, implement authentication and authorization mechanisms, and
          optimize relational database architectures. In parallel, I have
          practical experience in web application security and penetration
          testing, enabling me to identify vulnerabilities such as OWASP Top 10
          risks and apply secure coding practices throughout the development
          lifecycle. I focus on clean architecture, performance optimization,
          and security-by-design to deliver production-ready solutions.
        </p>
        <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +12
            </h3>
            <p class="text-sm sm:text-base text-gray-300">projects</p>
          </div>
          <div
            class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3"
          >
            <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
              +2
            </h3>
            <p class="text-sm sm:text-base text-gray-300">years experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { IconSchool } from "@tabler/icons-vue";

const educations = ref([
  {
    id: 1,
    school: "University of Mohamed Khider",
    program: "Computer Science",
  },
  { id: 2, school: "Rising Academy", program: "Cybersecurity" },
  { id: 3, school: "Rising Academy", program: "Software Architecture" },
  { id: 4, school: "GoEncode Academy", program: "Laravel Basics" },
  { id: 5, school: "TestDome", program: "Vue.js" },
  {
    id: 6,
    school: " J.P. Morgan",
    program: "Job Simulation: Software Engineer",
  },
]);
</script>
