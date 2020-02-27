<template>
  <div class="app-bar">
    <input type="checkbox" class="drawer-checkbox" id="drawerCheckbox">
    <label for="drawerCheckbox" class="drawer-tumbler" v-on:click="$store.commit('toggleDrawer')">
      <span></span><span></span><span></span>
    </label>
    <Button text="Get in touch" uppercased filled centered bold/>
  </div>
</template>
<script>
  import Button from "~/components/Button";

  export default {
    components: {
      Button
    }
  };
</script>
<style lang="scss" scoped>
  .app-bar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 90px;
    background-color: var(--color_main);
    z-index: 1;
    box-shadow: 0 0 0 #FFFFFF, 0 0 0 #FFFFFF,
    inset -2px -2px 4px rgba(255, 255, 255, 0.3),
    inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }

  .drawer-checkbox {
    display: none;
  }

  .drawer-tumbler {
    position: fixed;
    top: 5px;
    left: 10px;
    width: 50px;
    height: 50px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    box-shadow: -4px -4px 5px rgba(255, 255, 255, 0.3),
    4px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 13px;
    transition: box-shadow var(--transition_base);

    &:hover {
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 rgba(0, 0, 0, 0.15);
    }

    &:active {
      box-shadow: 0 0 0 rgba(255, 255, 255, 0.15), 0 0 0 rgba(255, 255, 255, 0.15),
      inset -2px -2px 4px rgba(255, 255, 255, 0.3),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    }

    span {
      display: block;
      width: 30px;
      height: 0;
      border-bottom: 2px solid var(--color_secondary);
      padding: 3px;

      &:first-child {
        padding-top: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .drawer-tumbler {
      display: flex;
    }
    .app-bar{
      height: 60px;
    }
  }
</style>
