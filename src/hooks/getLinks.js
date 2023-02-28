import { useQuery } from 'react-query';
import axios from 'axios';

export const getLinks = () => {
    return useQuery('links', async () => {
        const links = await axios("./data/links.json");
        return links;
    })
}