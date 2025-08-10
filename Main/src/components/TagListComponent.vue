<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        selected: {
            type: String,
            default: null
        }
    }
}
</script>

<template>
    <div class="tags-list">
        <span 
            v-for="item in items" 
            :key="item" 
            @click="$emit('onItemClick', item)"
            :class="{ 'active': item === selected }"
            class="tag-item">
            {{ item }}
        </span>
    </div>
</template>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag-item {
  padding: 4px 12px;
  background-color: #f0f0f0;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &.active {
    background-color: #444ce0;
    color: white;
  }
}
</style>