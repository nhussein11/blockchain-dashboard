export interface OwnedNft {
    // contract:        Contract;
    // id:              ID;
    balance:         string;
    title:           string;
    description:     string;
    // tokenUri:        TokenURI;
    // media:           Media[];
    metadata:        Nft;
    timeLastUpdated: Date;
}
export interface Nft{
    name?:             string;
    description?:      string;
    image?:            string;
    // video?:            string;
    external_url?:     string;
    // attributes?:       Attribute[] | AttributesClass;
    date?:             number;
    dna?:              string;
    edition?:          number;
    compiler?:         string;
    background_image?: string;
    is_normalized?:    boolean;
    segment_length?:   number;
    image_url?:        string | any;
    name_length?:      number;
    version?:          number;
    url?:              string;
    background_color?: string;
    liveModel?:        string;
    poster?:           string;
    video?:string;
    
    is_favorite?:boolean;
    is_nft?:boolean;
}