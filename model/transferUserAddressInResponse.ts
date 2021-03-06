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

/**
* The address associated with the account holder.
*/
export class TransferUserAddressInResponse extends null<String, any> {
    /**
    * The street number and name (i.e., \"100 Market St.\").
    */
    'street': string | null;
    /**
    * Ex. \"San Francisco\"
    */
    'city': string | null;
    /**
    * The state or province (e.g., \"California\").
    */
    'region': string | null;
    /**
    * The postal code (e.g., \"94103\").
    */
    'postalCode': string | null;
    /**
    * A two-letter country code (e.g., \"US\").
    */
    'country': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferUserAddressInResponse.attributeTypeMap);
    }
}

