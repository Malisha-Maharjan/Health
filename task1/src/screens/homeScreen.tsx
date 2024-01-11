import { TableItems } from "./Components/tableItems";

const baseURL = import.meta.env.VITE_BASE_URL;
export const HomeScreen = () => {
  console.log({ baseURL });
  return (
    <>
      <TableItems />
    </>
  );
};
