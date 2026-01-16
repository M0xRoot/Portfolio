<template>
  <section class="text-white mt-[4.5rem]" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl" />
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        />
      </span>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16"
    >
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Skills
          </span>
        </h2>
        <div class="mt-8 last:pb-14" v-for="skill in skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.name }}
            </h4>
            <h3 class="text-2xl font-bold text-white">
              {{ skill.width }}
            </h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
            <div
              class="h-1 rounded-full bg-primary transition-all duration-5000 ease-out"
              :style="{ width: skill.currentWidth }"
            />
          </div>
        </div>
      </div>
      <div data-aos="flip-left">
        <h2
          class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8"
        >
          My Experiences
        </h2>
        <div class="space-y-8 py-8" data-aos="fade-left">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
          >
            <div class="w-1/4">
              <IconBriefcase class="stroke-[1.3]" :size="60" />
            </div>
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ exp.role }}
              </h3>
              <p class="text-white">
                {{ exp.company }}
              </p>
              <p class="text-white">
                {{ exp.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { IconBriefcase } from "@tabler/icons-vue";

const skills = ref([
  { id: 1, name: "HTML & CSS", width: "85%", currentWidth: "0%" },
  { id: 2, name: "Python", width: "70%", currentWidth: "0%" },
  { id: 3, name: "JavaScript", width: "80%", currentWidth: "0%" },
  { id: 4, name: "PHP", width: "97%", currentWidth: "0%" },
  { id: 5, name: "Figma", width: "20%", currentWidth: "0%" },
  { id: 6, name: "Linux OS", width: "99%", currentWidth: "0%" },
  { id: 7, name: "Networking", width: "75%", currentWidth: "0%" },
  { id: 8, name: "DevOps", width: "40%", currentWidth: "0%" },
]);

const experiences = ref([
  {
    id: 1,
    role: "Web Development and Security",
    company: "Originova",
    date: "January 2025 - Now",
  },
  {
    id: 2,
    role: "App Development and Production",
    company: "Originova",
    date: "June 2025 - November 2025",
  },
]);

onMounted(() => {
  skills.value.forEach((skill, i) => {
    setTimeout(() => {
      skill.currentWidth = skill.width;
    }, i * 150);
  });
});
</script>
