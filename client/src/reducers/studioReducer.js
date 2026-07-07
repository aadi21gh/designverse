export const initialStudioState = {
  past: [],
  present: [],
  future: [],
  selectedId: null,
};

function normalizeZIndex(elements) {
  return elements.map((element, index) => ({
    ...element,
    zIndex: index,
  }));
}

function pushHistory(state, elements) {
  return {
    ...state,
    past: [...state.past, state.present],
    present: normalizeZIndex(elements),
    future: [],
  };
}

export function studioReducer(state, action) {
  switch (action.type) {
    case "ADD_ELEMENT":
      return pushHistory(state, [
        ...state.present,
        {
          visible: true,
          locked: false,
          opacity: 1,
          createdAt: Date.now(),
          name: `${action.payload.type} ${state.present.length + 1}`,
          ...action.payload,
        },
      ]);

    case "UPDATE_ELEMENT":
      return pushHistory(
        state,
        state.present.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                ...action.payload.updates,
              }
            : el
        )
      );

    case "DELETE_ELEMENT":
      return {
        ...pushHistory(
          state,
          state.present.filter(
            (el) => el.id !== action.payload
          )
        ),
        selectedId: null,
      };

    case "SELECT_ELEMENT":
      return {
        ...state,
        selectedId: action.payload,
      };

    case "CLEAR_CANVAS":
      return {
        ...pushHistory(state, []),
        selectedId: null,
      };

    case "DUPLICATE_ELEMENT": {
      const element = state.present.find(
        (el) => el.id === action.payload
      );

      if (!element) return state;

      return pushHistory(state, [
        ...state.present,
        {
          ...element,
          id: crypto.randomUUID(),
          name: `${element.name} Copy`,
          x: element.x + 20,
          y: element.y + 20,
        },
      ]);
    }

    case "TOGGLE_VISIBILITY":
      return pushHistory(
        state,
        state.present.map((el) =>
          el.id === action.payload
            ? {
                ...el,
                visible: !el.visible,
              }
            : el
        )
      );

    case "TOGGLE_LOCK":
      return pushHistory(
        state,
        state.present.map((el) =>
          el.id === action.payload
            ? {
                ...el,
                locked: !el.locked,
              }
            : el
        )
      );

    case "BRING_TO_FRONT": {
      const list = [...state.present];
      const index = list.findIndex(
        (el) => el.id === action.payload
      );

      if (index === -1) return state;

      const [item] = list.splice(index, 1);
      list.push(item);

      return pushHistory(state, list);
    }

    case "SEND_TO_BACK": {
      const list = [...state.present];
      const index = list.findIndex(
        (el) => el.id === action.payload
      );

      if (index === -1) return state;

      const [item] = list.splice(index, 1);
      list.unshift(item);

      return pushHistory(state, list);
    }

    case "MOVE_LAYER_UP": {
      const list = [...state.present];
      const index = list.findIndex(
        (el) => el.id === action.payload
      );

      if (
        index === -1 ||
        index === list.length - 1
      )
        return state;

      [list[index], list[index + 1]] = [
        list[index + 1],
        list[index],
      ];

      return pushHistory(state, list);
    }

    case "MOVE_LAYER_DOWN": {
      const list = [...state.present];
      const index = list.findIndex(
        (el) => el.id === action.payload
      );

      if (index <= 0) return state;

      [list[index], list[index - 1]] = [
        list[index - 1],
        list[index],
      ];

      return pushHistory(state, list);
    }

    case "UNDO": {
      if (!state.past.length) return state;

      return {
        ...state,
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future],
        past: state.past.slice(0, -1),
        selectedId: null,
      };
    }

    case "REDO": {
      if (!state.future.length) return state;

      return {
        ...state,
        present: state.future[0],
        future: state.future.slice(1),
        past: [...state.past, state.present],
        selectedId: null,
      };
    }

    case "LOAD_DESIGN":
      return {
    ...state,
    past: [],
    future: [],
    present: normalizeZIndex(action.payload),
    selectedId: null,
  };

    default:
      return state;
  }
}