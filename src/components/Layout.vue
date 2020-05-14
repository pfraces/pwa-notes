<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <h3 class="md-title" style="flex: 1">PWA Notes</h3>
        <md-button class="md-primary" @click="createNote()">Create</md-button>
      </md-app-toolbar>

      <md-app-content>
        <Board v-bind:cards="notes" v-on:edit-note="editNote" v-on:delete-note="deleteNote" />
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

const retrieveData = function(callback) {
  db.allDocs({ include_docs: true, descending: true }, (err, doc) => {
    if (err) {
      throw err;
    }

    const data = doc.rows.map(row => row.doc);
    callback(data);
  });
};

export default {
  name: 'Layout',
  components: {
    Board,
    NoteDialog
  },
  created: function() {
    db.changes({
      since: 'now',
      live: true
    }).on('change', () => {
      retrieveData(data => {
        this.notes = data;
      });
    });

    retrieveData(data => {
      this.notes = data;
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
    createNote() {
      this.showNoteDialog = true;
    },
    editNote(event) {
      this.note = event;
      this.showNoteDialog = true;
    },
    deleteNote(event) {
      db.remove(event);
    }
  }
};
</script>
