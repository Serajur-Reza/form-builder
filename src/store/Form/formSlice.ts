import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addElement: (state, action) => {
      // console.log(action.payload)
      // const temp = [...state.forms, action.payload]
      // console.log(state.forms)
      // console.log(temp)
      // state.forms = temp
      state.forms.push(action.payload);
      // return state.forms
    },
    removeElement: (state, action) => {
      // console.log(action.payload)
      // let temp = [...state.forms]
      // console.log(temp)
      // temp = state.forms.splice(action.payload, 1)
      // state.forms = temp
      state.forms.splice(action.payload, 1);
    },

    clearForm: (state) => {
      // console.log(action.payload)
      // let temp = [...state.forms]
      // console.log(temp)
      // temp = state.forms.splice(action.payload, 1)
      // state.forms = temp
      state.forms = [];
    },

    reorderElements: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      const [removed] = state.forms.splice(oldIndex, 1);
      state.forms.splice(newIndex, 0, removed);
    },
  },
});

export const { addElement, removeElement, clearForm, reorderElements } =
  formSlice.actions;

export default formSlice.reducer;
