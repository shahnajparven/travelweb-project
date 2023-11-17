import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const regUser = createAsyncThunk("auth/regUser", async (body) => {
  const data  = await fetch("https://reqres.in/api/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await data.json();
});

export const loginUser = createAsyncThunk("auth/loginUser", async (body) => {
  const data = await fetch("https://reqres.in/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await data.json();
});


const initialState = {
  loading: false,
  user: {},
  error: null,
  isLoggedIn: false,
  token:'',
  msg:'',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducer: {
    addToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn=false;
      localStorage.clear();
      state.user=null;
    },
  },

  extraReducers: (builder) => {
    // reg user
    builder.addCase(regUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(regUser.fulfilled, (state, error, msg, token, user) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    });
    builder.addCase(regUser.rejected, (state) => {
      state.loading = true;
    });

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state, error, msg, token, user) => {
      state.loading = false;
      state.isLoggedIn = true;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.stringify(user));
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      state.isLoggedIn = false;
    });
  }
});
export const { reset, clearError,logout,addToken,addUser } = authSlice.actions;
export default authSlice.reducer;
