<script>
import TagList from './TagListComponent.vue'

export default {
    components: {
      TagList
    },
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>

<template>
    <div class="notes-list">
        <div class="note-item" v-for="(note, index) in items" :key="index">
            <div class="note-content">
                <span class="note-text">{{ note.title }}</span>
                <span class="note-tag">{{ note.tags }}</span>
                <span class="delete-btn" @click="$emit('onRemove', index)">×</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.notes-list {
    margin-top: 20px;
}

.note-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
}

.note-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.note-tag {
    color: #666;
    font-size: 0.9em;
}

.delete-btn {
    margin-left: auto;
    cursor: pointer;
    color: #999;
    font-size: 1.2em;
    
    &:hover {
        color: #ff4444;
    }
}
</style>