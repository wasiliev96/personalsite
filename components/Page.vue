<template>
  <div class="wrapper">
    <slot/>
    <nuxt/>
  </div>
</template>
<style lang="scss" scoped>
  .wrapper {
    margin-left: 320px;
    padding: 50px 0 0 0;
    flex-grow: 1;
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      max-width: 100%;
      margin: 0;
    }
  }
</style>
