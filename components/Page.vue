<template>
  <div class="wrapper">
    <slot />
    <nuxt />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: calc(100vw - 360px);
  margin-left: 340px;
  flex-grow: 1;
}
</style>