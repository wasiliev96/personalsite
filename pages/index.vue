<template>
  <div class="about">
    <h1 class="title">About</h1>
    <div class="text">
      <p>
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например,
        юмористические вставки или слова, которые даже.Есть много вариантов Lorem Ipsum, но большинство из них имеет не
        всегда приемлемые модификации, например, юмористические вставки или слова, которые даже.
      </p>
      <br>
      <p>
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например,
        юмористические вставки или слова, которые даже.Есть много вариантов Lorem Ipsum, но большинство из них имеет не
        всегда приемлемые модификации, например, юмористические вставки или слова, которые даже.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="scss" scoped>
  .about {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-style: normal;
    color: var(--color_text);
  }

  .text {
    color: var(--color_text);
    max-width: 700px;
  }
</style>
