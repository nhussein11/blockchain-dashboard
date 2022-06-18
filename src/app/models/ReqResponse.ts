import { Cryptocurrency, Status } from "./Cryptocurrency";
import { CryptocurrencyDetails } from "./Cryptocurrency-Details";

export interface ReqRepResponse {
    status: Status;
    data1: Cryptocurrency[];    
    data2: CryptocurrencyDetails;
}
