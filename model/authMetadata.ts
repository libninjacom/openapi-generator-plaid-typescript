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
import { AuthSupportedMethods } from './authSupportedMethods';

/**
* Metadata that captures information about the Auth features of an institution.
*/
export class AuthMetadata extends null<String, any> {
    'supportedMethods': AuthSupportedMethods | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "supportedMethods",
            "baseName": "supported_methods",
            "type": "AuthSupportedMethods"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AuthMetadata.attributeTypeMap);
    }
}
