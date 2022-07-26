import { AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, any, unknown, AnyAction> => async (
  dispatch: ThunkDispatch<any, unknown, AnyAction>
): Promise<void> => {
  try {
    dispatch({
      type: "USER_LOGIN",
    });

    const { data } = await axios.post(`localhost:3001/api/login`, {
      email,
      password,
    });
    console.log(data);
  } catch (err) {}
};
