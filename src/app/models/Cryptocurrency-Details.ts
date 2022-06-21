
import { Cryptocurrency } from "./Cryptocurrency";

export interface CryptocurrencyDetails extends Omit<Cryptocurrency,'max_supply'|'quote'>{
    category: string;
    description: string;
    logo: string;
}