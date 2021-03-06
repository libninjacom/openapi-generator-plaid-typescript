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
* An object representing a balance held by an account in the past
*/
export class HistoricalBalance extends null<String, any> {
    /**
    * The date of the calculated historical balance, in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD)
    */
    'date': string;
    /**
    * The total amount of funds in the account, calculated from the `current` balance in the `balance` object by subtracting inflows and adding back outflows according to the posted date of each transaction.  If the account has any pending transactions, historical balance amounts on or after the date of the earliest pending transaction may differ if retrieved in subsequent Asset Reports as a result of those pending transactions posting.
    */
    'current': number;
    /**
    * The ISO-4217 currency code of the balance. Always `null` if `unofficial_currency_code` is non-`null`.
    */
    'isoCurrencyCode': string | null;
    /**
    * The unofficial currency code associated with the balance. Always `null` if `iso_currency_code` is non-`null`.  See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
    */
    'unofficialCurrencyCode': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "current",
            "baseName": "current",
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
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HistoricalBalance.attributeTypeMap);
    }
}

