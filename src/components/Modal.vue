<template>
  <div>
    <md-dialog :md-active="showModal">
      <div v-if="mode === 'create'">
        <md-field>
          <md-input placeholder="Title" v-model="newCard.title"></md-input>
        </md-field>

        <md-field>
          <md-textarea placeholder="Content" v-model="newCard.content"></md-textarea>
        </md-field>
      </div>

      <div v-if="mode === 'edit'">
        <md-field>
          <md-input placeholder="Title" v-model="cardToEdit.title"></md-input>
        </md-field>

        <md-field>
          <md-textarea placeholder="Content" v-model="cardToEdit.content"></md-textarea>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('close-modal', false)">Cancel</md-button>
        <md-button class="md-primary" @click="$emit('close-modal', false)">Save</md-button>
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
export default {
  name: 'App',
  components: {},
  props: ['showModal', 'newCard', 'cardToEdit', 'mode']
};
</script>
