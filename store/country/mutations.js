const randomColor = () => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "88";
};

export default {
  add(state, data) {
    let list = state.list;
    const index = list.findIndex(x => x.label == data.label);
    if (index > -1) {
      return;
    }
    const clone = { ...data, color: randomColor(), hidden: false };
    list.push(clone);
    state.lastAdded = clone;
  },

  remove(state, countryLabel) {
    let list = state.list;
    const index = list.findIndex(x => x.label == countryLabel);
    if (index < 0) {
      return;
    }
    var removed = list.splice(index, 1);
    state.lastRemoved = { ...removed[0], index };
  }
};
