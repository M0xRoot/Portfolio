<template>
    <div class="bg-[#111827] min-h-screen">
        <NavBar />
        <UserSection />
        <ServicesSection />
        <AboutSection />
    </div>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';

    const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
    const UserSection = defineAsyncComponent(() => import('@/components/UserSection.vue'));
    const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
    const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
</script>
