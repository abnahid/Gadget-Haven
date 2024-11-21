import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Gadget | ${title}`;
  }, [title]);
};
