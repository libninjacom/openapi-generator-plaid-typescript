/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.64.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Institution } from './institution';

/**
* InstitutionsGetResponse defines the response schema for `/institutions/get`
*/
export class InstitutionsGetResponse extends null<String, any> {
    /**
    * A list of Plaid institutions
    */
    'institutions': Array<Institution>;
    /**
    * The total number of institutions available via this endpoint
    */
    'total': number;
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "institutions",
            "baseName": "institutions",
            "type": "Array<Institution>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InstitutionsGetResponse.attributeTypeMap);
    }
}

