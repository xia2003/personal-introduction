<template>
  <div id="skills">
    <Blank></Blank>
    <div class="title">
      <h2>{{ $t("skills.skills") }}</h2>
      <h6>{{ $t("skills.level") }}</h6>
    </div>
    <div class="content">
      <el-scrollbar height="100vh">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <span>{{ item.name }}：</span>
            <el-progress
              :text-inside="true"
              :stroke-width="24"
              :percentage="item.proficiency"
              status="success"
            />
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Blank from "@/components/BlankVue.vue";

const items = [
  {
    name: "HTMl",
    proficiency: 90,
  },
  {
    name: "CSS",
    proficiency: 90,
  },
  {
    name: "JavaScript",
    proficiency: 60,
  },
  {
    name: "Vue",
    proficiency: 60,
  },
  {
    name: "Reaty",
    proficiency: 0,
  },
  {
    name: "TypeScript",
    proficiency: 10,
  },
  {
    name: "ES6",
    proficiency: 10,
  },
];
</script>

<style scoped lang="scss">
#skills {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--FontColor);

  .el-scrollbar {
    margin-bottom: 25px;
    height: 100%;
  }

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
    padding: 10px;

    ul li {
      margin: 20px 0;

      span {
        margin-bottom: 5px;
        margin-left: 10px;
        display: inline-block;
      }
    }
  }
}

.el-progress--line {
  //margin: 5px;
  margin-bottom: 15px;
  width: 800px;
}
</style>
