import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import exam from "../features/exam/examSlice";
export default configureStore({ reducer: { auth, exam } });
