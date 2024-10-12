import { auth } from "./auth-reducer.ts";

const SUCCESS_INITIALIZED = "SUCCESS_INITIALIZED";

type InitialStateType = {
  initialized: boolean,
}

let initialState: InitialStateType = {
  initialized: false,
};

let appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SUCCESS_INITIALIZED:
      return {
        ...state,
        initialized: true,

      };

    default:
      return state;
  }
};

export default appReducer;

type sucessInitializedType = {
  type: typeof SUCCESS_INITIALIZED
}
export let succesInitialized = (): sucessInitializedType => ({
  type: SUCCESS_INITIALIZED,
});

export let initialize = () => (dispatch: any) => {
  let promise = dispatch(auth());
  Promise.all([promise]).then(() => {
    dispatch(succesInitialized());
  });
};
