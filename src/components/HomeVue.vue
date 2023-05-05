<template>
  <div id="home">
    <h1>{{ text }}<span class="cursor">|</span></h1>
    <span class="introduction">
      <span>前端工程师</span>
      <br />
      <span>热爱学习，热爱生活，创造更高质量工作成果。</span>
    </span>
    <a href="https://github.com/huoshicang">GitHub</a>
    <div class="ArrowDownBold">
      <a href="#about">
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, watch } from "vue";

const props = defineProps({ string: String });
const text = ref<string>("");
let interval: any = null;

watch(
  () => props.string,
  (newVal) => {
    text.value = "";
    clearInterval(interval);
    type();
  }
);
const type = () => {
  let charIndex = 0;
  interval = setInterval(() => {
    text.value += props.string?.[charIndex];
    charIndex++;
    if (charIndex === props.string?.length) {
      clearInterval(interval);
      setTimeout(() => {
        const backspaceInterval = setInterval(() => {
          text.value = text.value.slice(0, -1);
          if (text.value.length === 0) {
            clearInterval(backspaceInterval);
            charIndex = 0;
            type();
          }
        }, 100);
      }, 250);
    }
  }, 500);
};

onMounted(() => {
  type();
});
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 4em;
  }

  & .cursor {
    animation: blink 1s steps(2, start) infinite,
      color-change 2s linear infinite;
    border-radius: 5px;
  }

  & .introduction {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
    width: 100%;
    color: var(--FontColor);

    span {
      color: var(--Greenfog);
    }
  }

  & .ArrowDownBold {
    height: 25px;
    width: 25px;
    margin-top: 100px;
    color: var(--ButttonColor);
    animation: move 0.8s infinite alternate linear;
  }
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

@keyframes color-change {
  0% {
    color: black;
  }
  50% {
    color: gray;
  }
  100% {
    color: white;
  }
}

@keyframes move {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 15px);
  }
}
</style>
