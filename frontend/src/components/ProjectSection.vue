<template>
  <section class="text-white mt-20" id="projects">
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <div class="flex items-center">
          <h2 class="text-4xl font-bold text-white">My Latest Projects</h2>
        </div>
        <div
          class="flex mb-4 space-x-4 mt-5 md:nt-0 relative group rounded-lg w-50 overflow-hidden"
        >
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            class="pointer-events-none w-8 h-8 absolute right-0 -rotate-45 stroke-primary top-1.5 group-hover:rotate-0 duration-300"
          >
            <path
              stroke-width="4"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
              class="svg-stroke-primary"
            ></path>
          </svg>
          <select
            v-model="selectedCategory"
            class="appearance-none border-primary-50 relative text-primary ring-0 outline-none border text-sm font-bold rounded-lg block w-full p-2.5"
          >
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.id"
              class="bg-[#111a3e] text-white font-semibold"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
      <ul
        class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        data-aos="fade-right"
      >
        <div v-for="project in filteredProjects" :key="project.id">
          <div
            class="h-52 md:h-96 rounded-t-xl relative group"
            :style="{
              backgroundImage: 'url(' + project.image + ')',
              backgroundSize: 'cover',
            }"
          >
            <div
              class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            >
              <a
                v-if="project.webURL"
                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                :href="project.webURL || '#'"
                target="_blank"
              >
              </a>
              <a
                v-if="project.gitURL"
                class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                :href="project.gitURL || '#'"
                target="_blank"
              >
              </a>
            </div>
          </div>
          <div
            class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4"
          >
            <h3 class="text-lg font-semibold uppercase lg:text-xl">
              {{ project.title }}
            </h3>
            <p class="text-[#ADB7BE]">{{ project.description }}</p>
            <div class="flex flex-wrap p-2.5">
              <div
                v-for="technology in project.technologies"
                :key="technology"
                class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                style="
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  border: 1px solid #111827;
                  backdrop-filter: blur(9px);
                  -webkit-backdrop-filter: blur(9px);
                "
              >
                <p class="px-1 py-2">{{ technology }}</p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </section>
</template>
<script setup>
import spotter from "@/assets/spotter-map.jpg";
import production from "@/assets/production.jpg";
import qwikly from "@/assets/qwikly.jpg";
import optistock from "@/assets/optistock.png";
import firewall from "@/assets/network.jpg";
import delivery from "@/assets/abracadabra.jpg";
import { ref, computed } from "vue";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-vue";

const projects = ref([
  {
    id: 1,
    category: "Web Development",
    title: "Qwikly planning",
    description: "Backend + Frontend",
    technologies: ["Vue js", "Laravel"],
    gitURL: "",
    webURL: "https://planning.qwikly.io/",
    image: qwikly,
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Qwikly planning",
    description: "Mobile Frontend",
    technologies: ["Ionic vue"],
    gitURL: "",
    webURL:
      "https://play.google.com/store/apps/details?id=com.originova.qwikly.planning&pcampaignid=web_share",
    image: qwikly,
  },
  {
    id: 3,
    category: "Mobile App",
    title: "Spotter Map",
    description: "Backend",
    technologies: ["Laravel", "Ionic vue"],
    gitURL: "",
    webURL:
      "https://play.google.com/store/apps/details?id=com.originova.spotter.map&pcampaignid=web_share",
    image: spotter,
  },
  {
    id: 4,
    category: "Web Development",
    title: "Abracadabra Admin Dashboard",
    description: "Developing admin dashboard",
    technologies: ["Laravel", "Vue js"],
    gitURL: "",
    webURL:
      "https://play.google.com/store/apps/details?id=com.originova.abracadabra.client&pcampaignid=web_share",
    image: delivery,
  },
  {
    id: 5,
    category: "Mobile App",
    title: "Abracadabra",
    description: "Backend",
    technologies: ["Ionic vue"],
    gitURL: "",
    webURL:
      "https://play.google.com/store/apps/details?id=com.originova.abracadabra.client&pcampaignid=web_share",
    image: delivery,
  },
  {
    id: 6,
    category: "Cyber security",
    title: "Network Firewall",
    description:
      "A netwrok firewall for DOS attack with a DOS script to help understanding how the firewall work",
    technologies: ["Python"],
    gitURL: "https://github.com/M0xRoot/Dos-and-Dos-blocker.git",
    webURL: "",
    image: firewall,
  },
  {
    id: 7,
    category: "Desktop Software",
    title: "OptiStock",
    description: "A desktop software to improve and optimize the stock",
    technologies: ["Django", "Pyside"],
    gitURL: "https://github.com/M0xRoot/Stock-project.git",
    webURL: "",
    image: optistock,
  },
  {
    id: 8,
    category: "Web Development",
    title: "OptiStock",
    description: "The admin dashboard of the software desktop OptiStock",
    technologies: ["Vuetify"],
    gitURL: "",
    webURL: "https://github.com/M0xRoot/Vuetify3_frontend.git",
    image: optistock,
  },
  {
    id: 9,
    category: "DevOps",
    title: "CI/CD",
    description: "CI/CD project to make the production faster",
    technologies: ["Python"],
    gitURL: "https://github.com/M0xRoot/CI-CD.git",
    webURL: "",
    image: production,
  },
]);

const selected = ref("all");

const options = ref([
  { id: 1, text: "All", value: "all" },
  { id: 2, text: "Web Development", value: "Web Development" },
  { id: 3, text: "Mobile App", value: "Mobile App" },
  { id: 4, text: "Cyber Security", value: "Cyber Security" },
  { id: 5, text: "Desktop Software", value: "Desktop Software" },
  { id: 6, text: "DevOps", value: "DevOps" },
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
