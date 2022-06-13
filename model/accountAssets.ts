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
import { AccountAssetsAllOf } from './accountAssetsAllOf';
import { AccountBalance } from './accountBalance';
import { AccountBase } from './accountBase';
import { AccountSubtype } from './accountSubtype';
import { AccountType } from './accountType';
import { AssetReportTransaction } from './assetReportTransaction';
import { HistoricalBalance } from './historicalBalance';
import { Owner } from './owner';

/**
* Asset information about an account
*/
export class AccountAssets {
    /**
    * Plaid’s unique identifier for the account. This value will not change unless Plaid can\'t reconcile the account with the data returned by the financial institution. This may occur, for example, when the name of the account changes. If this happens a new `account_id` will be assigned to the account.  The `account_id` can also change if the `access_token` is deleted and the same credentials that were used to generate that `access_token` are used to generate a new `access_token` on a later date. In that case, the new `account_id` will be different from the old `account_id`.  If an account with a specific `account_id` disappears instead of changing, the account is likely closed. Closed accounts are not returned by the Plaid API.  Like all Plaid identifiers, the `account_id` is case sensitive.
    */
    'accountId': string;
    'balances': AccountBalance;
    /**
    * The last 2-4 alphanumeric characters of an account\'s official account number. Note that the mask may be non-unique between an Item\'s accounts, and it may also not match the mask that the bank displays to the user.
    */
    'mask': string | null;
    /**
    * The name of the account, either assigned by the user or by the financial institution itself
    */
    'name': string;
    /**
    * The official name of the account as given by the financial institution
    */
    'officialName': string | null;
    'type': AccountType;
    'subtype': AccountSubtype | null;
    /**
    * The current verification status of an Auth Item initiated through Automated or Manual micro-deposits.  Returned for Auth Items only.  `pending_automatic_verification`: The Item is pending automatic verification  `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items remain in this state until the user successfully verifies the two amounts.  `automatically_verified`: The Item has successfully been automatically verified   `manually_verified`: The Item has successfully been manually verified  `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar days and will no longer attempt to validate the Item. Users may retry by submitting their information again through Link.  `verification_failed`: The Item failed manual micro-deposit verification because the user exhausted all 3 verification attempts. Users may retry by submitting their information again through Link.   
    */
    'verificationStatus'?: AccountAssets.VerificationStatusEnum;
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
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "AccountBalance"
        },
        {
            "name": "mask",
            "baseName": "mask",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "officialName",
            "baseName": "official_name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountType"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "AccountSubtype"
        },
        {
            "name": "verificationStatus",
            "baseName": "verification_status",
            "type": "AccountAssets.VerificationStatusEnum"
        },
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
        return AccountAssets.attributeTypeMap;
    }
}

export namespace AccountAssets {
    export enum VerificationStatusEnum {
        AutomaticallyVerified = <any> 'automatically_verified',
        PendingAutomaticVerification = <any> 'pending_automatic_verification',
        PendingManualVerification = <any> 'pending_manual_verification',
        ManuallyVerified = <any> 'manually_verified',
        VerificationExpired = <any> 'verification_expired',
        VerificationFailed = <any> 'verification_failed'
    }
}
