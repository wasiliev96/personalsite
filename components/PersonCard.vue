<template>
  <div class="person-card">
    <Button text="About" mini filled bold/>

    <div class="card-content">
      <div class="card_front">
        <div
          class="avatar"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/avatar.jpg') + ')' }"
        ></div>
        <div class="name">Wasiliev</div>
      </div>
    </div>
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
.person-card {
  padding: 30px;
  background-color: var(--color_secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color_main);
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 20px;
}
.avatar {
  display: inline-block;
  margin: 15px 5px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-position: center center;
  background-size: cover;
}
.name {
  font-size: 36px;
  color: var(--color_secondary);
}
</style>