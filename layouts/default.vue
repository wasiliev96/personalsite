<template>
  <div class="container">
    <AppBar/>
    <div class="page">
      <NavigationDrawer/>
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
  .container
  {
    margin: 0;
    display: flex;
    justify-content: flex-start;
  }

  .page
  {
    margin-top: 60px;
    margin-left: 320px;
    padding: 20px 0 0 0;
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    .page{
      margin: 0;
    }
  }
</style>
