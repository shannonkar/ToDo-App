import axios from 'axios'

const state = {
    todos: []

}
const getters = {
    allTodos:  (state) => state.todos
}
const actions = {
    async fetchTodos({commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data)
        commit('setTodos',response.data)  //name of mutation method and what is being passed in
    }
}
const mutations = {
    setTodos: (state, todos) => (state.todos =todos)
}

export default{
    state,
    getters,
    actions,
    mutations
}
