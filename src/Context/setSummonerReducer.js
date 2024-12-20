import { types } from "../types/types";

export const setSummonerReducer = ( state = {} , action ) => {

    switch (action.type) {
        case types.search:
            return {
                ...state,
                summoner: action.payload
            };
        
        case types.setFullSummoner:
            return {
                ...state,
                fullProfile: action.payload
            };
        
        case types.setServer:
            return {
                ...state,
                server: action.payload
            };
        // case types.render:
        //     return {
        //         ...state,
        //         logged: false,
        //         name: 'no user'
        //     };


        default:
            break;
    }

}