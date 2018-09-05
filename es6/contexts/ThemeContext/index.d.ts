import * as React from "react";

export type ThemeValue = object;

export interface ThemeContext extends React.Context<ThemeValue> {
  Extend: React.StatelessComponent<{ value: ThemeValue }>
}

declare const ThemeContext: ThemeContext;

export { ThemeContext };

