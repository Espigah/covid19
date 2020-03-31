export default {
  add(state, { text }) {
    debugger;
    state.list.push({
      text,
      done: false
    });
  },

  remove(state, todo) {
    debugger;
    todo.done = !todo.done;
  }
};
