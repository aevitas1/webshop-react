// import { useQueryClient } from 'react-query';

// export const useGetFetchQuery = (name) => {
//     const queryClient = useQueryClient();
//     return queryClient.getQueryData(name);
// }

import { useQuery } from 'react-query';
import axios from 'axios';

export const getLinks = () => {
    return useQuery('links', async () => {
        const links = await axios("./data/links.json");
        return links;
    })
}