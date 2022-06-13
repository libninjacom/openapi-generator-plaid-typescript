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
import { AssetReportTransaction } from './assetReportTransaction';
import { HistoricalBalance } from './historicalBalance';
import { Owner } from './owner';

export class AccountAssetsAllOf {
    /**
    * The duration of transaction history available for this Item, typically defined as the time since the date of the earliest transaction in that account. Only returned by Assets endpoints.
    */
    'daysAvailable': number;
    /**
    * Transaction history associated with the account. Only returned by Assets endpoints. Transaction history returned by endpoints such as `/transactions/get` or `/investments/transactions/get` will be returned in the top-level `transactions` field instead.
    */
    'transactions': Array<AssetReportTransaction>;
    /**
    * Data returned by the financial institution about the account owner or owners. Only returned by Identity or Assets endpoints. For business accounts, the name reported may be either the name of the individual or the name of the business, depending on the institution. Multiple owners on a single account will be represented in the same `owner` object, not in multiple owner objects within the array. In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29)
    */
    'owners': Array<Owner>;
    /**
    * Calculated data about the historical balances on the account. Only returned by Assets endpoints and currently not supported by `brokerage` or `investment` accounts.
    */
    'historicalBalances': Array<HistoricalBalance>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "daysAvailable",
            "baseName": "days_available",
            "type": "number"
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<AssetReportTransaction>"
        },
        {
            "name": "owners",
            "baseName": "owners",
            "type": "Array<Owner>"
        },
        {
            "name": "historicalBalances",
            "baseName": "historical_balances",
            "type": "Array<HistoricalBalance>"
        }    ];

    static getAttributeTypeMap() {
        return AccountAssetsAllOf.attributeTypeMap;
    }
}
