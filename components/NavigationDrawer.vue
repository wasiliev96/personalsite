<template>
  <div :class="[$store.state.isDrawerCollapsed?'hidden':'','navigation-drawer']">
    <PersonCard/>
    <div class="drawer">
      <nuxt-link v-for="button in buttons" v-bind:key="button.id" :to="button.component">
        <Button :text="button.text">
          <img :src="button.icon" alt="" class="icon">
        </Button>
      </nuxt-link>
    </div>
    <div class="social">
      <a v-for="link in links" v-bind:key="link.id" :href="link.url" :target="link.target">
        <img :src="link.icon" alt="" class="icon">
        <span class="href">{{link.text}}</span>
      </a>
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
    methods: {
      toggleDrawer() {
        alert(1)
      }
    },
    computed: {},
    data() {
      return {
        drawerCollapse: false,
        links: [
          {
            text: 'wasiliev',
            icon: require('~/assets/icons/plane.svg'),
            url: 'tg://resolve?domain=wasiliev',
            target: '_self'
          },
          {
            text: 'wasiliev96',
            icon: require('~/assets/icons/instagram.svg'),
            url: 'https://www.instagram.com/wasiliev96/',
            target: '_blank'
          },
          {
            text: 'wasiliev.cloud',
            icon: require('~/assets/icons/google-plus.svg'),
            url: 'mailto:wasiliev.cloud@gmail.com',
            target: '_blank'
          }
        ],

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
          }
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import '../assets/scss/queries';

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
    transition: top var(--transition_long);
    overflow-x: hidden;
  }

  .drawer {
    width: calc(100% + 40px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

  }

  .drawer-checkbox {
    display: none;
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

  .social {
    margin-top: 90px;
    margin-bottom: 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
      position: relative;
      margin: 0 20px;
      padding: 0 0 0 10px;
      display: flex;
      align-items: center;
      color: var(--color_main);
      font-weight: bold;
      box-shadow: 0 0 0 #FFFFFF, 0 0 0 rgba(0, 0, 0, 0.15),
      inset 0 0 0 rgba(255, 255, 255, 0.3), inset 0 0 0 rgba(0, 0, 0, 0.15);
      transition: box-shadow var(--transition_short);

      &:after {
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        content: '';
        display: block;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        filter: hue-rotate(0deg);
        transition: all var(--transition_base);
      }

      img {
        margin: 0 20px 0 0;
        width: 40px;
        height: 40px;
      }

      .href {
        transition: color var(--transition_long);
      }

      &:hover {
        box-shadow: 0 0 0 #FFFFFF, 0 0 0 #FFFFFF,
        inset -1px -1px 5px rgba(255, 255, 255, 0.3),
        inset 1px 1px 5px rgba(0, 0, 0, 0.15);

        .href {
          color: #D29AFD;
        }

        &:after {
          filter: hue-rotate(405deg);
          border-left: 2px solid var(--color_main);
          border-right: 2px solid var(--color_main);
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .social {
      display: none;
    }
    .navigation-drawer {
      margin: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      top: 60px;
      border-radius: unset;
      justify-content: flex-start;
      transform: translate(0, 0);
      transition: transform var(--transition_base) ease;

      .person-card {
        border-radius: unset;
      }

      &.hidden {
        transform: translate(0, 100%);
      }

    }
  }
</style>
