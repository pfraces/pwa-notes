<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-content>
        <p v-for="(item, index) in items" :key="index">{{ item.message }}</p>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.md-app {
  max-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
</style>

<script>
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.';

export default {
  name: 'App',
  components: {},
  data: function() {
    return {
      items: [
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum },
        { message: loremIpsum }
      ]
    };
  }
};
</script>
