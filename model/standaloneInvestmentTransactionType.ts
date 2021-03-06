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
* Valid values for investment transaction types and subtypes. Note that transactions representing inflow of cash will appear as negative amounts, outflow of cash will appear as positive amounts.
*/
export class StandaloneInvestmentTransactionType extends null<String, any> {
    /**
    * Buying an investment
    */
    'buy': string;
    /**
    * Selling an investment
    */
    'sell': string;
    /**
    * A cancellation of a pending transaction
    */
    'cancel': string;
    /**
    * Activity that modifies a cash position
    */
    'cash': string;
    /**
    * Fees on the account, e.g. commission, bookkeeping, options-related.
    */
    'fee': string;
    /**
    * Activity that modifies a position, but not through buy/sell activity e.g. options exercise, portfolio transfer
    */
    'transfer': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buy",
            "baseName": "buy",
            "type": "string"
        },
        {
            "name": "sell",
            "baseName": "sell",
            "type": "string"
        },
        {
            "name": "cancel",
            "baseName": "cancel",
            "type": "string"
        },
        {
            "name": "cash",
            "baseName": "cash",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StandaloneInvestmentTransactionType.attributeTypeMap);
    }
}

