import React from "react";
import { User } from "../../types";

export type UserRowProps = {
  user: User | string;
  buttonElement: React.ReactNode;
};
