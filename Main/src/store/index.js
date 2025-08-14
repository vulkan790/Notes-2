import {createStore} from 'vuex';

const STORAGE_KEY = 'vue-notes-app';

export const store = createStore({
    state: {
        notes: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
            {
                title: 'Изучить vueJS',
                tags: 'Срочно важно'
            }
        ]
    },
    getters: {
        getNotes(state) {
            return state.notes;
        }
    },
    mutations: {
        ADD_NOTE(state, note) {
            state.notes.push(note);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
        },
        REMOVE_NOTE(state, index) {
            state.notes.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
        }
    },
    actions: {
        addNote(context, note) {
            context.commit('ADD_NOTE', note);
        },
        removeNote(context, index) {
            context.commit('REMOVE_NOTE', index);
        }
    }
});