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
import PouchDB from 'pouchdb-browser';
import Board from './Board.vue';
import NoteDialog from './NoteDialog.vue';

var db = new PouchDB('notes');

export default {
  name: 'Layout',
  components: {
    Board,
    NoteDialog
  },
  created: function() {
    db.allDocs({ include_docs: true, descending: true }, (err, doc) => {
      this.notes = doc.rows.map(row => row.doc);
    });
  },
  data: function() {
    return {
      showNoteDialog: false,
      note: null,
      notes: []
    };
  },
  methods: {
    closeNoteDialog() {
      this.showNoteDialog = false;
      this.note = null;
    },
    editNote(event) {
      this.note = event;
      this.showNoteDialog = true;
    },
    createNote() {
      this.showNoteDialog = true;
    }
  }
};
</script>
