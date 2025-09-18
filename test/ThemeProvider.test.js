import React, { createContext, useState, useEffect } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, themeToggler } from "../src/Context/ThemeToggler";
import { useContext } from "react";

const TestComponent = () => {
  const { theme, handleToggleTheme } = useContext(themeToggler);
  return (
    <div>
      <p data-testid="theme">{theme}</p>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("defaults to light theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  it("toggles theme between light and dark", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /toggle theme/i });

    await userEvent.click(button);
    expect(screen.getByTestId("theme").textContent).toBe("dark");

    await userEvent.click(button);
    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  it("persists theme to localStorage", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: /toggle theme/i });
    await userEvent.click(button);

    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
