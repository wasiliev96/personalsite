<template>
  <div class="container">
    <AppBar />
    <div class="page">
      <NavigationDrawer />
      <Page>
      </Page>
    </div>
  </div>
</template>

<script>
import NavigationDrawer from "~/components/NavigationDrawer";
import AppBar from "~/components/AppBar";
import Page from "~/components/Page";
export default {
  components: {
    NavigationDrawer,
    AppBar,
    Page
  }
};
</script>

<style>
.container {
  margin: 120px auto;
  
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.page {
  display: flex;
}
</style>
