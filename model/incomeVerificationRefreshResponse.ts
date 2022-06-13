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
import { VerificationRefreshStatus } from './verificationRefreshStatus';

/**
* IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
*/
export class IncomeVerificationRefreshResponse extends null<String, any> {
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;
    'verificationRefreshStatus': VerificationRefreshStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        },
        {
            "name": "verificationRefreshStatus",
            "baseName": "verification_refresh_status",
            "type": "VerificationRefreshStatus"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IncomeVerificationRefreshResponse.attributeTypeMap);
    }
}

