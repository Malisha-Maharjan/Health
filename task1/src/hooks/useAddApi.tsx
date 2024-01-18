import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseURL } from "../helpers/baseUrl";
import { FormContent } from "../screens/Components/AddItems/addItems";

export const useAddItems = () => {
  const queryClient = useQueryClient();
  console.log("adding items");
  return useMutation({
    mutationFn: async (postData: FormContent) => {
      console.log({ postData });
      const data = await fetch(`${baseURL}/investigation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": "111588491112680278288",
        },
        body: JSON.stringify(postData),
      });
      const response = await data.json();
      console.log("this is from post");
      console.log(response);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testData"] });
    },
  });
};
