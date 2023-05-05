<template>
  <Nav></Nav>
  <el-scrollbar height="100vh">
    <Home :string="$t('home.string')"></Home>
    <About></About>
    <Seniority></Seniority>
    <Skills></Skills>
    <Project></Project>
    <Contact></Contact>
    <Food></Food>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import Nav from "@/components/NavVue.vue";
import Home from "@/components/HomeVue.vue";
import About from "@/components/AboutVue.vue";
import Seniority from "@/components/SeniorityVue.vue";
import Skills from "@/components/SkillsVue.vue";
import Project from "@/components/ProjectVue.vue";
import Contact from "@/components/ContactVue.vue";
import Food from "@/components/FoodVue.vue";

defineComponent({
  components: {
    Nav,
    Home,
    About,
    Seniority,
    Skills,
    Project,
    Contact,
    Food,
  },
});
</script>

<style lang="scss" scoped></style>
