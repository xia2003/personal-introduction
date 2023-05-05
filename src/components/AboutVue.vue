<template>
  <div id="about">
    <Blank></Blank>
    <div class="title">
      <h2>{{ $t("about.me") }}</h2>
      <h6>{{ $t("about.introduce") }}</h6>
    </div>
    <div class="content">
      <img :src="$t('about.imgSrc')" :alt="$t('about.imgAlt')" />
      <div class="text">
        <p>
          {{ $t("about.describe") }}
        </p>
        <div>
          <h2>
            <span>
              {{ $t("about.ageNumber") }}
            </span>
            <span>
              {{ $t("about.age") }}
            </span>
          </h2>
          <h2>
            <span>
              {{ $t("about.experienceNumber") }}
            </span>
            <span>
              {{ $t("about.experience") }}
            </span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Blank from "@/components/BlankVue.vue";
</script>

<style scoped lang="scss">
#about {
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

    .text {
      width: 40%;

      p {
        color: var(--FontColor);
        margin: 10px;
      }

      div {
        display: flex;
        justify-content: space-around;
        margin: 20px;

        h2 {
          display: flex;
          align-items: center;
          flex-direction: column;

          & span:first-child {
            font-size: 22px;
          }
        }
      }
    }

    img {
      height: auto;
      width: 40%;
      border-radius: 10px;
      border: var(--FontColor) 1px solid;
    }
  }
}
</style>
