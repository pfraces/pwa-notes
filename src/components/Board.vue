<template>
  <div>
    <md-card md-with-hover v-for="(card, index) in cards" :key="index">
      <md-card-header>
        <div class="md-title">{{ card.title }}</div>
      </md-card-header>

      <md-card-content>{{ card.content }}</md-card-content>

      <md-card-actions>
        <md-button>Edit</md-button>
        <md-button>Delete</md-button>
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
</style>

<script>
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.';

export default {
  name: 'App',
  components: {},
  data: function() {
    return {
      cards: [
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum },
        { title: 'Lorem Ipsum', content: loremIpsum }
      ]
    };
  }
};
</script>
