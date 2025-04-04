import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Form/formSlice.ts";



export const store = configureStore({
    reducer: {
        form: formReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof index.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof index.dispatch;