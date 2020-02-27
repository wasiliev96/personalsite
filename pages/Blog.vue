<template>
  <div class="blog">
    <!--    <h1>Blog page</h1>-->
    <div class="container">
      <div v-for="(post,index) in posts" v-bind:key="post.id" v-bind:class="moderateVisibility(index)">
        <div class="header">
          <div class="post-image">
            <transition name="fade">
              <img :src="post.image" alt="" v-on:load="onLoaded" v-show="loaded">
            </transition>
            <div class="image-placeholder" v-show="!loaded"></div>
          </div>
        </div>
        <h1 class="post-title">{{post.title}}</h1>
        <!--        <span class="divider-horizontal"></span>-->
        <div class="post-body">
          <div class="text">
            <p>{{post.text}}</p>
            <img class="text-image" src="https://picsum.photos/600/400" alt="">
          </div>
        </div>
        <!--        <span class="divider-horizontal divider-bottom"></span>-->
      </div>
    </div>
    <div class="footer">
      <div class="navigation">
        <span
          v-for="(post, index) in posts"
          :key="post.id"
          :class="[{'active':index===visiblePost},'bullet']"
          @click="changePost(index)"
        >
          {{index}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Blog",
    methods: {
      onLoaded() {
        this.loaded = true;
      },
      moderateVisibility(index) {
        console.log('index:' + index);
        console.log(this.visiblePost);
        let classes = ['post'];
        if (index === this.visiblePost) classes.push('visible');
        console.log(classes);
        return classes;
      },
      changePost(index) {
        this.visiblePost = index;
        window.scrollTo(0, 0);
      }
    },
    data() {
      return {
        visiblePost: 0,
        loaded: false,
        posts: [
          {
            title: 'Some cool post title',
            image: "https://picsum.photos/1200/500",
            text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa, ea error excepturi inventore maxime quisquam reiciendis rem ullam. Accusamus aliquam aliquid amet architecto assumenda delectus dolor dolorem eaque eius eos esse est eveniet exercitationem hic id in inventore iusto labore nesciunt numquam, quod quos reiciendis repellendus temporibus vero? Adipisci, aliquam animi aperiam autem cum dolorem dolores dolorum et eveniet exercitationem expedita fuga fugit harum in ipsam labore laudantium molestiae necessitatibus nulla odit omnis quo quod quos ratione recusandae reiciendis repellendus repudiandae sapiente similique sit tenetur velit veritatis voluptatem? Deleniti fugiat incidunt minus nostrum perspiciatis quae quia ullam unde voluptas."
          },
          {
            title: 'SOme another cool post title',
            image: "https://picsum.photos/1202/502",
            description: 'This is a small image descriotion',
            text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa, ea error excepturi inventore maxime quisquam reiciendis rem ullam. Accusamus aliquam aliquid amet architecto assumenda delectus dolor dolorem eaque eius eos esse est eveniet exercitationem hic id in inventore iusto labore nesciunt numquam, quod quos reiciendis repellendus temporibus vero? Adipisci, aliquam animi aperiam autem cum dolorem dolores dolorum et eveniet exercitationem expedita fuga fugit harum in ipsam labore laudantium molestiae necessitatibus nulla odit omnis quo quod quos ratione recusandae reiciendis repellendus repudiandae sapiente similique sit tenetur velit veritatis voluptatem? Deleniti fugiat incidunt minus nostrum perspiciatis quae quia ullam unde voluptasa."
          },
          {
            title: 'SOme alse cool post title',
            image: "https://picsum.photos/1205/502",
            description: 'This is a small image descriotion',
            text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa, ea error excepturi inventore maxime quisquam reiciendis rem ullam. Accusamus aliquam aliquid amet architecto assumenda delectus dolor dolorem eaque eius eos esse est eveniet exercitationem hic id in inventore iusto labore nesciunt numquam, quod quos reiciendis repellendus temporibus vero? Adipisci, aliquam animi aperiam autem cum dolorem dolores dolorum et eveniet exercitationem expedita fuga fugit harum in ipsam labore laudantium molestiae necessitatibus nulla odit omnis quo quod quos ratione recusandae reiciendis repellendus repudiandae sapiente similique sit tenetur velit veritatis voluptatem? Deleniti fugiat incidunt minus nostrum perspiciatis quae quia ullam unde voluptasar."
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    flex-direction: column;
    width: 100%;
  }

  .divider-horizontal {
    display: block;
    width: 100%;
    height: 0;
    border: 1px solid var(--color_main);
    margin: 0 0 40px;
    opacity: .3;

    .divider-bottom {
      margin: 50px auto 50px;
    }
  }

  .post {
    width: 100%;
    margin: 0 auto;
    display: none;
    opacity: 0;

    &.visible {
      display: block;
      animation: postFadeIn ease var(--transition_long) forwards;
    }
  }

  @keyframes postFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /*bla*/


  /*end of bla*/
  .header {
    position: relative;
    box-shadow: -10px -10px 15px #FFFFFF, 10px 10px 15px rgba(0, 0, 0, 0.15);
    border-radius: 13px 13px 0 0;
    width: 100%;
    height: 600px;
    margin-bottom: 30px;

    /*Curve shadow*/
    &:before,
    &:after {
      background-color: transparent;
      content: "";
      position: absolute;
      z-index: -2;
      bottom: 2%;
      width: calc(50% - 20px);
      height: 100%;
      box-shadow: 0 25px 20px rgba(0, 0, 0, 0.5);
    }

    &:before {
      left: 10px;
      transform: rotate(-2deg);
    }

    &:after {
      right: 10px;
      transform: rotate(2deg);
    }

    p {
      font-size: 16px;
      font-weight: bold;
    }


    .post-image {
      width: 100%;
      height: 600px;
      z-index: -1;
      background-color: var(--color_secondary);
      border-radius: 13px 13px 0 0;

      img {
        object-fit: cover;
        width: 100%;
        height: 600px;
      }

      .image-placeholder {
        width: 100%;
        height: 600px;
      }

      img, .image-placeholder {
        border-radius: 13px 13px 0 0;
      }
    }

  }

  .post-title {
    padding: 20px;
    margin: 30px 0;
  }

  .post-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 100%;

      p {
        max-width: 1200px;
        text-align: left;
        margin: 20px;

        &:first-letter {
          font-size: 1.4em;
        }
      }
    }

    .text-image {
      width: 60%;
      max-height: 400px;
      margin: 0 auto;
    }

  }

  /*Navigation*/
  .footer {
    height: 60px;
    padding: 0 30px;
    border-radius: 13px 13px 0 0;
    display: inline-block;
    position: fixed;
    bottom: 0;
    left: 50%;
    background-color: var(--color_secondary);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.15), -10px -10px 15px rgba(0, 0, 0, 0.15);
  }

  .navigation {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-weight: bold;

    .bullet {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      font-size: 18px;
      color: var(--color_main);
      text-shadow: -4px -4px 5px #FFFFFF, 4px 3px 5px rgba(0, 0, 0, 0.15);
      padding: 7px;
      will-change: text-shadow, filter, font-size;
      transition: text-shadow var(--transition_short), filter var(--transition_long), font-size var(--transition_base);
      filter: hue-rotate(0deg);

      &.active {
        font-size: 36px;
        color: #D29AFD;

        &:hover {
          filter: none;
          text-shadow: -4px -4px 5px #FFFFFF, 4px 3px 5px rgba(0, 0, 0, 0.15);
          cursor: auto;
        }
      }

      &:hover {
        filter: hue-rotate(405deg);
        text-shadow: 0 0 0 #FFFFFF, 0 0 0 #FFFFFF;

      }
    }
  }

  /*End of navigation*/

  /*Image fade in*/

  .fade-enter-active {
    transition: opacity var(--transition_base);
    will-change: opacity;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }

  /*End image fade in*/

  @media screen and (max-width: 768px) {
.blog{
  padding-top: 0;
}
  }
</style>
