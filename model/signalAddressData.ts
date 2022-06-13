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
* Data about the components comprising an address.
*/
export class SignalAddressData extends null<String, any> {
    /**
    * The full city name
    */
    'city'?: string;
    /**
    * The region or state Example: `\"NC\"`
    */
    'region'?: string | null;
    /**
    * The full street address Example: `\"564 Main Street, APT 15\"`
    */
    'street'?: string;
    /**
    * The postal code
    */
    'postalCode'?: string | null;
    /**
    * The ISO 3166-1 alpha-2 country code
    */
    'country'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "street",
            "baseName": "street",
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
        return super.getAttributeTypeMap().concat(SignalAddressData.attributeTypeMap);
    }
}
