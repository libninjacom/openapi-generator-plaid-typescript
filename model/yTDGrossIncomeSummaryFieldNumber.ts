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
import { IncomeSummaryFieldNumber } from './incomeSummaryFieldNumber';
import { VerificationStatus } from './verificationStatus';

/**
* Year-to-date pre-tax earnings, as reported on the paystub.
*/
export class YTDGrossIncomeSummaryFieldNumber {
    /**
    * The value of the field.
    */
    'value': number;
    'verificationStatus': VerificationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "verificationStatus",
            "baseName": "verification_status",
            "type": "VerificationStatus"
        }    ];

    static getAttributeTypeMap() {
        return YTDGrossIncomeSummaryFieldNumber.attributeTypeMap;
    }
}

