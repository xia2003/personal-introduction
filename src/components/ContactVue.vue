<template>
  <div id="contact">
    <div>前端程序员</div>
    <div>
      <span>{{ $t("contact.qq") }}:xxxxxxxxxx</span>
      <span>{{ $t("contact.Phone") }}:xxxxxxxxxxx</span>
      <span>{{ $t("contact.Email") }}:xxx@xx.com</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
#contact {
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--FontColor);

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      margin: 15px;
    }
  }
}
</style>
