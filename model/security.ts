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
* Contains details about a security
*/
export class Security extends null<String, any> {
    /**
    * A unique, Plaid-specific identifier for the security, used to associate securities with holdings. Like all Plaid identifiers, the `security_id` is case sensitive.
    */
    'securityId': string;
    /**
    * 12-character ISIN, a globally unique securities identifier.
    */
    'isin': string | null;
    /**
    * 9-character CUSIP, an identifier assigned to North American securities.
    */
    'cusip': string | null;
    /**
    * 7-character SEDOL, an identifier assigned to securities in the UK.
    */
    'sedol': string | null;
    /**
    * An identifier given to the security by the institution
    */
    'institutionSecurityId': string | null;
    /**
    * If `institution_security_id` is present, this field indicates the Plaid `institution_id` of the institution to whom the identifier belongs.
    */
    'institutionId': string | null;
    /**
    * In certain cases, Plaid will provide the ID of another security whose performance resembles this security, typically when the original security has low volume, or when a private security can be modeled with a publicly traded security.
    */
    'proxySecurityId': string | null;
    /**
    * A descriptive name for the security, suitable for display.
    */
    'name': string | null;
    /**
    * The security’s trading symbol for publicly traded securities, and otherwise a short identifier if available.
    */
    'tickerSymbol': string | null;
    /**
    * Indicates that a security is a highly liquid asset and can be treated like cash.
    */
    'isCashEquivalent': boolean | null;
    /**
    * The security type of the holding. Valid security types are:  `cash`: Cash, currency, and money market funds  `derivative`: Options, warrants, and other derivative instruments  `equity`: Domestic and foreign equities  `etf`: Multi-asset exchange-traded investment funds  `fixed income`: Bonds and certificates of deposit (CDs)  `loan`: Loans and loan receivables.  `mutual fund`: Open- and closed-end vehicles pooling funds of multiple investors.  `other`: Unknown or other investment types
    */
    'type': string | null;
    /**
    * Price of the security at the close of the previous trading session. `null` for non-public securities. If the security is a foreign currency or a cryptocurrency this field will be updated daily and will be priced in USD.
    */
    'closePrice': number | null;
    /**
    * Date for which `close_price` is accurate. Always `null` if `close_price` is `null`.
    */
    'closePriceAsOf': string | null;
    /**
    * The ISO-4217 currency code of the price given. Always `null` if `unofficial_currency_code` is non-`null`.
    */
    'isoCurrencyCode': string | null;
    /**
    * The unofficial currency code associated with the security. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.  See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
    */
    'unofficialCurrencyCode': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "securityId",
            "baseName": "security_id",
            "type": "string"
        },
        {
            "name": "isin",
            "baseName": "isin",
            "type": "string"
        },
        {
            "name": "cusip",
            "baseName": "cusip",
            "type": "string"
        },
        {
            "name": "sedol",
            "baseName": "sedol",
            "type": "string"
        },
        {
            "name": "institutionSecurityId",
            "baseName": "institution_security_id",
            "type": "string"
        },
        {
            "name": "institutionId",
            "baseName": "institution_id",
            "type": "string"
        },
        {
            "name": "proxySecurityId",
            "baseName": "proxy_security_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "tickerSymbol",
            "baseName": "ticker_symbol",
            "type": "string"
        },
        {
            "name": "isCashEquivalent",
            "baseName": "is_cash_equivalent",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "closePrice",
            "baseName": "close_price",
            "type": "number"
        },
        {
            "name": "closePriceAsOf",
            "baseName": "close_price_as_of",
            "type": "string"
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
        return super.getAttributeTypeMap().concat(Security.attributeTypeMap);
    }
}

