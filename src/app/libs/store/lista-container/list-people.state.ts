import { createAction, createReducer, on, props } from "@ngrx/store"

export interface IListPeopleState {
    listPeople: any,
    listCount: number, 
    listPage: number
}

export const listPeopleInitialState: IListPeopleState = {
    listPeople: [],
    listCount: 0,
    listPage: 1
}

export const loadListPeopleAction = createAction('[List People] Carrega Lista todos os personagens', props<{page: number}>);
export const listPeopleAction = createAction('[List People] Lista todos os personagens', (payload: any) => ({ payload }));
export const listPeopleSuccess = createAction('[List People] [Success] Lista todos os personagens');

export const listPeopleReducer = createReducer(
    listPeopleInitialState,
    on(listPeopleAction, (state, payload) => {
        state = {
            ...state,
            listPeople: payload.payload.data.results,
            listCount: payload.payload.data.count,
        }
        return state
    })    
)