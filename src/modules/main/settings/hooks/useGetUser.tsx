import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/request";

export const useGetUser = () => {
    const { data: user, isLoading: userLoading, error: userError } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: "always",
    });


    return {
        fetchedUser: user?.user,
        userLoading,
        userError
    }

}