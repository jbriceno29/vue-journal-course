//export const muGetter = (state) => {
//    return state;
//};

//Las entradas que coincidan en una búsqueda
export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) {
      return state.entries;
    } else {
      return state.entries.filter((entry) =>
        entry.text.toLowerCase().includes(term.toLocaleLowerCase())
      );
    }
  };

export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return;

    return { ...entry };
    //return entry;
  };
