<template>
  <div class="navigation-drawer">
    <PersonCard/>
    <div class="drawer">
      <nuxt-link v-for="button in buttons" v-bind:key="button.id" :to="button.component">
        <Button :text="button.text">
          <img :src="button.icon" alt="" class="icon">
        </Button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  import Button from "~/components/Button";
  import PersonCard from "~/components/PersonCard";

  export default {
    components: {
      Button,
      PersonCard
    },
    data() {
      return {
        buttons: [
          {
            text: "About",
            icon: require('~/assets/icons/user.svg'),
            component: '/'
          },
          {
            text: "Blog",
            icon: require('~/assets/icons/pen.svg'),
            component: '/blog'
          },
          {
            text: "Elements",
            icon: require('~/assets/icons/elements.svg'),
            component: '/elements'
          },
          {
            text: "Projects",
            icon: require('~/assets/icons/rocket.svg'),
            component: '/projects'
          },
          // {
          //   text: "Frequently Contacted",
          //   icon: ["fas", "redo"]
          // },
          // {
          //   text: "Duplicates",
          //   icon: ["far", "copy"]
          // },
          // {
          //   text: "Labels",
          //   icon: ["fas", "chevron-up"]
          // },
          // {
          //   text: "Create label",
          //   icon: ["fas", "plus"]
          // },
          // {
          //   text: "More",
          //   icon: ["fas", "chevron-down"]
          // },
          // {
          //   text: "More",
          //   icon: ["fas", "cog"]
          // },
          // {
          //   text: "Help",
          //   icon: ["fas", "question"]
          // },
          // {
          //   text: "Download",
          //   icon: ["fas", "download"]
          // }
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  .navigation-drawer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 40px;
    left: 30px;
    z-index: 1;
    width: 280px;
    // padding: 25px 20px;
    border-radius: 30px;
    box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.15);
    padding-bottom: 20px;
    background-color: var(--color_secondary);
  }

  a {
    text-decoration: none;
  }

  .icon {
    margin: 10px 20px 10px 0;
  }

  .nuxt-link-exact-active > .btn {
    box-shadow: 0 0 0 #FFFFFF, 0 0 0 #FFFFFF,
    inset -2px -2px 4px rgba(255, 255, 255, 0.3),
    inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
</style>
