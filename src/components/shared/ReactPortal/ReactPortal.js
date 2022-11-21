import React from "react";
import { createPortal } from "react-dom";

function ReactPortal({ children, wrapperId = "modal-root" }) {
  return createPortal(children, document.getElementById(wrapperId));
}
export default ReactPortal;
