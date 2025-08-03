// components/Conditional.tsx
import { isValidElement, type ReactNode } from "react";

type ConditionalProps = {
  children: ReactNode;
};

type BranchProps = {
  condition?: boolean;
  children: ReactNode;
};

const If = ({ condition, children }: BranchProps) =>
  condition ? children : null;

const ElseIf = ({ condition, children }: BranchProps) =>
  condition ? children : null;

const Else = ({ children }: { children: ReactNode }) => <>{children}</>;

export function Conditional({ children }: ConditionalProps) {
  let matched = false;

  const result = [];

  const childrenArray = Array.isArray(children) ? children : [children];

  for (const child of childrenArray) {
    if (!isValidElement(child)) continue;

    const { type, props } = child;

    if (
      (type === If || type === ElseIf) &&
      !matched &&
      typeof props === "object" &&
      props !== null &&
      "condition" in props &&
      (props as BranchProps).condition
    ) {
      matched = true;
      result.push(child);
    }

    if (type === Else && !matched) {
      matched = true;
      result.push(child);
    }
  }

  return <>{result}</>;
}

Conditional.If = If;
Conditional.ElseIf = ElseIf;
Conditional.Else = Else;
