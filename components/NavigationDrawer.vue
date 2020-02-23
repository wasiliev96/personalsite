<template>
  <div class="navigation-drawer">
    <PersonCard />
    <div class="drawer">
      <Button v-for="button in buttons" v-bind:key="button.id" :text="button.text">
        <font-awesome-icon :icon="button.icon" />
      </Button>
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
          text: "Contact",
          icon: ["far", "user"]
        },
        {
          text: "Frequently Contacted",
          icon: ["fas", "redo"]
        },
        {
          text: "Duplicates",
          icon: ["far", "copy"]
        },
        {
          text: "Labels",
          icon: ["fas", "chevron-up"]
        },
        {
          text: "Create label",
          icon: ["fas", "plus"]
        },
        {
          text: "More",
          icon: ["fas", "chevron-down"]
        },
        {
          text: "More",
          icon: ["fas", "cog"]
        },
        {
          text: "Help",
          icon: ["fas", "question"]
        },
        {
          text: "Download",
          icon: ["fas", "download"]
        }
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
}
</style>