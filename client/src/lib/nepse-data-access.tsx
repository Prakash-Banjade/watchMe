import { API } from "./api";

// interface Result {
//     stocks: Stock[],
//     nepse: Nepse
// }

export async function getNepseData() {
    const response = await fetch(`${API}/shareMarket`);

    if (!response.ok) throw new Error('Failed to fetch data');

    const data: Stock[] = await response.json();

    return data;
}