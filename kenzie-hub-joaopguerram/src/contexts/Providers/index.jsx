import { TechProvider } from "../TechContexts";
import { UserProvider } from "../UserContext";
export const Providers = ({ children }) => {
  return (
    <UserProvider>
      {" "}
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};
