import { createAction } from "@reduxjs/toolkit";
const CREATE_AND_RESET = "create_and_reset";

export const createAndReset = createAction(CREATE_AND_RESET, (name, cost) => ({
  name,
  cost,
}));
