import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../helpers/baseUrl";

export const useFetchItems = () => {
  return useQuery({
    queryKey: ["testData"],
    queryFn: async () => {
      console.log({ baseURL });
      const data = await fetch(
        `${baseURL}/investigation/patient-id/KE8I45HP/items`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "API-Key": "111588491112680278288",
          },
        }
      );
      const response = await data.json();
      console.log({ response });
      return response;
    },
  });
};
