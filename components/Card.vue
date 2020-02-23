<template>
  <div class="card">
    <div class="card-header">
      <Button mini text="Share" class="share-btn">
        <font-awesome-icon :icon="['fas', 'share']" />
      </Button>
      <div class="image" v-bind:style="{ 'background-image': 'url('+ url +')' }"></div>
      <div class="title">
        Some cool card title
        <div class="subtitle">
          This is card subtitle.
          <br />Some looong card subtitle
        </div>
      </div>
    </div>
    <hr />
    <div class="card-body">
      <div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, at!</div>
    </div>
    <div class="card-footer">
      <Button text="Github" mini>
        <font-awesome-icon :icon="['fab','github']" />
      </Button>
      <Button mini icon>
        <font-awesome-icon :icon="['fas','heart']" />
      </Button>
      <Button text="Read more" mini>
        <font-awesome-icon :icon="['fab','dochub']" />
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
  }
};
</script>
<style lang="scss" scoped>
.share-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
}
hr {
  margin-top: 20px;
  height: 0.5px;
  opacity: 0.1;
}
.card {
  margin: 20px;
  padding-top: 10px;
  border-top-right-radius: 42px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 13px;
  max-width: 400px;
  display: inline-block;
  will-change: box-shadow;
  transition: box-shadow var(--transition_base);
  box-shadow: -4px -4px 5px rgba(255, 255, 255, 1),
    4px 3px 5px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(0, 0, 0, 0);
    .title {
      padding: 30px 10px 60px;
    }
    .subtitle {
      background-color: #000;
      opacity: 1;
      font-size: 14px;
    }
  }
}
.card-header {
  position: relative;
  width: 380px;
  overflow: hidden;
  margin: 0 auto;
}
.title {
  display: block;
  width: 380px;
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 20px 10px;
  text-align: left;
  text-transform: uppercase;
  color: var(--color_secondary);
  transition: padding var(--transition_long);
}
.card-body {
  padding: 20px 20px 30px;
}
.subtitle {
  text-transform: none;
  background-color: #000;
  transition: all var(--transition_short);
  opacity: 0;
  font-size: 0;
  height: 0;
  color: #dedede;
  text-align: left;
}
.text {
  text-align: left;
}
.image {
  position: relative;
  width: 100%;
  padding-top: 75%;
  background-position: center;
  background-size: 100%;
  margin: 0 auto;
  clip-path: polygon(0% 0%, 40% 0%, 100% 60%, 100% 100%, 0% 100%);
  will-change: transform;
  transition: transform 4s;
}
.card:hover .image {
  transform: scale(1.2);
}
.card-footer {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 8px;
  }
}
@keyframes zoomIn {
  50% {
    transform: scale(1.2);
  }
}
</style>