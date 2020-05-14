<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <h3 class="md-title" style="flex: 1">PWA Notes</h3>
        <md-button class="md-primary" @click="showDialog = true">Create</md-button>
      </md-app-toolbar>

      <md-app-content>
        <Board />
      </md-app-content>
    </md-app>

    <md-dialog :md-active.sync="showDialog">
      <md-field>
        <md-input placeholder="Title" v-model="newNote.title"></md-input>
      </md-field>

      <md-field>
        <md-textarea placeholder="Content" v-model="newNote.content"></md-textarea>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Cancel</md-button>
        <md-button class="md-primary" @click="createNote(newNote)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<style scoped>
.md-app {
  max-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-dialog /deep/ .md-dialog-container {
  transform: none;
  width: 370px;
  padding: 10px;
}

.md-dialog /deep/ .md-textarea {
  height: 160px;
}
</style>

<script>
import PouchDB from 'pouchdb-browser';
import { v4 as uid } from 'uuid';

import Board from './Board.vue';

var db = new PouchDB('notes');

const emptyNote = function() {
  return {
    title: '',
    content: ''
  };
};

export default {
  name: 'Layout',
  components: {
    Board
  },
  data: function() {
    return {
      showDialog: false,
      newNote: emptyNote()
    };
  },
  methods: {
    closeDialog: function() {
      this.newNote = emptyNote();
      this.showDialog = false;
    },
    createNote: function(newNote) {
      db.put({ ...newNote, _id: uid() });
      this.closeDialog();
    }
  }
};
</script>
