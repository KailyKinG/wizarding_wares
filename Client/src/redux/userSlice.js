import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios  from "axios";

const initialState = {
  products: [],
  allProducts: [],
  detail: [],
  display: ''    
}

export const filterCategory = createAsyncThunk(
  'user/filterCategory',
  async (filter) => {
    try {
      const response = await axios.get(`http://localhost:3001/filteredProducts?category=${filter}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error obtaining filtered products', error);
      throw error;      
    }
  }
)

//MANEJO DE ESTADOS DE REQUEST Y PAYLOADS

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(filterCategory.fulfilled, (state,action) => {
      state.loading = false
      state.products = action.payload;
    })
    .addCase(filterCategory.rejected, (state,action) => {
      state.loading = false
      console.error('Error obtaining filtered products ', action.error);
    })
    .addCase(filterCategory.pending, (state,action) => {
      state.loading = true
      console.log(action);
    })

  }
})
//export const {  } = userSlice.actions

export default userSlice.reducer