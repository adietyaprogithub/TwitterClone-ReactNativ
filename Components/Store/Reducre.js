import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({

    name:'name',
    initialState:'',
    reducers:{

        setName:(state , action )=> {

            return action.payload
        }
    }
})

export const {setName} = Slice.actions;
export default Slice.reducer;