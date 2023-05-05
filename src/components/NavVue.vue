<template>
  <div id="nav">
    <div class="name">{{ $t("nav.name") }}</div>
    <ul>
      <li v-for="(item, index) in menuList" :key="index">
        <a :href="item.href">{{ $t(item.name) }}</a>
      </li>
      <li>
        <button @click="language">{{ lang }}</button>
      </li>
      <li class="icon" @click="ThemeColors">
        <el-icon v-if="sunriseOrsunset">
          <Sunny />
        </el-icon>

        <el-icon v-else>
          <Moon />
        </el-icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

import { defineComponent, ref } from "vue";

defineComponent({
  components: {},
});
const { locale } = useI18n();
const menuList = ref([
  {
    name: "nav.home",
    href: "#home",
  },
  {
    name: "nav.about",
    href: "#about",
  },
  {
    name: "nav.seniority",
    href: "#seniority",
  },
  {
    name: "nav.skills",
    href: "#skills",
  },
  {
    name: "nav.project",
    href: "#project",
  },
  {
    name: "nav.blog",
    href: "#blog",
  },
  {
    name: "nav.contact",
    href: "#contact",
  },
]);
const lang = ref("English");
const sunriseOrsunset = ref(true);

const language = () => {
  locale.value = locale.value == "zh" ? "en" : "zh";
  lang.value = lang.value == "English" ? "中文" : "English";
};

const ThemeColors = () => {
  sunriseOrsunset.value = !sunriseOrsunset.value;

  if (!sunriseOrsunset.value) {
    document.documentElement.style.setProperty("--BackgroundColor", "#fff");
    document.documentElement.style.setProperty("--FontColor", "#004225");
    document.documentElement.style.setProperty("--ButttonColor", "#7FC241");
  } else {
    document.documentElement.style.setProperty("--BackgroundColor", "#004225");
    document.documentElement.style.setProperty("--FontColor", "#fff");
    document.documentElement.style.setProperty("--ButttonColor", "#fff");
  }
};
</script>

<style lang="scss">
#nav {
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  background-color: var(--BackgroundColor);

  .name {
    font-size: 2em;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 600px;

    button {
      width: 55px;
      height: 25px;
      border: none;
      border-radius: 5px;
    }

    .icon {
      height: 25px;
      width: 25px;
    }
  }
}
</style>
