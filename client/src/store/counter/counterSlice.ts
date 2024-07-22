import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export interface CounterState {
    value: number;
    loading: boolean;
}

const initialState: CounterState = {
    value: 0,
    loading: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -=1
        },
        incrementBy5: (state) => {
            state.value += 5
        },
        decrementBy5: (state) => {
            state.value -= 5
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
                console.log('pending')
            })
            .addCase(incrementAsync.fulfilled, (state, actions: PayloadAction<number>) => {
                state.value += actions.payload
                state.loading = false;
                console.log('fulfilled');
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.loading = false;
                console.log('rejected')
            })
            .addCase(decrementAsync.pending, (state) => {
                state.loading = true;
                console.log('pending')
            })
            .addCase(decrementAsync.fulfilled, (state, actions: PayloadAction<number>) => {
                state.value -= actions.payload
                state.loading = false;
                console.log('fulfilled');
            })
            .addCase(decrementAsync.rejected, (state) => {
                state.loading = false;
                console.log('rejected')
            })
    }
});

export const incrementAsync = createAsyncThunk<number, number,  { state: RootState, dispatch: AppDispatch }>(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return amount;
    }
);

export const decrementAsync = createAsyncThunk<number, number,  { state: RootState, dispatch: AppDispatch }>(
    'counter/decrementAsync',
    async (amount: number) => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return amount;
    }
)

export const { increment , decrement, incrementBy5, decrementBy5 } = counterSlice.actions;

export default counterSlice.reducer;