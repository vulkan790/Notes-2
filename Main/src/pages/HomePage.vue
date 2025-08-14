<script>
  import Form from '../components/FormComponent.vue'
  import List from '../components/ListComponent.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      Form,
      List,
    },
    computed: {
      ...mapState(['notes'])
    },
    methods: {
      ...mapActions(['addNote', 'removeNote']),
      handleSubmit(note) {
        this.addNote(note)
      },
      handleRemove(index) {
        this.removeNote(index)
      },
    }
  }
</script>

<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit"/>
    <List @onRemove="handleRemove" :items="notes"/>
  </div>
</template>