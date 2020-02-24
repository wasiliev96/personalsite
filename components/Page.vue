<template>
  <div class="wrapper">
    <slot/>
    <nuxt/>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper {
    margin: 100px 50px 0 450px;
    flex-grow: 1;
  }
</style>
