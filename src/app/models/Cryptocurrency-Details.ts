// export interface Welcome {
//     status: Status;
//     data:   Data;
// }

// export interface Data {
//     "2010": The2010;
// }

export interface CryptocurrencyDetails {
    id:                               number;
    name:                             string;
    symbol:                           string;
    category:                         string;
    description:                      string;
    slug:                             string;
    logo:                             string;
    subreddit:                        string;
    notice:                           string;
    tags:                             string[];
    "tag-names":                      string[];
    "tag-groups":                     string[];
    urls:                             Urls;
    platform:                         null;
    date_added:                       Date;
    twitter_username:                 string;
    is_hidden:                        number;
    date_launched:                    Date;
    contract_address:                 ContractAddress[];
    self_reported_circulating_supply: null;
    self_reported_tags:               string[];
    self_reported_market_cap:         null;
}

export interface ContractAddress {
    contract_address: string;
    platform:         Platform;
}

export interface Platform {
    name: string;
    coin: Coin;
}

export interface Coin {
    id:     string;
    name:   string;
    symbol: string;
    slug:   string;
}

export interface Urls {
    website:       string[];
    twitter:       string[];
    message_board: string[];
    chat:          string[];
    facebook:      any[];
    explorer:      string[];
    reddit:        string[];
    technical_doc: string[];
    source_code:   string[];
    announcement:  string[];
}

export interface Status {
    timestamp:     Date;
    error_code:    number;
    error_message: null;
    elapsed:       number;
    credit_count:  number;
    notice:        null;
}
