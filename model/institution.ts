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
import { AuthMetadata } from './authMetadata';
import { CountryCode } from './countryCode';
import { InstitutionStatus } from './institutionStatus';
import { PaymentInitiationMetadata } from './paymentInitiationMetadata';
import { Products } from './products';

/**
* Details relating to a specific financial institution
*/
export class Institution extends null<String, any> {
    /**
    * Unique identifier for the institution
    */
    'institutionId': string;
    /**
    * The official name of the institution
    */
    'name': string;
    /**
    * A list of the Plaid products supported by the institution. Note that only institutions that support Instant Auth will return `auth` in the product array; institutions that do not list `auth` may still support other Auth methods such as Instant Match or Automated Micro-deposit Verification. To identify institutions that support those methods, use the `auth_metadata` object. For more details, see [Full Auth coverage](https://plaid.com/docs/auth/coverage/).
    */
    'products': Array<Products>;
    /**
    * A list of the country codes supported by the institution.
    */
    'countryCodes': Array<CountryCode>;
    /**
    * The URL for the institution\'s website
    */
    'url'?: string | null;
    /**
    * Hexadecimal representation of the primary color used by the institution
    */
    'primaryColor'?: string | null;
    /**
    * Base64 encoded representation of the institution\'s logo
    */
    'logo'?: string | null;
    /**
    * A partial list of routing numbers associated with the institution. This list is provided for the purpose of looking up institutions by routing number. It is not comprehensive and should never be used as a complete list of routing numbers for an institution.
    */
    'routingNumbers': Array<string>;
    /**
    * Indicates that the institution has an OAuth login flow.
    */
    'oauth': boolean;
    'status'?: InstitutionStatus | null;
    'paymentInitiationMetadata'?: PaymentInitiationMetadata | null;
    'authMetadata'?: AuthMetadata | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "institutionId",
            "baseName": "institution_id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<Products>"
        },
        {
            "name": "countryCodes",
            "baseName": "country_codes",
            "type": "Array<CountryCode>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "primaryColor",
            "baseName": "primary_color",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "routingNumbers",
            "baseName": "routing_numbers",
            "type": "Array<string>"
        },
        {
            "name": "oauth",
            "baseName": "oauth",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InstitutionStatus"
        },
        {
            "name": "paymentInitiationMetadata",
            "baseName": "payment_initiation_metadata",
            "type": "PaymentInitiationMetadata"
        },
        {
            "name": "authMetadata",
            "baseName": "auth_metadata",
            "type": "AuthMetadata"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Institution.attributeTypeMap);
    }
}
