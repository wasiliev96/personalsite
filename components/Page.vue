<template>
  <div class="wrapper">
    <slot/>
    <nuxt/>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper {
      margin-left: 350px;
    padding: 50px;
    flex-grow: 1;
  }
</style>
