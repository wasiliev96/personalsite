<template>
  <div class="card">
    <div class="card-header">
      <!--      <div class="image" v-bind:style="{ 'background-image': 'url('+ url +')' }"></div>-->
      <transition name="fade">
        <img :src="url" alt="" v-on:load="onLoaded" v-show="loaded" class="image">
      </transition>
      <div class="image-placeholder" v-show="!loaded"></div>
    </div>
    <div class="card-body">
      <div class="title">Tema</div>
      <div
        class="text"
      >Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации.
      </div>
    </div>
    <div class="card-footer">
      <Button icon mini>
        <font-awesome-icon :icon="['fab','github']"/>
      </Button>
      <Button text="Read more" centered bold></Button>
      <Button icon mini>
        <font-awesome-icon :icon="['fas','share-alt']"/>
      </Button>
    </div>
  </div>
</template>
<script>
  import Button from "~/components/Button";

  export default {
    props: ["url"],
    components: {
      Button
    },
    data() {
      return {
        src: 'http://via.placeholder.com/350x150',
        loaded: false,
      }
    },
    methods: {
      onLoaded() {
        this.loaded = true;
      }
    },
  };
</script>
<style lang="scss" scoped>
  .card {
    color: var(--color_text);
    margin: 10px;
    max-width: 400px;
    display: inline-block;
    background: #EFEAF5;
    box-shadow: -4px -4px 5px #FFFFFF, 4px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 13px 80px 13px 30px;
    will-change: box-shadow;
    transition: box-shadow var(--transition_base);

    &:hover {
      box-shadow: 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(0, 0, 0, 0);

      .card-header {
        box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
      }

      .image {
        transform: scale(1.3) translate(-30px, -30px);
      }
    }
  }

  .card-header {
    height: 250px;
    overflow: hidden;
    border-radius: 13px 80px 0 0;
    box-shadow: 0 0 0 #FFFFFF, 0 0 0 rgba(0, 0, 0, 0);
    will-change: box-shadow;
    transition: box-shadow var(--transition_base) ease;
  }

  .image-placeholder {
    height: 250px;
    width: 100%;
    border-radius: 13px 80px 0 0;
  }

  .image {
    width: 100%;
    margin: 0 auto;
    will-change: transform;
    transition: transform 12s;
  }

  /*Image fade in*/

  .fade-enter-active {
    transition: opacity var(--transition_base);
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }

  /*End image fade in*/

  .card-body {
    padding: 30px 20px 0;
  }

  .title {
    padding: 0 0 10px 10px;
    font-size: 21px;
    font-weight: bold;
  }

  .card-header .image {
    width: 100%;
    border-radius: 13px 26px 0 0;
  }

  .card-footer {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px 30px 30px;
    border-radius: 0 0 13px 30px;

    button {
      font-size: 18px;
      margin: 0 5px;
    }
  }

</style>
