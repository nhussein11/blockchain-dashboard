export interface Cryptocurrency {
    id:                               number;
    name:                             string;
    symbol:                           string;
    max_supply:                       number;
    quote:                            Quote;
}
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

export interface CryptocurrencyDetailsGraphic extends Omit<Cryptocurrency,'id'|'name' | 'symbol'>{}