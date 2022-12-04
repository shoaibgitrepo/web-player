const toast = (store) => (next) => (action) => {
  console.log("toast thunk");
  if (action.type === "error") console.log("Toastify", action.payload.messege);
  else return next(action);
};

export default toast;
