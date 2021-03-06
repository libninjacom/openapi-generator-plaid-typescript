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
* Information about the device being used to initiate the authorization.
*/
export class TransferAuthorizationDevice extends null<String, any> {
    /**
    * The IP address of the device being used to initiate the authorization.
    */
    'ipAddress'?: string;
    /**
    * The user agent of the device being used to initiate the authorization.
    */
    'userAgent'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferAuthorizationDevice.attributeTypeMap);
    }
}

