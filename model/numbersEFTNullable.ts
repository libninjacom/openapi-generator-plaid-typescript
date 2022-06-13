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
import { NumbersEFT } from './numbersEFT';

/**
* Identifying information for transferring money to or from a Canadian bank account via EFT.
*/
export class NumbersEFTNullable {
    /**
    * The Plaid account ID associated with the account numbers
    */
    'accountId': string;
    /**
    * The EFT account number for the account
    */
    'account': string;
    /**
    * The EFT institution number for the account
    */
    'institution': string;
    /**
    * The EFT branch number for the account
    */
    'branch': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "institution",
            "baseName": "institution",
            "type": "string"
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NumbersEFTNullable.attributeTypeMap;
    }
}

