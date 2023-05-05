<template>
  <div id="project">
    <Blank></Blank>
    <div class="title">
      <h2>{{ $t("project.project") }}</h2>
      <h6>{{ $t("project.Alltheitems") }}</h6>
    </div>
    <div class="content">
      <Carousel></Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Blank from "@/components/BlankVue.vue";
import Carousel from "@/components/CarouselVue.vue";
</script>

<style scoped lang="scss">
#project {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--FontColor);

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2,
    h6 {
      margin: 5px;
    }

    h2 {
      color: var(--FontColor);
    }

    h6 {
      color: var(--Greenfog);
    }
  }

  .content {
    height: 83vh;
    width: 101%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
  }
}
</style>
