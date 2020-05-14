<template>
  <div>
    <md-dialog md-active>
      <md-field>
        <md-input placeholder="Title" v-model="dialogNote.title"></md-input>
      </md-field>

      <md-field>
        <md-textarea placeholder="Content" v-model="dialogNote.content"></md-textarea>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()">Cancel</md-button>
        <md-button class="md-primary" @click="saveNote(dialogNote)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<style scoped>
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

var db = new PouchDB('notes');

const emptyNote = function() {
  console.log('emptyNote called');
  return {
    title: '',
    content: ''
  };
};

export default {
  name: 'NoteDialog',
  props: {
    note: {
      type: Object,
      default: emptyNote
    }
  },
  data: function() {
    return {
      dialogNote: this.note
    };
  },
  methods: {
    closeDialog: function() {
      this.$emit('close');
    },
    saveNote: function(note) {
      db.put({ ...note, _id: note._id || uid() });
      this.closeDialog();
    }
  }
};
</script>
