import { api } from "./api";

export async function getCountry(code) {
    return api(`/country/${code}`);
}