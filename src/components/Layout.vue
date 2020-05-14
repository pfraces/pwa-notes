<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <h3 class="md-title" style="flex: 1">PWA Notes</h3>
        <md-button class="md-primary" @click="handleCardToCreate">Create</md-button>
      </md-app-toolbar>

      <md-app-content>
        <Board v-bind:cards="cards" v-on:edit-modal="handleCardToEdit" />
        <Modal
          v-bind:showModal="showModal"
          v-bind:newCard="newCard"
          v-bind:cardToEdit="cardtoEdit"
          v-bind:mode="modalMode"
          v-on:close-modal="handleCloseModal"
        />
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
import Board from './Board.vue';
import Modal from './Modal.vue';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.';

export default {
  name: 'Layout',
  components: {
    Board,
    Modal
  },
  data: function() {
    return {
      showModal: false,
      modalMode: 'create',
      newCard: {
        title: '',
        content: ''
      },
      cardtoEdit: { title: '', content: '' },
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
  },
  methods: {
    handleCloseModal(closeModal) {
      this.showModal = closeModal;
    },
    handleCardToEdit(data) {
      this.cardtoEdit = {
        ...this.cardtoEdit,
        title: data.title,
        content: data.content
      };
      this.modalMode = 'edit';
      this.showModal = true;
    },
    handleCardToCreate() {
      this.modalMode = 'create';
      this.showModal = true;
    }
  }
};
</script>
