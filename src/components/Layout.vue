<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = true">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title" style="flex: 1">PWA Notes</h3>
        <md-button class="md-primary" @click="createNote()">Create</md-button>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar md-elevation="0">
          <h3>Admin</h3>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="menuVisible = false">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item @click="retrieveServerData()">
            <md-icon class="md-accent">refresh</md-icon>
            <h4 class="md-list-item-text">Sync</h4>
          </md-list-item>
        </md-list>
      </md-app-drawer>

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
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 250px;
}
</style>

<script>
import PouchDB from 'pouchdb-browser';
import Board from './Board.vue';
import NoteDialog from './NoteDialog.vue';
import * as axios from 'axios';

var db = new PouchDB('notes');

const retrieveLocalData = function(callback) {
  db.allDocs({ include_docs: true, descending: true }, (err, doc) => {
    if (err) {
      throw err;
    }

    const data = doc.rows.map(row => row.doc);
    callback(data);
  });
};

const retrieveServerData = function() {
  axios.get('http://localhost:3000/api/notes').then(function(res) {
    db.bulkDocs(res.data);
  });
};

const getRevision = function(changes) {
  return parseInt(changes[0].rev.split('-')[0], 10);
};

const serverSync = function({ deleted, doc, changes }) {
  const rev = getRevision(changes);

  if (deleted) {
    axios.delete(`http://localhost:3000/api/notes/${doc._id}`);
    return;
  }

  if (rev === 1) {
    axios.post('http://localhost:3000/api/notes', {
      _id: doc._id,
      title: doc.title,
      content: doc.content
    });

    return;
  }

  if (rev > 1) {
    axios.put(`http://localhost:3000/api/notes/${doc._id}`, {
      title: doc.title,
      content: doc.content
    });

    return;
  }
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
      live: true,
      include_docs: true
    }).on('change', change => {
      retrieveLocalData(data => {
        this.notes = data;
        serverSync(change);
      });
    });

    retrieveLocalData(data => {
      this.notes = data;
    });
  },
  data: function() {
    return {
      menuVisible: false,
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
    },
    retrieveServerData() {
      retrieveServerData();
      this.menuVisible = false;
    }
  }
};
</script>
