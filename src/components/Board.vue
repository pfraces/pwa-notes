<template>
  <div>
    <md-card md-with-hover v-for="(card, index) in cards" :key="index">
      <md-card-header>
        <div class="md-title">{{ card.title }}</div>
      </md-card-header>

      <md-card-content>{{ card.content }}</md-card-content>

      <md-card-actions>
        <md-button v-on:click="$emit('edit-note', { ...card })">Edit</md-button>
        <md-button v-on:click="$emit('delete-note', { ...card })">Delete</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-content {
  height: 145px;
}
</style>

<script>
export default {
  name: 'App',
  components: {},
  props: ['cards']
};
</script>
