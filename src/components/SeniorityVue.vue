<template>
  <div id="seniority">
    <Blank></Blank>
    <div class="title">
      <h2>{{ $t("seniority.seniority") }}</h2>
      <h6>{{ $t("seniority.experience") }}</h6>
    </div>

    <div class="content">
      <el-scrollbar height="500px">
        <Timeline></Timeline>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from "@/components/TimelineVue.vue";
import Blank from "@/components/BlankVue.vue";
</script>

<style scoped lang="scss">
#seniority {
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
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .el-scrollbar {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
