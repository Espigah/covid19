const randomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16) + '88';
};

const filter = (a) => {
  return (b) => {
    const value_a = a.slug || a.label;
    const value_b = b.slug || b.label;
    return value_a === value_b;
  };
};

export default {
  add(state, data) {
    let list = state.list;
    const index = list.findIndex(filter(data));
    if (index > -1) {
      return;
    }
    const clone = { ...data, color: randomColor(), hidden: false };
    list.push(clone);
    state.lastAdded = clone;
  },

  remove(state, data) {
    let list = state.list;
    const index = list.findIndex(filter(data));
    if (index < 0) {
      return;
    }
    const removed = list.splice(index, 1);
    state.lastRemoved = { ...removed[0], index };
  },

  hidden(state, { hidden, label, index }) {
    state.hidden = { hidden, label, index };
  },
};
