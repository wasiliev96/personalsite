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

  @media screen and (max-width: 768px) {
    .wrapper {
      max-width: 100%;
      margin: 0;
      padding: 10px 0;
    }
  }
</style>
