// export interface Cryptocurrency{
//     id?:number;
//     name?:string;
//     symbol?:string;
//     price?:number;
//     maxSuply?: number;
//     description?:string;
//     category?:string;
//     logo?:string;
// }



export interface Cryptocurrency {
    id:                               number;
    name:                             string;
    symbol:                           string;
    slug:                             string;
    num_market_pairs:                 number;
    date_added:                       Date;
    tags:                             string[];
    max_supply:                       number | null;
    circulating_supply:               number;
    total_supply:                     number;
    platform:                         Blockchain | null;
    cmc_rank:                         number;
    self_reported_circulating_supply: number | null;
    self_reported_market_cap:         number | null;
    last_updated:                     Date;
    quote:                            Quote;
}

export interface Blockchain {
    id:            number;
    // name:          Name;
    symbol:        Symbol;
    // slug:          Slug;
    token_address: string;
}

// export enum Name {
//     Bnb = "BNB",
//     Celo = "Celo",
//     Ethereum = "Ethereum",
//     HuobiToken = "Huobi Token",
//     Klaytn = "Klaytn",
//     Secret = "Secret",
//     TRON = "TRON",
// }

// export enum Slug {
//     Bnb = "bnb",
//     Celo = "celo",
//     Ethereum = "ethereum",
//     HuobiToken = "huobi-token",
//     Klaytn = "klaytn",
//     Secret = "secret",
//     TRON = "tron",
// }

// export enum Symbol {
//     Bnb = "BNB",
//     Celo = "CELO",
//     Eth = "ETH",
//     HT = "HT",
//     Klay = "KLAY",
//     Scrt = "SCRT",
//     Trx = "TRX",
// }

export interface Quote {
    USD: Usd;
}

export interface Usd {
    price:                    number;
    volume_24h:               number;
    volume_change_24h:        number;
    percent_change_1h:        number;
    percent_change_24h:       number;
    percent_change_7d:        number;
    percent_change_30d:       number;
    percent_change_60d:       number;
    percent_change_90d:       number;
    market_cap:               number;
    market_cap_dominance:     number;
    fully_diluted_market_cap: number;
    last_updated:             Date;
}

export interface Status {
    timestamp:     Date;
    error_code:    number;
    error_message: null;
    elapsed:       number;
    credit_count:  number;
    notice:        null;
    total_count:   number;
}
