<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <h3 class="md-title" style="flex: 1">PWA Notes</h3>
        <md-button class="md-primary" @click="createNote()">Create</md-button>
      </md-app-toolbar>

      <md-app-content>
        <Board v-bind:cards="notes" v-on:edit-modal="editNote" />
        <NoteDialog
          v-if="showNoteDialog"
          v-bind:note="note || undefined"
          v-on:close="closeNoteDialog()"
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
import NoteDialog from './NoteDialog.vue';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.';

export default {
  name: 'Layout',
  components: {
    Board,
    NoteDialog
  },
  data: function() {
    return {
      showNoteDialog: false,
      note: null,
      notes: [
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
    closeNoteDialog() {
      this.showNoteDialog = false;
      this.note = null;
    },
    editNote(event) {
      console.log('editNote called with:', event);
      this.note = event;
      this.showNoteDialog = true;
    },
    createNote() {
      this.showNoteDialog = true;
    }
  }
};
</script>
