<template>
  <div class="app-bar">
    <Button text="Get in touch" uppercased filled centered bold />
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
  box-shadow: 0 0 0 #ffffff, 0 0 0 #ffffff,
    inset -2px -2px 4px rgba(255, 255, 255, 0.3),
    inset 2px 2px 4px rgba(0, 0, 0, 0.15);
}
</style>