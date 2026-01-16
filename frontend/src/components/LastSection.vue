<template>
  <section class="text-white mt-20">
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-white">My Latest Projects</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:nt-0">
          <button
            class="hover:text-primary"
            v-for="category in ['all', 'Web Development', 'Mobile App']"
            :key="category"
            @click="() => (selectedCategory = category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <div v-for="project in filteredProjects" :key="project.id">
          <div
            class="h-52 md:h-[24rem] rounded-t-xl relative group"
            :style="{
              backgroundImage: 'url(' + project.image + ')',
              backgroundSize: 'cover',
            }"
          >
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <a
                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                :href="project.webURL"
              >
                <V-icon></V-icon>
              </a>
            </div>
          </div>
          <div
            class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4"
          >
            <h3 class="text-lg font-semibold uppercase lg:text-xl">
              {{ project.title }}
            </h3>
            <p class="text-[#ADB7BE]">{{ project.descriptior }}</p>
          </div>
        </div>
      </ul>
      <div></div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";

const projects = ref([
  {
    id: 1,
    category: "Web Development",
    title: "Project 1",
    description: "qwikly api, qwikly mobile app, qwikly planning",
    technologies: [""],
    gitURL: "",
    webURL: "",
  },
  {
    id: 2,
    category: "App Development",
    title: "Project 2",
    description: "spotter api",
    technologies: [""],
    gitURL: "",
    webURL: "",
  },
  {
    id: 3,
    category: "Cyber security",
    title: "Project 3",
    description: "vulnirablities and script for security",
    technologies: [""],
    gitURL: "",
    webURL: "",
  },
]);

const selectedCategory = ref("all");

const filteredProjects = computed(() => {
  if (selectedCategory.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) =>
      project.category.toLowerCase() === selectedCategory.value.toLowerCase(),
  );
});
</script>
