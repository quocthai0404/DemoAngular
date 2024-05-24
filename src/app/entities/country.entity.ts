import { City } from "./city.entity";

export class Country{
    id: number;
    name: string;
    flag: string;
    area: number;
    cities: City[];
}