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

import { HttpFile } from '../http/http';

/**
* A cooldown is a period of time in which a ship cannot perform certain actions.
*/
export class Cooldown {
    /**
    * The symbol of the ship that is on cooldown
    */
    'shipSymbol': string;
    /**
    * The total duration of the cooldown in seconds
    */
    'totalSeconds': number;
    /**
    * The remaining duration of the cooldown in seconds
    */
    'remainingSeconds': number;
    /**
    * The date and time when the cooldown expires in ISO 8601 format
    */
    'expiration': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shipSymbol",
            "baseName": "shipSymbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalSeconds",
            "baseName": "totalSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "remainingSeconds",
            "baseName": "remainingSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "string",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Cooldown.attributeTypeMap;
    }

    public constructor() {
    }
}

