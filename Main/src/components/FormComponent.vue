<script>
import TagList from './TagListComponent.vue'

export default {
    components: {
        TagList
    },
    data() {
        return {
            value: '',
            tags: ["Срочно важно", "Несрочно важно", "Срочно неважно", "Несрочно неважно"],
            selectedTag: null,
            editingIndex: null,
            editInput: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.editingIndex === null) {
                if (!this.value.trim()) return;
                
                const newNote = {
                    title: this.value,
                    tags: this.selectedTag || this.tags[0] 
                };
                
                this.$emit('onSubmit', newNote);
                this.value = '';
                this.selectedTag = null;
            } else {
                console.log('Edited note:', this.editInput);
                this.cancelEditing();
            }
        },
        cancelEditing() {
            this.editingIndex = null;
            this.editInput = '';
        },
        handleTagClick(tag) {
            this.selectedTag = tag;
        }
    }
}
</script>

<template>
    <div class="note-form__wrapper">
        <form class="note-form" @submit.prevent="onSubmit">
            <input 
                v-if="editingIndex === null"
                type="text" 
                required 
                v-model="value" 
                placeholder="Type your note"
                class="note-input"/>
            <input 
                v-else
                type="text" 
                required 
                v-model="editInput" 
                placeholder="Edit your note"
                class="note-input"/>
            <p style="margin: 10px 0 5px; align-self: flex-start;">Приоритет:</p>
            <TagList 
                @onItemClick="handleTagClick" 
                :items="tags"
                :selected="selectedTag"/>
            <button class="btn btnPrimary" type="submit">
                {{ editingIndex === null ? 'Add new note' : 'Save changes' }}
            </button>
        </form>
    </div>
</template>

<style lang="scss">
.note-form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.note-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 20px;
}

.note-input {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}
</style>