<template>
  <el-carousel indicator-position="outside" height="480px">
    <el-carousel-item v-for="(item, index) in CarouselList" :key="index">
      <div class="item">
        <img :src="item.img" />
        <div class="information">
          <h4>{{ item.title }}</h4>
          <p>{{ item.describe }}</p>
          <a :href="item.url">跳转</a>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import chatGPT from "@/assets/chatGPT.png";

const CarouselList = [
  {
    title: "ChatGPT",
    img: chatGPT,
    describe: "自己的chatGPT",
    url: "https://chat.fondlike.top",
  },
];
</script>

<style scoped lang="scss">
.el-carousel__item .item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 480px;

  & img {
    height: 80%;
    width: auto;
  }

  & a {
    color: #000;
    background: var(--ButttonColor);
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 9px #000;
    width: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

.information {
  width: 400px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  h4 {
    color: #000;
  }

  p {
    color: var(--Greenfog);
  }

  * {
    display: inline-block;
  }
}

.el-carousel {
  width: 100%;
}
</style>
