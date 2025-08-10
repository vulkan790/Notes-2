<script>
  import Form from '../components/FormComponent.vue'
  import List from '../components/ListComponent.vue'

  export default {
    components: {
      Form,
      List,
    },
    data() {
      return {
        notes: [
          {
            title: 'Изучить vueJS',
            tags: 'Срочно важно'
          }
        ]
      }
    },
    methods: {
      handleSubmit(note) {
        this.notes.push(note)
      },
      handleRemove(index) {
        this.notes.splice(index, 1)
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