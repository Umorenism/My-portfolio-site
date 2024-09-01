declare module "react-typed" {
  import { ComponentType } from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    fadeOut?: boolean;
    fadeOutDelay?: number;
    startDelay?: number;
    backDelay?: number;
  }

  const Typed: ComponentType<TypedProps>;

  export default Typed;
}
