/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * OpenAPI spec version: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ShipRequirements } from '../models/ShipRequirements';
import { HttpFile } from '../http/http';

/**
* The reactor of the ship. The reactor is responsible for powering the ship\'s systems and weapons.
*/
export class ShipReactor {
    'symbol': ShipReactorSymbolEnum;
    'name': string;
    'description': string;
    /**
    * Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new.
    */
    'condition'?: number;
    'powerOutput': number;
    'requirements': ShipRequirements;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "ShipReactorSymbolEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "condition",
            "baseName": "condition",
            "type": "number",
            "format": ""
        },
        {
            "name": "powerOutput",
            "baseName": "powerOutput",
            "type": "number",
            "format": ""
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "ShipRequirements",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ShipReactor.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ShipReactorSymbolEnum = "REACTOR_SOLAR_I" | "REACTOR_FUSION_I" | "REACTOR_FISSION_I" | "REACTOR_CHEMICAL_I" | "REACTOR_ANTIMATTER_I" ;

