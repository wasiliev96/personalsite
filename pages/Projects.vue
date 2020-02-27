<template>
  <div class="projects">
    <div class="gallery">
      <div class="row">
        <ZCard url="https://picsum.photos/480/320"/>
        <ZCard url="https://picsum.photos/480/322"/>
        <ZCard url="https://picsum.photos/480/321"/>
      </div>
      <div class="row">
        <ZCard url="https://picsum.photos/480/321"/>
        <ZCard url="https://picsum.photos/480/321?grayscale"/>
        <ZCard url="https://picsum.photos/480/321?blur=1"/>
      </div>
      <div class="row">
        <ZCard url="https://picsum.photos/480/322?blur=1"/>
        <ZCard url="https://picsum.photos/480/322"/>
        <ZCard url="https://picsum.photos/480/322?grayscale"/>
      </div>
      <div class="row">
        <ZCard url="https://picsum.photos/480/323?grayscale"/>
        <ZCard url="https://picsum.photos/480/323?blur=1"/>
        <ZCard url="https://picsum.photos/480/323"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "~/components/Card";
  import ZCard from "~/components/ZCard";

  export default {
    name: "Projects",
    components: {
      Card,
      ZCard
    }
  }
</script>

<style lang="scss" scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 1200px) {
    .projects{
      padding: 0;
    }
    .gallery {
      .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
