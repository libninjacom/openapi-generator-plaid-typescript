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
* A securities holding at an institution.
*/
export class Holding extends null<String, any> {
    /**
    * The Plaid `account_id` associated with the holding.
    */
    'accountId': string;
    /**
    * The Plaid `security_id` associated with the holding.
    */
    'securityId': string;
    /**
    * The last price given by the institution for this security.
    */
    'institutionPrice': number;
    /**
    * The date at which `institution_price` was current.
    */
    'institutionPriceAsOf': string | null;
    /**
    * The value of the holding, as reported by the institution.
    */
    'institutionValue': number;
    /**
    * The cost basis of the holding.
    */
    'costBasis': number | null;
    /**
    * The total quantity of the asset held, as reported by the financial institution. If the security is an option, `quantity` will reflect the total number of options (typically the number of contracts multiplied by 100), not the number of contracts.
    */
    'quantity': number;
    /**
    * The ISO-4217 currency code of the holding. Always `null` if `unofficial_currency_code` is non-`null`.
    */
    'isoCurrencyCode': string | null;
    /**
    * The unofficial currency code associated with the holding. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.  See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s. 
    */
    'unofficialCurrencyCode': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "securityId",
            "baseName": "security_id",
            "type": "string"
        },
        {
            "name": "institutionPrice",
            "baseName": "institution_price",
            "type": "number"
        },
        {
            "name": "institutionPriceAsOf",
            "baseName": "institution_price_as_of",
            "type": "string"
        },
        {
            "name": "institutionValue",
            "baseName": "institution_value",
            "type": "number"
        },
        {
            "name": "costBasis",
            "baseName": "cost_basis",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
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
        return super.getAttributeTypeMap().concat(Holding.attributeTypeMap);
    }
}

