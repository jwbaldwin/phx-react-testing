import React from "react";
import { createRoot } from "react-dom/client";

const roots = new Map();

export function mount(id: string, Component: any, opts = []) {
  const rootElement = document.getElementById(id) as HTMLElement;

  let root = roots.get(id);
  if (!root) {
    root = createRoot(rootElement);
    roots.set(id, root);
  }

  root.render(
    <React.StrictMode>
      <Component {...opts} />
    </React.StrictMode>,
  );

  return () => {
    root.unmount();
    roots.delete(id);
  };
}
