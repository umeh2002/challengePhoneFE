import { useQuery } from "@tanstack/react-query";
import { getContact } from "../api/phoneApi";

export const useGetContact = () => {
  const { data:allContact } = useQuery({
    queryKey: ["getContact"],
    queryFn: getContact,
    refetchInterval:1000
  });

  return { allContact };
};
