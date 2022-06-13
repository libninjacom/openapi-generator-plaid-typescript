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
* An object representing the total deductions for the pay period
*/
export class DeductionsTotal extends null<String, any> {
    /**
    * Raw amount of the deduction
    */
    'currentAmount'?: number | null;
    /**
    * The ISO-4217 currency code of the line item. Always `null` if `unofficial_currency_code` is non-null.
    */
    'isoCurrencyCode'?: string | null;
    /**
    * The unofficial currency code associated with the line item. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.  See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
    */
    'unofficialCurrencyCode'?: string | null;
    /**
    * The year-to-date total amount of the deductions
    */
    'ytdAmount'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentAmount",
            "baseName": "current_amount",
            "type": "number"
        },
        {
            "name": "isoCurrencyCode",
            "baseName": "iso_currency_code",
            "type": "string"
        },
        {
            "name": "unofficialCurrencyCode",
            "baseName": "unofficial_currency_code",
            "type": "string"
        },
        {
            "name": "ytdAmount",
            "baseName": "ytd_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeductionsTotal.attributeTypeMap);
    }
}

