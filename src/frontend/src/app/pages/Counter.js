import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import {
  decreaseCounter,
  fetchUsers,
  increaseCounter,
} from "../../redux/slices/counterSlice";
import Loader from "../components/Loader";

function Counter(props) {
  const dispatch = useDispatch();
  const {
    loading,
    value,
    user: { results },
  } = useSelector((state) => state.counter);

  useEffect(() => dispatch(fetchUsers()), []);

  return (
    <div style={{ margin: 20 }}>
      <Loader loading={loading} />
      <div>
        {results[0] && results[0].name.first}{" "}
        {results[0] && results[0].name.last}
      </div>
      <div>This is counter {value}</div>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      <button onClick={() => dispatch(fetchUsers())}>Fetch</button>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}

export default Counter;
