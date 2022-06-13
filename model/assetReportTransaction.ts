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
import { AssetReportTransactionAllOf } from './assetReportTransactionAllOf';
import { Location } from './location';
import { PaymentMeta } from './paymentMeta';
import { TransactionBase } from './transactionBase';

/**
* A transaction on the asset report
*/
export class AssetReportTransaction {
    /**
    * Please use the `payment_channel` field, `transaction_type` will be deprecated in the future.  `digital:` transactions that took place online.  `place:` transactions that were made at a physical location.  `special:` transactions that relate to banks, e.g. fees or deposits.  `unresolved:` transactions that do not fit into the other three types. 
    */
    'transactionType'?: AssetReportTransaction.TransactionTypeEnum;
    /**
    * The ID of a posted transaction\'s associated pending transaction, where applicable.
    */
    'pendingTransactionId'?: string | null;
    /**
    * The ID of the category to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/#categoriesget).  If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
    */
    'categoryId'?: string | null;
    /**
    * A hierarchical array of the categories to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/#categoriesget).  If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
    */
    'category'?: Array<string> | null;
    'location'?: Location;
    'paymentMeta'?: PaymentMeta;
    /**
    * The name of the account owner. This field is not typically populated and only relevant when dealing with sub-accounts.
    */
    'accountOwner'?: string | null;
    /**
    * The merchant name or transaction description.  If the `transactions` object was returned by a Transactions endpoint such as `/transactions/get`, this field will always appear. If the `transactions` object was returned by an Assets endpoint such as `/asset_report/get/` or `/asset_report/pdf/get`, this field will only appear in an Asset Report with Insights.
    */
    'name'?: string;
    /**
    * The string returned by the financial institution to describe the transaction. For transactions returned by `/transactions/get`, this field is in beta and will be omitted unless the client is both enrolled in the closed beta program and has set `options.include_original_description` to `true`.
    */
    'originalDescription': string | null;
    /**
    * The ID of the account in which this transaction occurred.
    */
    'accountId': string;
    /**
    * The settled value of the transaction, denominated in the account\'s currency, as stated in `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the account; negative values when money moves in. For example, debit card purchases are positive; credit card payments, direct deposits, and refunds are negative.
    */
    'amount': number;
    /**
    * The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is non-null.
    */
    'isoCurrencyCode': string | null;
    /**
    * The unofficial currency code associated with the transaction. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.  See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
    */
    'unofficialCurrencyCode': string | null;
    /**
    * For pending transactions, the date that the transaction occurred; for posted transactions, the date that the transaction posted. Both dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ).
    */
    'date': string;
    /**
    * When `true`, identifies the transaction as pending or unsettled. Pending transaction details (name, type, amount, category ID) may change before they are settled.
    */
    'pending': boolean;
    /**
    * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case sensitive.
    */
    'transactionId': string;
    /**
    * The merchant name, as extracted by Plaid from the `name` field.
    */
    'merchantName'?: string | null;
    /**
    * The check number of the transaction. This field is only populated for check transactions.
    */
    'checkNumber'?: string | null;
    /**
    * The date on which the transaction took place, in IS0 8601 format.
    */
    'dateTransacted'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "AssetReportTransaction.TransactionTypeEnum"
        },
        {
            "name": "pendingTransactionId",
            "baseName": "pending_transaction_id",
            "type": "string"
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Array<string>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Location"
        },
        {
            "name": "paymentMeta",
            "baseName": "payment_meta",
            "type": "PaymentMeta"
        },
        {
            "name": "accountOwner",
            "baseName": "account_owner",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "originalDescription",
            "baseName": "original_description",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
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
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "boolean"
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchant_name",
            "type": "string"
        },
        {
            "name": "checkNumber",
            "baseName": "check_number",
            "type": "string"
        },
        {
            "name": "dateTransacted",
            "baseName": "date_transacted",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssetReportTransaction.attributeTypeMap;
    }
}

export namespace AssetReportTransaction {
    export enum TransactionTypeEnum {
        Digital = <any> 'digital',
        Place = <any> 'place',
        Special = <any> 'special',
        Unresolved = <any> 'unresolved'
    }
}
