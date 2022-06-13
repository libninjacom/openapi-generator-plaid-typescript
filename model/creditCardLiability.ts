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
import { APR } from './aPR';

/**
* An object representing a credit card account.
*/
export class CreditCardLiability extends null<String, any> {
    /**
    * The ID of the account that this liability belongs to.
    */
    'accountId': string | null;
    /**
    * The various interest rates that apply to the account.
    */
    'aprs': Array<APR>;
    /**
    * true if a payment is currently overdue. Availability for this field is limited.
    */
    'isOverdue': boolean | null;
    /**
    * The amount of the last payment.
    */
    'lastPaymentAmount': number;
    /**
    * The date of the last payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). Availability for this field is limited.
    */
    'lastPaymentDate': string | null;
    /**
    * The date of the last statement. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
    */
    'lastStatementIssueDate': string;
    /**
    * The total amount owed as of the last statement issued
    */
    'lastStatementBalance': number;
    /**
    * The minimum payment due for the next billing cycle.
    */
    'minimumPaymentAmount': number;
    /**
    * The due date for the next payment. The due date is `null` if a payment is not expected. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
    */
    'nextPaymentDueDate': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "aprs",
            "baseName": "aprs",
            "type": "Array<APR>"
        },
        {
            "name": "isOverdue",
            "baseName": "is_overdue",
            "type": "boolean"
        },
        {
            "name": "lastPaymentAmount",
            "baseName": "last_payment_amount",
            "type": "number"
        },
        {
            "name": "lastPaymentDate",
            "baseName": "last_payment_date",
            "type": "string"
        },
        {
            "name": "lastStatementIssueDate",
            "baseName": "last_statement_issue_date",
            "type": "string"
        },
        {
            "name": "lastStatementBalance",
            "baseName": "last_statement_balance",
            "type": "number"
        },
        {
            "name": "minimumPaymentAmount",
            "baseName": "minimum_payment_amount",
            "type": "number"
        },
        {
            "name": "nextPaymentDueDate",
            "baseName": "next_payment_due_date",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CreditCardLiability.attributeTypeMap);
    }
}

