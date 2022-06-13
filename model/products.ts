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
* A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.
*/
export enum Products {
    Assets = <any> 'assets',
    Auth = <any> 'auth',
    Balance = <any> 'balance',
    Identity = <any> 'identity',
    Investments = <any> 'investments',
    Liabilities = <any> 'liabilities',
    PaymentInitiation = <any> 'payment_initiation',
    Transactions = <any> 'transactions',
    CreditDetails = <any> 'credit_details',
    Income = <any> 'income',
    IncomeVerification = <any> 'income_verification',
    DepositSwitch = <any> 'deposit_switch',
    StandingOrders = <any> 'standing_orders',
    Transfer = <any> 'transfer',
    Employment = <any> 'employment'
}