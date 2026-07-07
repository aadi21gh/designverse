import {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

import {
  studioReducer,
  initialStudioState,
} from "../reducers/studioReducer";

const StudioContext = createContext();

export function StudioProvider({ children }) {
  const [state, dispatch] = useReducer(
    studioReducer,
    initialStudioState
  );

  const elements = state.present;

  const selectedElement =
    elements.find(
      (el) => el.id === state.selectedId
    ) || null;

  const addElement = (element) => {
    dispatch({
      type: "ADD_ELEMENT",
      payload: element,
    });
  };

  const updateElement = (id, updates) => {
    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        id,
        updates,
      },
    });
  };

  const deleteElement = (id) => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: id,
    });
  };

  const duplicateElement = (id) => {
    dispatch({
      type: "DUPLICATE_ELEMENT",
      payload: id,
    });
  };

  const clearCanvas = () => {
    dispatch({
      type: "CLEAR_CANVAS",
    });
  };

  const undo = () => {
    dispatch({
      type: "UNDO",
    });
  };

  const redo = () => {
    dispatch({
      type: "REDO",
    });
  };
  
  const toggleVisibility = (id) => {
  dispatch({
    type: "TOGGLE_VISIBILITY",
    payload: id,
  });
};

const toggleLock = (id) => {
  dispatch({
    type: "TOGGLE_LOCK",
    payload: id,
  });
};

const bringToFront = (id) => {
  dispatch({
    type: "BRING_TO_FRONT",
    payload: id,
  });
};

const sendToBack = (id) => {
  dispatch({
    type: "SEND_TO_BACK",
    payload: id,
  });
};

  const setSelectedId = (id) => {
    dispatch({
      type: "SELECT_ELEMENT",
      payload: id,
    });
  };
  
  const moveLayerUp = (id) => {
  dispatch({
    type: "MOVE_LAYER_UP",
    payload: id,
  });
};

const moveLayerDown = (id) => {
  dispatch({
    type: "MOVE_LAYER_DOWN",
    payload: id,
  });
};

const loadDesign = (elements) => {
  dispatch({
    type: "LOAD_DESIGN",
    payload: elements,
  });
};

  const value = useMemo(
    () => ({
      elements,

      selectedId: state.selectedId,
      selectedElement,

      addElement,
      updateElement,
      deleteElement,
      duplicateElement,
      clearCanvas,
      toggleVisibility,
      toggleLock,
      bringToFront,
      sendToBack,
      moveLayerUp,
      moveLayerDown,
      loadDesign,

      setSelectedId,

      undo,
      redo,

      canUndo: state.past.length > 0,
      canRedo: state.future.length > 0,
    }),
    [state]
  );

  return (
    <StudioContext.Provider value={value}>
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  return useContext(StudioContext);
}