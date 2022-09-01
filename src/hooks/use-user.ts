import { useLocalStorage } from "./use-local-storage";
import { v4 } from "uuid";

export const useUser = (): {
  username: string;
} => {
  const [username] = useLocalStorage("username", v4());

  return { username };
};
