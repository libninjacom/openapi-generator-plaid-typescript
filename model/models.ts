import localVarRequest from 'request';

export * from './aCHClass';
export * from './aPR';
export * from './accountAccess';
export * from './accountAssets';
export * from './accountAssetsAllOf';
export * from './accountBalance';
export * from './accountBase';
export * from './accountFilter';
export * from './accountFiltersResponse';
export * from './accountIdentity';
export * from './accountIdentityAllOf';
export * from './accountProductAccess';
export * from './accountProductAccessNullable';
export * from './accountSelectionCardinality';
export * from './accountSubtype';
export * from './accountType';
export * from './accountsBalanceGetRequest';
export * from './accountsBalanceGetRequestOptions';
export * from './accountsGetRequest';
export * from './accountsGetRequestOptions';
export * from './accountsGetResponse';
export * from './address';
export * from './addressData';
export * from './addressDataNullable';
export * from './addressNullable';
export * from './application';
export * from './applicationGetRequest';
export * from './applicationGetResponse';
export * from './assetReport';
export * from './assetReportAuditCopyCreateRequest';
export * from './assetReportAuditCopyCreateResponse';
export * from './assetReportAuditCopyGetRequest';
export * from './assetReportAuditCopyRemoveRequest';
export * from './assetReportAuditCopyRemoveResponse';
export * from './assetReportCreateRequest';
export * from './assetReportCreateRequestOptions';
export * from './assetReportCreateResponse';
export * from './assetReportFilterRequest';
export * from './assetReportFilterResponse';
export * from './assetReportGetRequest';
export * from './assetReportGetResponse';
export * from './assetReportItem';
export * from './assetReportPDFGetRequest';
export * from './assetReportRefreshRequest';
export * from './assetReportRefreshRequestOptions';
export * from './assetReportRefreshResponse';
export * from './assetReportRemoveRequest';
export * from './assetReportRemoveResponse';
export * from './assetReportTransaction';
export * from './assetReportTransactionAllOf';
export * from './assetReportUser';
export * from './assetsErrorWebhook';
export * from './assetsProductReadyWebhook';
export * from './authGetNumbers';
export * from './authGetRequest';
export * from './authGetRequestOptions';
export * from './authGetResponse';
export * from './authMetadata';
export * from './authSupportedMethods';
export * from './automaticallyVerifiedWebhook';
export * from './bankInitiatedReturnRisk';
export * from './bankTransfer';
export * from './bankTransferBalance';
export * from './bankTransferBalanceGetRequest';
export * from './bankTransferBalanceGetResponse';
export * from './bankTransferCancelRequest';
export * from './bankTransferCancelResponse';
export * from './bankTransferCreateRequest';
export * from './bankTransferCreateResponse';
export * from './bankTransferDirection';
export * from './bankTransferEvent';
export * from './bankTransferEventListRequest';
export * from './bankTransferEventListResponse';
export * from './bankTransferEventSyncRequest';
export * from './bankTransferEventSyncResponse';
export * from './bankTransferEventType';
export * from './bankTransferFailure';
export * from './bankTransferGetRequest';
export * from './bankTransferGetResponse';
export * from './bankTransferListRequest';
export * from './bankTransferListResponse';
export * from './bankTransferMigrateAccountRequest';
export * from './bankTransferMigrateAccountResponse';
export * from './bankTransferNetwork';
export * from './bankTransferStatus';
export * from './bankTransferSweep';
export * from './bankTransferSweepGetRequest';
export * from './bankTransferSweepGetResponse';
export * from './bankTransferSweepListRequest';
export * from './bankTransferSweepListResponse';
export * from './bankTransferType';
export * from './bankTransferUser';
export * from './bankTransfersEventsUpdateWebhook';
export * from './categoriesGetResponse';
export * from './category';
export * from './cause';
export * from './connectedApplication';
export * from './countryCode';
export * from './creditAccountSubtype';
export * from './creditCardLiability';
export * from './creditFilter';
export * from './customerInitiatedReturnRisk';
export * from './deductions';
export * from './deductionsBreakdown';
export * from './deductionsTotal';
export * from './defaultUpdateWebhook';
export * from './depositSwitchAddressData';
export * from './depositSwitchAltCreateRequest';
export * from './depositSwitchAltCreateResponse';
export * from './depositSwitchCreateRequest';
export * from './depositSwitchCreateRequestOptions';
export * from './depositSwitchCreateResponse';
export * from './depositSwitchGetRequest';
export * from './depositSwitchGetResponse';
export * from './depositSwitchStateUpdateWebhook';
export * from './depositSwitchTargetAccount';
export * from './depositSwitchTargetUser';
export * from './depositSwitchTokenCreateRequest';
export * from './depositSwitchTokenCreateResponse';
export * from './depositoryAccountSubtype';
export * from './depositoryFilter';
export * from './distributionBreakdown';
export * from './docType';
export * from './documentMetadata';
export * from './earnings';
export * from './earningsBreakdown';
export * from './earningsBreakdownCanonicalDescription';
export * from './earningsTotal';
export * from './email';
export * from './employee';
export * from './employeeIncomeSummaryFieldString';
export * from './employer';
export * from './employerIncomeSummaryFieldString';
export * from './employerVerification';
export * from './employersSearchRequest';
export * from './employersSearchResponse';
export * from './employmentDetails';
export * from './employmentVerification';
export * from './employmentVerificationGetRequest';
export * from './employmentVerificationGetResponse';
export * from './employmentVerificationStatus';
export * from './externalPaymentOptions';
export * from './externalPaymentRefundDetails';
export * from './externalPaymentScheduleBase';
export * from './externalPaymentScheduleGet';
export * from './externalPaymentScheduleRequest';
export * from './healthIncident';
export * from './historicalBalance';
export * from './historicalUpdateWebhook';
export * from './holding';
export * from './holdingsDefaultUpdateWebhook';
export * from './holdingsOverride';
export * from './identityGetRequest';
export * from './identityGetRequestOptions';
export * from './identityGetResponse';
export * from './incidentUpdate';
export * from './incomeBreakdown';
export * from './incomeBreakdownType';
export * from './incomeOverride';
export * from './incomeSummary';
export * from './incomeSummaryFieldNumber';
export * from './incomeSummaryFieldString';
export * from './incomeVerificationCreateRequest';
export * from './incomeVerificationCreateRequestOptions';
export * from './incomeVerificationCreateResponse';
export * from './incomeVerificationDocumentsDownloadRequest';
export * from './incomeVerificationPaystubGetRequest';
export * from './incomeVerificationPaystubGetResponse';
export * from './incomeVerificationPaystubsGetRequest';
export * from './incomeVerificationPaystubsGetResponse';
export * from './incomeVerificationPrecheckConfidence';
export * from './incomeVerificationPrecheckEmployer';
export * from './incomeVerificationPrecheckEmployerAddress';
export * from './incomeVerificationPrecheckEmployerAddressData';
export * from './incomeVerificationPrecheckMilitaryInfo';
export * from './incomeVerificationPrecheckRequest';
export * from './incomeVerificationPrecheckResponse';
export * from './incomeVerificationPrecheckUser';
export * from './incomeVerificationRefreshRequest';
export * from './incomeVerificationRefreshResponse';
export * from './incomeVerificationStatusWebhook';
export * from './incomeVerificationSummaryGetRequest';
export * from './incomeVerificationSummaryGetResponse';
export * from './incomeVerificationTaxformsGetRequest';
export * from './incomeVerificationTaxformsGetResponse';
export * from './incomeVerificationWebhookStatus';
export * from './inflowModel';
export * from './initialUpdateWebhook';
export * from './institution';
export * from './institutionStatus';
export * from './institutionsGetByIdRequest';
export * from './institutionsGetByIdRequestOptions';
export * from './institutionsGetByIdResponse';
export * from './institutionsGetRequest';
export * from './institutionsGetRequestOptions';
export * from './institutionsGetResponse';
export * from './institutionsSearchAccountFilter';
export * from './institutionsSearchPaymentInitiationOptions';
export * from './institutionsSearchRequest';
export * from './institutionsSearchRequestOptions';
export * from './institutionsSearchResponse';
export * from './investmentAccountSubtype';
export * from './investmentFilter';
export * from './investmentHoldingsGetRequestOptions';
export * from './investmentTransaction';
export * from './investmentsDefaultUpdateWebhook';
export * from './investmentsHoldingsGetRequest';
export * from './investmentsHoldingsGetResponse';
export * from './investmentsTransactionsGetRequest';
export * from './investmentsTransactionsGetRequestOptions';
export * from './investmentsTransactionsGetResponse';
export * from './investmentsTransactionsOverride';
export * from './item';
export * from './itemAccessTokenInvalidateRequest';
export * from './itemAccessTokenInvalidateResponse';
export * from './itemApplicationListRequest';
export * from './itemApplicationListResponse';
export * from './itemApplicationListUserAuth';
export * from './itemApplicationScopesUpdateRequest';
export * from './itemApplicationScopesUpdateResponse';
export * from './itemErrorWebhook';
export * from './itemGetRequest';
export * from './itemGetResponse';
export * from './itemImportRequest';
export * from './itemImportRequestOptions';
export * from './itemImportRequestUserAuth';
export * from './itemImportResponse';
export * from './itemProductReadyWebhook';
export * from './itemPublicTokenCreateRequest';
export * from './itemPublicTokenCreateResponse';
export * from './itemPublicTokenExchangeRequest';
export * from './itemPublicTokenExchangeResponse';
export * from './itemRemoveRequest';
export * from './itemRemoveResponse';
export * from './itemStatus';
export * from './itemStatusInvestments';
export * from './itemStatusLastWebhook';
export * from './itemStatusNullable';
export * from './itemStatusTransactions';
export * from './itemWebhookUpdateRequest';
export * from './itemWebhookUpdateResponse';
export * from './jWKPublicKey';
export * from './jWTHeader';
export * from './liabilitiesDefaultUpdateWebhook';
export * from './liabilitiesGetRequest';
export * from './liabilitiesGetRequestOptions';
export * from './liabilitiesGetResponse';
export * from './liabilitiesObject';
export * from './liabilityOverride';
export * from './linkTokenAccountFilters';
export * from './linkTokenCreateCreditFilter';
export * from './linkTokenCreateDepositoryFilter';
export * from './linkTokenCreateInvestmentFilter';
export * from './linkTokenCreateLoanFilter';
export * from './linkTokenCreateRequest';
export * from './linkTokenCreateRequestAccountSubtypes';
export * from './linkTokenCreateRequestAuth';
export * from './linkTokenCreateRequestDepositSwitch';
export * from './linkTokenCreateRequestIncomeVerification';
export * from './linkTokenCreateRequestPaymentInitiation';
export * from './linkTokenCreateRequestTransfer';
export * from './linkTokenCreateRequestUpdate';
export * from './linkTokenCreateRequestUser';
export * from './linkTokenCreateResponse';
export * from './linkTokenEUConfig';
export * from './linkTokenGetMetadataResponse';
export * from './linkTokenGetRequest';
export * from './linkTokenGetResponse';
export * from './loanAccountSubtype';
export * from './loanFilter';
export * from './location';
export * from './mFA';
export * from './meta';
export * from './modelError';
export * from './mortgageInterestRate';
export * from './mortgageLiability';
export * from './mortgagePropertyAddress';
export * from './netPay';
export * from './newAccountsAvailableWebhook';
export * from './numbers';
export * from './numbersACH';
export * from './numbersACHNullable';
export * from './numbersBACS';
export * from './numbersBACSNullable';
export * from './numbersEFT';
export * from './numbersEFTNullable';
export * from './numbersInternational';
export * from './numbersInternationalNullable';
export * from './overrideAccountType';
export * from './overrideAccounts';
export * from './owner';
export * from './ownerOverride';
export * from './pSLFStatus';
export * from './pay';
export * from './payFrequency';
export * from './payFrequencyValue';
export * from './payPeriodDetails';
export * from './paymentAmount';
export * from './paymentInitiationAddress';
export * from './paymentInitiationMetadata';
export * from './paymentInitiationOptionalRestrictionBacs';
export * from './paymentInitiationPayment';
export * from './paymentInitiationPaymentCreateRequest';
export * from './paymentInitiationPaymentCreateResponse';
export * from './paymentInitiationPaymentGetRequest';
export * from './paymentInitiationPaymentGetResponse';
export * from './paymentInitiationPaymentListRequest';
export * from './paymentInitiationPaymentListResponse';
export * from './paymentInitiationPaymentReverseRequest';
export * from './paymentInitiationPaymentReverseResponse';
export * from './paymentInitiationPaymentStatus';
export * from './paymentInitiationPaymentTokenCreateRequest';
export * from './paymentInitiationPaymentTokenCreateResponse';
export * from './paymentInitiationRecipient';
export * from './paymentInitiationRecipientCreateRequest';
export * from './paymentInitiationRecipientCreateResponse';
export * from './paymentInitiationRecipientGetRequest';
export * from './paymentInitiationRecipientGetResponse';
export * from './paymentInitiationRecipientGetResponseAllOf';
export * from './paymentInitiationRecipientListRequest';
export * from './paymentInitiationRecipientListResponse';
export * from './paymentInitiationRefund';
export * from './paymentInitiationStandingOrderMetadata';
export * from './paymentMeta';
export * from './paymentScheduleInterval';
export * from './paymentScheme';
export * from './paymentStatusUpdateWebhook';
export * from './paystub';
export * from './paystubAddress';
export * from './paystubDeduction';
export * from './paystubDetails';
export * from './paystubEmployer';
export * from './paystubOverride';
export * from './paystubOverrideEmployee';
export * from './paystubOverrideEmployeeAddress';
export * from './paystubOverrideEmployer';
export * from './paystubPayFrequency';
export * from './paystubVerification';
export * from './paystubVerificationStatus';
export * from './paystubYTDDetails';
export * from './pendingExpirationWebhook';
export * from './personalFinanceCategory';
export * from './phoneNumber';
export * from './plaidError';
export * from './platformIds';
export * from './processorApexProcessorTokenCreateRequest';
export * from './processorAuthGetRequest';
export * from './processorAuthGetResponse';
export * from './processorBalanceGetRequest';
export * from './processorBalanceGetRequestOptions';
export * from './processorBalanceGetResponse';
export * from './processorBankTransferCreateRequest';
export * from './processorBankTransferCreateResponse';
export * from './processorIdentityGetRequest';
export * from './processorIdentityGetResponse';
export * from './processorNumber';
export * from './processorStripeBankAccountTokenCreateRequest';
export * from './processorStripeBankAccountTokenCreateResponse';
export * from './processorTokenCreateRequest';
export * from './processorTokenCreateResponse';
export * from './productAccess';
export * from './productStatus';
export * from './productStatusBreakdown';
export * from './products';
export * from './projectedIncomeSummaryFieldNumber';
export * from './recaptchaRequiredError';
export * from './recipientBACS';
export * from './recipientBACSNullable';
export * from './recurringTransactionFrequency';
export * from './removedTransaction';
export * from './requestedScopes';
export * from './sandboxBankTransferFireWebhookRequest';
export * from './sandboxBankTransferFireWebhookResponse';
export * from './sandboxBankTransferSimulateRequest';
export * from './sandboxBankTransferSimulateResponse';
export * from './sandboxIncomeFireWebhookRequest';
export * from './sandboxIncomeFireWebhookResponse';
export * from './sandboxItemFireWebhookRequest';
export * from './sandboxItemFireWebhookResponse';
export * from './sandboxItemResetLoginRequest';
export * from './sandboxItemResetLoginResponse';
export * from './sandboxItemSetVerificationStatusRequest';
export * from './sandboxItemSetVerificationStatusResponse';
export * from './sandboxOauthSelectAccountsRequest';
export * from './sandboxProcessorTokenCreateRequest';
export * from './sandboxProcessorTokenCreateRequestOptions';
export * from './sandboxProcessorTokenCreateResponse';
export * from './sandboxPublicTokenCreateRequest';
export * from './sandboxPublicTokenCreateRequestOptions';
export * from './sandboxPublicTokenCreateRequestOptionsTransactions';
export * from './sandboxPublicTokenCreateResponse';
export * from './sandboxTransferRepaymentSimulateRequest';
export * from './sandboxTransferRepaymentSimulateResponse';
export * from './sandboxTransferSimulateRequest';
export * from './sandboxTransferSimulateResponse';
export * from './sandboxTransferSweepSimulateRequest';
export * from './sandboxTransferSweepSimulateResponse';
export * from './scopes';
export * from './scopesContext';
export * from './scopesNullable';
export * from './security';
export * from './securityOverride';
export * from './senderBACSNullable';
export * from './servicerAddressData';
export * from './signalAddressData';
export * from './signalDecisionReportRequest';
export * from './signalDecisionReportResponse';
export * from './signalDevice';
export * from './signalEvaluateCoreAttributes';
export * from './signalEvaluateRequest';
export * from './signalEvaluateResponse';
export * from './signalPersonName';
export * from './signalReturnReportRequest';
export * from './signalReturnReportResponse';
export * from './signalScores';
export * from './signalUser';
export * from './simulatedTransferSweep';
export * from './standaloneAccountType';
export * from './standaloneCurrencyCodeList';
export * from './standaloneInvestmentTransactionType';
export * from './studentLoan';
export * from './studentLoanRepaymentModel';
export * from './studentLoanStatus';
export * from './studentRepaymentPlan';
export * from './taxform';
export * from './taxpayerID';
export * from './total';
export * from './totalCanonicalDescription';
export * from './transaction';
export * from './transactionAllOf';
export * from './transactionBase';
export * from './transactionCode';
export * from './transactionData';
export * from './transactionOverride';
export * from './transactionStream';
export * from './transactionStreamAmount';
export * from './transactionsGetRequest';
export * from './transactionsGetRequestOptions';
export * from './transactionsGetResponse';
export * from './transactionsRecurringGetRequest';
export * from './transactionsRecurringGetResponse';
export * from './transactionsRefreshRequest';
export * from './transactionsRefreshResponse';
export * from './transactionsRemovedWebhook';
export * from './transactionsSyncRequest';
export * from './transactionsSyncResponse';
export * from './transfer';
export * from './transferAuthorization';
export * from './transferAuthorizationCreateRequest';
export * from './transferAuthorizationCreateResponse';
export * from './transferAuthorizationDecisionRationale';
export * from './transferAuthorizationDevice';
export * from './transferAuthorizationGuaranteeDecision';
export * from './transferAuthorizationGuaranteeDecisionRationale';
export * from './transferAuthorizationProposedTransfer';
export * from './transferCancelRequest';
export * from './transferCancelResponse';
export * from './transferCreateRequest';
export * from './transferCreateResponse';
export * from './transferEvent';
export * from './transferEventListRequest';
export * from './transferEventListResponse';
export * from './transferEventSyncRequest';
export * from './transferEventSyncResponse';
export * from './transferEventType';
export * from './transferFailure';
export * from './transferGetRequest';
export * from './transferGetResponse';
export * from './transferIntentCreate';
export * from './transferIntentCreateMode';
export * from './transferIntentCreateRequest';
export * from './transferIntentCreateResponse';
export * from './transferIntentGet';
export * from './transferIntentGetFailureReason';
export * from './transferIntentGetRequest';
export * from './transferIntentGetResponse';
export * from './transferListRequest';
export * from './transferListResponse';
export * from './transferNetwork';
export * from './transferRepayment';
export * from './transferRepaymentListRequest';
export * from './transferRepaymentListResponse';
export * from './transferRepaymentReturn';
export * from './transferRepaymentReturnListRequest';
export * from './transferRepaymentReturnListResponse';
export * from './transferStatus';
export * from './transferSweep';
export * from './transferSweepGetRequest';
export * from './transferSweepGetResponse';
export * from './transferSweepListRequest';
export * from './transferSweepListResponse';
export * from './transferSweepStatus';
export * from './transferType';
export * from './transferUserAddressInRequest';
export * from './transferUserAddressInResponse';
export * from './transferUserInRequest';
export * from './transferUserInResponse';
export * from './userCustomPassword';
export * from './userPermissionRevokedWebhook';
export * from './verificationAttribute';
export * from './verificationExpiredWebhook';
export * from './verificationRefreshStatus';
export * from './verificationStatus';
export * from './w2';
export * from './w2Box12';
export * from './w2StateAndLocalWages';
export * from './walletBalance';
export * from './walletGetRequest';
export * from './walletGetResponse';
export * from './walletTransaction';
export * from './walletTransactionAmount';
export * from './walletTransactionCounterparty';
export * from './walletTransactionCounterpartyBACS';
export * from './walletTransactionCounterpartyNumbers';
export * from './walletTransactionExecuteRequest';
export * from './walletTransactionExecuteResponse';
export * from './walletTransactionStatus';
export * from './walletTransactionsListRequest';
export * from './walletTransactionsListResponse';
export * from './warning';
export * from './webhookUpdateAcknowledgedWebhook';
export * from './webhookVerificationKeyGetRequest';
export * from './webhookVerificationKeyGetResponse';
export * from './yTDGrossIncomeSummaryFieldNumber';
export * from './yTDNetIncomeSummaryFieldNumber';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ACHClass } from './aCHClass';
import { APR } from './aPR';
import { AccountAccess } from './accountAccess';
import { AccountAssets } from './accountAssets';
import { AccountAssetsAllOf } from './accountAssetsAllOf';
import { AccountBalance } from './accountBalance';
import { AccountBase } from './accountBase';
import { AccountFilter } from './accountFilter';
import { AccountFiltersResponse } from './accountFiltersResponse';
import { AccountIdentity } from './accountIdentity';
import { AccountIdentityAllOf } from './accountIdentityAllOf';
import { AccountProductAccess } from './accountProductAccess';
import { AccountProductAccessNullable } from './accountProductAccessNullable';
import { AccountSelectionCardinality } from './accountSelectionCardinality';
import { AccountSubtype } from './accountSubtype';
import { AccountType } from './accountType';
import { AccountsBalanceGetRequest } from './accountsBalanceGetRequest';
import { AccountsBalanceGetRequestOptions } from './accountsBalanceGetRequestOptions';
import { AccountsGetRequest } from './accountsGetRequest';
import { AccountsGetRequestOptions } from './accountsGetRequestOptions';
import { AccountsGetResponse } from './accountsGetResponse';
import { Address } from './address';
import { AddressData } from './addressData';
import { AddressDataNullable } from './addressDataNullable';
import { AddressNullable } from './addressNullable';
import { Application } from './application';
import { ApplicationGetRequest } from './applicationGetRequest';
import { ApplicationGetResponse } from './applicationGetResponse';
import { AssetReport } from './assetReport';
import { AssetReportAuditCopyCreateRequest } from './assetReportAuditCopyCreateRequest';
import { AssetReportAuditCopyCreateResponse } from './assetReportAuditCopyCreateResponse';
import { AssetReportAuditCopyGetRequest } from './assetReportAuditCopyGetRequest';
import { AssetReportAuditCopyRemoveRequest } from './assetReportAuditCopyRemoveRequest';
import { AssetReportAuditCopyRemoveResponse } from './assetReportAuditCopyRemoveResponse';
import { AssetReportCreateRequest } from './assetReportCreateRequest';
import { AssetReportCreateRequestOptions } from './assetReportCreateRequestOptions';
import { AssetReportCreateResponse } from './assetReportCreateResponse';
import { AssetReportFilterRequest } from './assetReportFilterRequest';
import { AssetReportFilterResponse } from './assetReportFilterResponse';
import { AssetReportGetRequest } from './assetReportGetRequest';
import { AssetReportGetResponse } from './assetReportGetResponse';
import { AssetReportItem } from './assetReportItem';
import { AssetReportPDFGetRequest } from './assetReportPDFGetRequest';
import { AssetReportRefreshRequest } from './assetReportRefreshRequest';
import { AssetReportRefreshRequestOptions } from './assetReportRefreshRequestOptions';
import { AssetReportRefreshResponse } from './assetReportRefreshResponse';
import { AssetReportRemoveRequest } from './assetReportRemoveRequest';
import { AssetReportRemoveResponse } from './assetReportRemoveResponse';
import { AssetReportTransaction } from './assetReportTransaction';
import { AssetReportTransactionAllOf } from './assetReportTransactionAllOf';
import { AssetReportUser } from './assetReportUser';
import { AssetsErrorWebhook } from './assetsErrorWebhook';
import { AssetsProductReadyWebhook } from './assetsProductReadyWebhook';
import { AuthGetNumbers } from './authGetNumbers';
import { AuthGetRequest } from './authGetRequest';
import { AuthGetRequestOptions } from './authGetRequestOptions';
import { AuthGetResponse } from './authGetResponse';
import { AuthMetadata } from './authMetadata';
import { AuthSupportedMethods } from './authSupportedMethods';
import { AutomaticallyVerifiedWebhook } from './automaticallyVerifiedWebhook';
import { BankInitiatedReturnRisk } from './bankInitiatedReturnRisk';
import { BankTransfer } from './bankTransfer';
import { BankTransferBalance } from './bankTransferBalance';
import { BankTransferBalanceGetRequest } from './bankTransferBalanceGetRequest';
import { BankTransferBalanceGetResponse } from './bankTransferBalanceGetResponse';
import { BankTransferCancelRequest } from './bankTransferCancelRequest';
import { BankTransferCancelResponse } from './bankTransferCancelResponse';
import { BankTransferCreateRequest } from './bankTransferCreateRequest';
import { BankTransferCreateResponse } from './bankTransferCreateResponse';
import { BankTransferDirection } from './bankTransferDirection';
import { BankTransferEvent } from './bankTransferEvent';
import { BankTransferEventListRequest } from './bankTransferEventListRequest';
import { BankTransferEventListResponse } from './bankTransferEventListResponse';
import { BankTransferEventSyncRequest } from './bankTransferEventSyncRequest';
import { BankTransferEventSyncResponse } from './bankTransferEventSyncResponse';
import { BankTransferEventType } from './bankTransferEventType';
import { BankTransferFailure } from './bankTransferFailure';
import { BankTransferGetRequest } from './bankTransferGetRequest';
import { BankTransferGetResponse } from './bankTransferGetResponse';
import { BankTransferListRequest } from './bankTransferListRequest';
import { BankTransferListResponse } from './bankTransferListResponse';
import { BankTransferMigrateAccountRequest } from './bankTransferMigrateAccountRequest';
import { BankTransferMigrateAccountResponse } from './bankTransferMigrateAccountResponse';
import { BankTransferNetwork } from './bankTransferNetwork';
import { BankTransferStatus } from './bankTransferStatus';
import { BankTransferSweep } from './bankTransferSweep';
import { BankTransferSweepGetRequest } from './bankTransferSweepGetRequest';
import { BankTransferSweepGetResponse } from './bankTransferSweepGetResponse';
import { BankTransferSweepListRequest } from './bankTransferSweepListRequest';
import { BankTransferSweepListResponse } from './bankTransferSweepListResponse';
import { BankTransferType } from './bankTransferType';
import { BankTransferUser } from './bankTransferUser';
import { BankTransfersEventsUpdateWebhook } from './bankTransfersEventsUpdateWebhook';
import { CategoriesGetResponse } from './categoriesGetResponse';
import { Category } from './category';
import { Cause } from './cause';
import { ConnectedApplication } from './connectedApplication';
import { CountryCode } from './countryCode';
import { CreditAccountSubtype } from './creditAccountSubtype';
import { CreditCardLiability } from './creditCardLiability';
import { CreditFilter } from './creditFilter';
import { CustomerInitiatedReturnRisk } from './customerInitiatedReturnRisk';
import { Deductions } from './deductions';
import { DeductionsBreakdown } from './deductionsBreakdown';
import { DeductionsTotal } from './deductionsTotal';
import { DefaultUpdateWebhook } from './defaultUpdateWebhook';
import { DepositSwitchAddressData } from './depositSwitchAddressData';
import { DepositSwitchAltCreateRequest } from './depositSwitchAltCreateRequest';
import { DepositSwitchAltCreateResponse } from './depositSwitchAltCreateResponse';
import { DepositSwitchCreateRequest } from './depositSwitchCreateRequest';
import { DepositSwitchCreateRequestOptions } from './depositSwitchCreateRequestOptions';
import { DepositSwitchCreateResponse } from './depositSwitchCreateResponse';
import { DepositSwitchGetRequest } from './depositSwitchGetRequest';
import { DepositSwitchGetResponse } from './depositSwitchGetResponse';
import { DepositSwitchStateUpdateWebhook } from './depositSwitchStateUpdateWebhook';
import { DepositSwitchTargetAccount } from './depositSwitchTargetAccount';
import { DepositSwitchTargetUser } from './depositSwitchTargetUser';
import { DepositSwitchTokenCreateRequest } from './depositSwitchTokenCreateRequest';
import { DepositSwitchTokenCreateResponse } from './depositSwitchTokenCreateResponse';
import { DepositoryAccountSubtype } from './depositoryAccountSubtype';
import { DepositoryFilter } from './depositoryFilter';
import { DistributionBreakdown } from './distributionBreakdown';
import { DocType } from './docType';
import { DocumentMetadata } from './documentMetadata';
import { Earnings } from './earnings';
import { EarningsBreakdown } from './earningsBreakdown';
import { EarningsBreakdownCanonicalDescription } from './earningsBreakdownCanonicalDescription';
import { EarningsTotal } from './earningsTotal';
import { Email } from './email';
import { Employee } from './employee';
import { EmployeeIncomeSummaryFieldString } from './employeeIncomeSummaryFieldString';
import { Employer } from './employer';
import { EmployerIncomeSummaryFieldString } from './employerIncomeSummaryFieldString';
import { EmployerVerification } from './employerVerification';
import { EmployersSearchRequest } from './employersSearchRequest';
import { EmployersSearchResponse } from './employersSearchResponse';
import { EmploymentDetails } from './employmentDetails';
import { EmploymentVerification } from './employmentVerification';
import { EmploymentVerificationGetRequest } from './employmentVerificationGetRequest';
import { EmploymentVerificationGetResponse } from './employmentVerificationGetResponse';
import { EmploymentVerificationStatus } from './employmentVerificationStatus';
import { ExternalPaymentOptions } from './externalPaymentOptions';
import { ExternalPaymentRefundDetails } from './externalPaymentRefundDetails';
import { ExternalPaymentScheduleBase } from './externalPaymentScheduleBase';
import { ExternalPaymentScheduleGet } from './externalPaymentScheduleGet';
import { ExternalPaymentScheduleRequest } from './externalPaymentScheduleRequest';
import { HealthIncident } from './healthIncident';
import { HistoricalBalance } from './historicalBalance';
import { HistoricalUpdateWebhook } from './historicalUpdateWebhook';
import { Holding } from './holding';
import { HoldingsDefaultUpdateWebhook } from './holdingsDefaultUpdateWebhook';
import { HoldingsOverride } from './holdingsOverride';
import { IdentityGetRequest } from './identityGetRequest';
import { IdentityGetRequestOptions } from './identityGetRequestOptions';
import { IdentityGetResponse } from './identityGetResponse';
import { IncidentUpdate } from './incidentUpdate';
import { IncomeBreakdown } from './incomeBreakdown';
import { IncomeBreakdownType } from './incomeBreakdownType';
import { IncomeOverride } from './incomeOverride';
import { IncomeSummary } from './incomeSummary';
import { IncomeSummaryFieldNumber } from './incomeSummaryFieldNumber';
import { IncomeSummaryFieldString } from './incomeSummaryFieldString';
import { IncomeVerificationCreateRequest } from './incomeVerificationCreateRequest';
import { IncomeVerificationCreateRequestOptions } from './incomeVerificationCreateRequestOptions';
import { IncomeVerificationCreateResponse } from './incomeVerificationCreateResponse';
import { IncomeVerificationDocumentsDownloadRequest } from './incomeVerificationDocumentsDownloadRequest';
import { IncomeVerificationPaystubGetRequest } from './incomeVerificationPaystubGetRequest';
import { IncomeVerificationPaystubGetResponse } from './incomeVerificationPaystubGetResponse';
import { IncomeVerificationPaystubsGetRequest } from './incomeVerificationPaystubsGetRequest';
import { IncomeVerificationPaystubsGetResponse } from './incomeVerificationPaystubsGetResponse';
import { IncomeVerificationPrecheckConfidence } from './incomeVerificationPrecheckConfidence';
import { IncomeVerificationPrecheckEmployer } from './incomeVerificationPrecheckEmployer';
import { IncomeVerificationPrecheckEmployerAddress } from './incomeVerificationPrecheckEmployerAddress';
import { IncomeVerificationPrecheckEmployerAddressData } from './incomeVerificationPrecheckEmployerAddressData';
import { IncomeVerificationPrecheckMilitaryInfo } from './incomeVerificationPrecheckMilitaryInfo';
import { IncomeVerificationPrecheckRequest } from './incomeVerificationPrecheckRequest';
import { IncomeVerificationPrecheckResponse } from './incomeVerificationPrecheckResponse';
import { IncomeVerificationPrecheckUser } from './incomeVerificationPrecheckUser';
import { IncomeVerificationRefreshRequest } from './incomeVerificationRefreshRequest';
import { IncomeVerificationRefreshResponse } from './incomeVerificationRefreshResponse';
import { IncomeVerificationStatusWebhook } from './incomeVerificationStatusWebhook';
import { IncomeVerificationSummaryGetRequest } from './incomeVerificationSummaryGetRequest';
import { IncomeVerificationSummaryGetResponse } from './incomeVerificationSummaryGetResponse';
import { IncomeVerificationTaxformsGetRequest } from './incomeVerificationTaxformsGetRequest';
import { IncomeVerificationTaxformsGetResponse } from './incomeVerificationTaxformsGetResponse';
import { IncomeVerificationWebhookStatus } from './incomeVerificationWebhookStatus';
import { InflowModel } from './inflowModel';
import { InitialUpdateWebhook } from './initialUpdateWebhook';
import { Institution } from './institution';
import { InstitutionStatus } from './institutionStatus';
import { InstitutionsGetByIdRequest } from './institutionsGetByIdRequest';
import { InstitutionsGetByIdRequestOptions } from './institutionsGetByIdRequestOptions';
import { InstitutionsGetByIdResponse } from './institutionsGetByIdResponse';
import { InstitutionsGetRequest } from './institutionsGetRequest';
import { InstitutionsGetRequestOptions } from './institutionsGetRequestOptions';
import { InstitutionsGetResponse } from './institutionsGetResponse';
import { InstitutionsSearchAccountFilter } from './institutionsSearchAccountFilter';
import { InstitutionsSearchPaymentInitiationOptions } from './institutionsSearchPaymentInitiationOptions';
import { InstitutionsSearchRequest } from './institutionsSearchRequest';
import { InstitutionsSearchRequestOptions } from './institutionsSearchRequestOptions';
import { InstitutionsSearchResponse } from './institutionsSearchResponse';
import { InvestmentAccountSubtype } from './investmentAccountSubtype';
import { InvestmentFilter } from './investmentFilter';
import { InvestmentHoldingsGetRequestOptions } from './investmentHoldingsGetRequestOptions';
import { InvestmentTransaction } from './investmentTransaction';
import { InvestmentsDefaultUpdateWebhook } from './investmentsDefaultUpdateWebhook';
import { InvestmentsHoldingsGetRequest } from './investmentsHoldingsGetRequest';
import { InvestmentsHoldingsGetResponse } from './investmentsHoldingsGetResponse';
import { InvestmentsTransactionsGetRequest } from './investmentsTransactionsGetRequest';
import { InvestmentsTransactionsGetRequestOptions } from './investmentsTransactionsGetRequestOptions';
import { InvestmentsTransactionsGetResponse } from './investmentsTransactionsGetResponse';
import { InvestmentsTransactionsOverride } from './investmentsTransactionsOverride';
import { Item } from './item';
import { ItemAccessTokenInvalidateRequest } from './itemAccessTokenInvalidateRequest';
import { ItemAccessTokenInvalidateResponse } from './itemAccessTokenInvalidateResponse';
import { ItemApplicationListRequest } from './itemApplicationListRequest';
import { ItemApplicationListResponse } from './itemApplicationListResponse';
import { ItemApplicationListUserAuth } from './itemApplicationListUserAuth';
import { ItemApplicationScopesUpdateRequest } from './itemApplicationScopesUpdateRequest';
import { ItemApplicationScopesUpdateResponse } from './itemApplicationScopesUpdateResponse';
import { ItemErrorWebhook } from './itemErrorWebhook';
import { ItemGetRequest } from './itemGetRequest';
import { ItemGetResponse } from './itemGetResponse';
import { ItemImportRequest } from './itemImportRequest';
import { ItemImportRequestOptions } from './itemImportRequestOptions';
import { ItemImportRequestUserAuth } from './itemImportRequestUserAuth';
import { ItemImportResponse } from './itemImportResponse';
import { ItemProductReadyWebhook } from './itemProductReadyWebhook';
import { ItemPublicTokenCreateRequest } from './itemPublicTokenCreateRequest';
import { ItemPublicTokenCreateResponse } from './itemPublicTokenCreateResponse';
import { ItemPublicTokenExchangeRequest } from './itemPublicTokenExchangeRequest';
import { ItemPublicTokenExchangeResponse } from './itemPublicTokenExchangeResponse';
import { ItemRemoveRequest } from './itemRemoveRequest';
import { ItemRemoveResponse } from './itemRemoveResponse';
import { ItemStatus } from './itemStatus';
import { ItemStatusInvestments } from './itemStatusInvestments';
import { ItemStatusLastWebhook } from './itemStatusLastWebhook';
import { ItemStatusNullable } from './itemStatusNullable';
import { ItemStatusTransactions } from './itemStatusTransactions';
import { ItemWebhookUpdateRequest } from './itemWebhookUpdateRequest';
import { ItemWebhookUpdateResponse } from './itemWebhookUpdateResponse';
import { JWKPublicKey } from './jWKPublicKey';
import { JWTHeader } from './jWTHeader';
import { LiabilitiesDefaultUpdateWebhook } from './liabilitiesDefaultUpdateWebhook';
import { LiabilitiesGetRequest } from './liabilitiesGetRequest';
import { LiabilitiesGetRequestOptions } from './liabilitiesGetRequestOptions';
import { LiabilitiesGetResponse } from './liabilitiesGetResponse';
import { LiabilitiesObject } from './liabilitiesObject';
import { LiabilityOverride } from './liabilityOverride';
import { LinkTokenAccountFilters } from './linkTokenAccountFilters';
import { LinkTokenCreateCreditFilter } from './linkTokenCreateCreditFilter';
import { LinkTokenCreateDepositoryFilter } from './linkTokenCreateDepositoryFilter';
import { LinkTokenCreateInvestmentFilter } from './linkTokenCreateInvestmentFilter';
import { LinkTokenCreateLoanFilter } from './linkTokenCreateLoanFilter';
import { LinkTokenCreateRequest } from './linkTokenCreateRequest';
import { LinkTokenCreateRequestAccountSubtypes } from './linkTokenCreateRequestAccountSubtypes';
import { LinkTokenCreateRequestAuth } from './linkTokenCreateRequestAuth';
import { LinkTokenCreateRequestDepositSwitch } from './linkTokenCreateRequestDepositSwitch';
import { LinkTokenCreateRequestIncomeVerification } from './linkTokenCreateRequestIncomeVerification';
import { LinkTokenCreateRequestPaymentInitiation } from './linkTokenCreateRequestPaymentInitiation';
import { LinkTokenCreateRequestTransfer } from './linkTokenCreateRequestTransfer';
import { LinkTokenCreateRequestUpdate } from './linkTokenCreateRequestUpdate';
import { LinkTokenCreateRequestUser } from './linkTokenCreateRequestUser';
import { LinkTokenCreateResponse } from './linkTokenCreateResponse';
import { LinkTokenEUConfig } from './linkTokenEUConfig';
import { LinkTokenGetMetadataResponse } from './linkTokenGetMetadataResponse';
import { LinkTokenGetRequest } from './linkTokenGetRequest';
import { LinkTokenGetResponse } from './linkTokenGetResponse';
import { LoanAccountSubtype } from './loanAccountSubtype';
import { LoanFilter } from './loanFilter';
import { Location } from './location';
import { MFA } from './mFA';
import { Meta } from './meta';
import { ModelError } from './modelError';
import { MortgageInterestRate } from './mortgageInterestRate';
import { MortgageLiability } from './mortgageLiability';
import { MortgagePropertyAddress } from './mortgagePropertyAddress';
import { NetPay } from './netPay';
import { NewAccountsAvailableWebhook } from './newAccountsAvailableWebhook';
import { Numbers } from './numbers';
import { NumbersACH } from './numbersACH';
import { NumbersACHNullable } from './numbersACHNullable';
import { NumbersBACS } from './numbersBACS';
import { NumbersBACSNullable } from './numbersBACSNullable';
import { NumbersEFT } from './numbersEFT';
import { NumbersEFTNullable } from './numbersEFTNullable';
import { NumbersInternational } from './numbersInternational';
import { NumbersInternationalNullable } from './numbersInternationalNullable';
import { OverrideAccountType } from './overrideAccountType';
import { OverrideAccounts } from './overrideAccounts';
import { Owner } from './owner';
import { OwnerOverride } from './ownerOverride';
import { PSLFStatus } from './pSLFStatus';
import { Pay } from './pay';
import { PayFrequency } from './payFrequency';
import { PayFrequencyValue } from './payFrequencyValue';
import { PayPeriodDetails } from './payPeriodDetails';
import { PaymentAmount } from './paymentAmount';
import { PaymentInitiationAddress } from './paymentInitiationAddress';
import { PaymentInitiationMetadata } from './paymentInitiationMetadata';
import { PaymentInitiationOptionalRestrictionBacs } from './paymentInitiationOptionalRestrictionBacs';
import { PaymentInitiationPayment } from './paymentInitiationPayment';
import { PaymentInitiationPaymentCreateRequest } from './paymentInitiationPaymentCreateRequest';
import { PaymentInitiationPaymentCreateResponse } from './paymentInitiationPaymentCreateResponse';
import { PaymentInitiationPaymentGetRequest } from './paymentInitiationPaymentGetRequest';
import { PaymentInitiationPaymentGetResponse } from './paymentInitiationPaymentGetResponse';
import { PaymentInitiationPaymentListRequest } from './paymentInitiationPaymentListRequest';
import { PaymentInitiationPaymentListResponse } from './paymentInitiationPaymentListResponse';
import { PaymentInitiationPaymentReverseRequest } from './paymentInitiationPaymentReverseRequest';
import { PaymentInitiationPaymentReverseResponse } from './paymentInitiationPaymentReverseResponse';
import { PaymentInitiationPaymentStatus } from './paymentInitiationPaymentStatus';
import { PaymentInitiationPaymentTokenCreateRequest } from './paymentInitiationPaymentTokenCreateRequest';
import { PaymentInitiationPaymentTokenCreateResponse } from './paymentInitiationPaymentTokenCreateResponse';
import { PaymentInitiationRecipient } from './paymentInitiationRecipient';
import { PaymentInitiationRecipientCreateRequest } from './paymentInitiationRecipientCreateRequest';
import { PaymentInitiationRecipientCreateResponse } from './paymentInitiationRecipientCreateResponse';
import { PaymentInitiationRecipientGetRequest } from './paymentInitiationRecipientGetRequest';
import { PaymentInitiationRecipientGetResponse } from './paymentInitiationRecipientGetResponse';
import { PaymentInitiationRecipientGetResponseAllOf } from './paymentInitiationRecipientGetResponseAllOf';
import { PaymentInitiationRecipientListRequest } from './paymentInitiationRecipientListRequest';
import { PaymentInitiationRecipientListResponse } from './paymentInitiationRecipientListResponse';
import { PaymentInitiationRefund } from './paymentInitiationRefund';
import { PaymentInitiationStandingOrderMetadata } from './paymentInitiationStandingOrderMetadata';
import { PaymentMeta } from './paymentMeta';
import { PaymentScheduleInterval } from './paymentScheduleInterval';
import { PaymentScheme } from './paymentScheme';
import { PaymentStatusUpdateWebhook } from './paymentStatusUpdateWebhook';
import { Paystub } from './paystub';
import { PaystubAddress } from './paystubAddress';
import { PaystubDeduction } from './paystubDeduction';
import { PaystubDetails } from './paystubDetails';
import { PaystubEmployer } from './paystubEmployer';
import { PaystubOverride } from './paystubOverride';
import { PaystubOverrideEmployee } from './paystubOverrideEmployee';
import { PaystubOverrideEmployeeAddress } from './paystubOverrideEmployeeAddress';
import { PaystubOverrideEmployer } from './paystubOverrideEmployer';
import { PaystubPayFrequency } from './paystubPayFrequency';
import { PaystubVerification } from './paystubVerification';
import { PaystubVerificationStatus } from './paystubVerificationStatus';
import { PaystubYTDDetails } from './paystubYTDDetails';
import { PendingExpirationWebhook } from './pendingExpirationWebhook';
import { PersonalFinanceCategory } from './personalFinanceCategory';
import { PhoneNumber } from './phoneNumber';
import { PlaidError } from './plaidError';
import { PlatformIds } from './platformIds';
import { ProcessorApexProcessorTokenCreateRequest } from './processorApexProcessorTokenCreateRequest';
import { ProcessorAuthGetRequest } from './processorAuthGetRequest';
import { ProcessorAuthGetResponse } from './processorAuthGetResponse';
import { ProcessorBalanceGetRequest } from './processorBalanceGetRequest';
import { ProcessorBalanceGetRequestOptions } from './processorBalanceGetRequestOptions';
import { ProcessorBalanceGetResponse } from './processorBalanceGetResponse';
import { ProcessorBankTransferCreateRequest } from './processorBankTransferCreateRequest';
import { ProcessorBankTransferCreateResponse } from './processorBankTransferCreateResponse';
import { ProcessorIdentityGetRequest } from './processorIdentityGetRequest';
import { ProcessorIdentityGetResponse } from './processorIdentityGetResponse';
import { ProcessorNumber } from './processorNumber';
import { ProcessorStripeBankAccountTokenCreateRequest } from './processorStripeBankAccountTokenCreateRequest';
import { ProcessorStripeBankAccountTokenCreateResponse } from './processorStripeBankAccountTokenCreateResponse';
import { ProcessorTokenCreateRequest } from './processorTokenCreateRequest';
import { ProcessorTokenCreateResponse } from './processorTokenCreateResponse';
import { ProductAccess } from './productAccess';
import { ProductStatus } from './productStatus';
import { ProductStatusBreakdown } from './productStatusBreakdown';
import { Products } from './products';
import { ProjectedIncomeSummaryFieldNumber } from './projectedIncomeSummaryFieldNumber';
import { RecaptchaRequiredError } from './recaptchaRequiredError';
import { RecipientBACS } from './recipientBACS';
import { RecipientBACSNullable } from './recipientBACSNullable';
import { RecurringTransactionFrequency } from './recurringTransactionFrequency';
import { RemovedTransaction } from './removedTransaction';
import { RequestedScopes } from './requestedScopes';
import { SandboxBankTransferFireWebhookRequest } from './sandboxBankTransferFireWebhookRequest';
import { SandboxBankTransferFireWebhookResponse } from './sandboxBankTransferFireWebhookResponse';
import { SandboxBankTransferSimulateRequest } from './sandboxBankTransferSimulateRequest';
import { SandboxBankTransferSimulateResponse } from './sandboxBankTransferSimulateResponse';
import { SandboxIncomeFireWebhookRequest } from './sandboxIncomeFireWebhookRequest';
import { SandboxIncomeFireWebhookResponse } from './sandboxIncomeFireWebhookResponse';
import { SandboxItemFireWebhookRequest } from './sandboxItemFireWebhookRequest';
import { SandboxItemFireWebhookResponse } from './sandboxItemFireWebhookResponse';
import { SandboxItemResetLoginRequest } from './sandboxItemResetLoginRequest';
import { SandboxItemResetLoginResponse } from './sandboxItemResetLoginResponse';
import { SandboxItemSetVerificationStatusRequest } from './sandboxItemSetVerificationStatusRequest';
import { SandboxItemSetVerificationStatusResponse } from './sandboxItemSetVerificationStatusResponse';
import { SandboxOauthSelectAccountsRequest } from './sandboxOauthSelectAccountsRequest';
import { SandboxProcessorTokenCreateRequest } from './sandboxProcessorTokenCreateRequest';
import { SandboxProcessorTokenCreateRequestOptions } from './sandboxProcessorTokenCreateRequestOptions';
import { SandboxProcessorTokenCreateResponse } from './sandboxProcessorTokenCreateResponse';
import { SandboxPublicTokenCreateRequest } from './sandboxPublicTokenCreateRequest';
import { SandboxPublicTokenCreateRequestOptions } from './sandboxPublicTokenCreateRequestOptions';
import { SandboxPublicTokenCreateRequestOptionsTransactions } from './sandboxPublicTokenCreateRequestOptionsTransactions';
import { SandboxPublicTokenCreateResponse } from './sandboxPublicTokenCreateResponse';
import { SandboxTransferRepaymentSimulateRequest } from './sandboxTransferRepaymentSimulateRequest';
import { SandboxTransferRepaymentSimulateResponse } from './sandboxTransferRepaymentSimulateResponse';
import { SandboxTransferSimulateRequest } from './sandboxTransferSimulateRequest';
import { SandboxTransferSimulateResponse } from './sandboxTransferSimulateResponse';
import { SandboxTransferSweepSimulateRequest } from './sandboxTransferSweepSimulateRequest';
import { SandboxTransferSweepSimulateResponse } from './sandboxTransferSweepSimulateResponse';
import { Scopes } from './scopes';
import { ScopesContext } from './scopesContext';
import { ScopesNullable } from './scopesNullable';
import { Security } from './security';
import { SecurityOverride } from './securityOverride';
import { SenderBACSNullable } from './senderBACSNullable';
import { ServicerAddressData } from './servicerAddressData';
import { SignalAddressData } from './signalAddressData';
import { SignalDecisionReportRequest } from './signalDecisionReportRequest';
import { SignalDecisionReportResponse } from './signalDecisionReportResponse';
import { SignalDevice } from './signalDevice';
import { SignalEvaluateCoreAttributes } from './signalEvaluateCoreAttributes';
import { SignalEvaluateRequest } from './signalEvaluateRequest';
import { SignalEvaluateResponse } from './signalEvaluateResponse';
import { SignalPersonName } from './signalPersonName';
import { SignalReturnReportRequest } from './signalReturnReportRequest';
import { SignalReturnReportResponse } from './signalReturnReportResponse';
import { SignalScores } from './signalScores';
import { SignalUser } from './signalUser';
import { SimulatedTransferSweep } from './simulatedTransferSweep';
import { StandaloneAccountType } from './standaloneAccountType';
import { StandaloneCurrencyCodeList } from './standaloneCurrencyCodeList';
import { StandaloneInvestmentTransactionType } from './standaloneInvestmentTransactionType';
import { StudentLoan } from './studentLoan';
import { StudentLoanRepaymentModel } from './studentLoanRepaymentModel';
import { StudentLoanStatus } from './studentLoanStatus';
import { StudentRepaymentPlan } from './studentRepaymentPlan';
import { Taxform } from './taxform';
import { TaxpayerID } from './taxpayerID';
import { Total } from './total';
import { TotalCanonicalDescription } from './totalCanonicalDescription';
import { Transaction } from './transaction';
import { TransactionAllOf } from './transactionAllOf';
import { TransactionBase } from './transactionBase';
import { TransactionCode } from './transactionCode';
import { TransactionData } from './transactionData';
import { TransactionOverride } from './transactionOverride';
import { TransactionStream } from './transactionStream';
import { TransactionStreamAmount } from './transactionStreamAmount';
import { TransactionsGetRequest } from './transactionsGetRequest';
import { TransactionsGetRequestOptions } from './transactionsGetRequestOptions';
import { TransactionsGetResponse } from './transactionsGetResponse';
import { TransactionsRecurringGetRequest } from './transactionsRecurringGetRequest';
import { TransactionsRecurringGetResponse } from './transactionsRecurringGetResponse';
import { TransactionsRefreshRequest } from './transactionsRefreshRequest';
import { TransactionsRefreshResponse } from './transactionsRefreshResponse';
import { TransactionsRemovedWebhook } from './transactionsRemovedWebhook';
import { TransactionsSyncRequest } from './transactionsSyncRequest';
import { TransactionsSyncResponse } from './transactionsSyncResponse';
import { Transfer } from './transfer';
import { TransferAuthorization } from './transferAuthorization';
import { TransferAuthorizationCreateRequest } from './transferAuthorizationCreateRequest';
import { TransferAuthorizationCreateResponse } from './transferAuthorizationCreateResponse';
import { TransferAuthorizationDecisionRationale } from './transferAuthorizationDecisionRationale';
import { TransferAuthorizationDevice } from './transferAuthorizationDevice';
import { TransferAuthorizationGuaranteeDecision } from './transferAuthorizationGuaranteeDecision';
import { TransferAuthorizationGuaranteeDecisionRationale } from './transferAuthorizationGuaranteeDecisionRationale';
import { TransferAuthorizationProposedTransfer } from './transferAuthorizationProposedTransfer';
import { TransferCancelRequest } from './transferCancelRequest';
import { TransferCancelResponse } from './transferCancelResponse';
import { TransferCreateRequest } from './transferCreateRequest';
import { TransferCreateResponse } from './transferCreateResponse';
import { TransferEvent } from './transferEvent';
import { TransferEventListRequest } from './transferEventListRequest';
import { TransferEventListResponse } from './transferEventListResponse';
import { TransferEventSyncRequest } from './transferEventSyncRequest';
import { TransferEventSyncResponse } from './transferEventSyncResponse';
import { TransferEventType } from './transferEventType';
import { TransferFailure } from './transferFailure';
import { TransferGetRequest } from './transferGetRequest';
import { TransferGetResponse } from './transferGetResponse';
import { TransferIntentCreate } from './transferIntentCreate';
import { TransferIntentCreateMode } from './transferIntentCreateMode';
import { TransferIntentCreateRequest } from './transferIntentCreateRequest';
import { TransferIntentCreateResponse } from './transferIntentCreateResponse';
import { TransferIntentGet } from './transferIntentGet';
import { TransferIntentGetFailureReason } from './transferIntentGetFailureReason';
import { TransferIntentGetRequest } from './transferIntentGetRequest';
import { TransferIntentGetResponse } from './transferIntentGetResponse';
import { TransferListRequest } from './transferListRequest';
import { TransferListResponse } from './transferListResponse';
import { TransferNetwork } from './transferNetwork';
import { TransferRepayment } from './transferRepayment';
import { TransferRepaymentListRequest } from './transferRepaymentListRequest';
import { TransferRepaymentListResponse } from './transferRepaymentListResponse';
import { TransferRepaymentReturn } from './transferRepaymentReturn';
import { TransferRepaymentReturnListRequest } from './transferRepaymentReturnListRequest';
import { TransferRepaymentReturnListResponse } from './transferRepaymentReturnListResponse';
import { TransferStatus } from './transferStatus';
import { TransferSweep } from './transferSweep';
import { TransferSweepGetRequest } from './transferSweepGetRequest';
import { TransferSweepGetResponse } from './transferSweepGetResponse';
import { TransferSweepListRequest } from './transferSweepListRequest';
import { TransferSweepListResponse } from './transferSweepListResponse';
import { TransferSweepStatus } from './transferSweepStatus';
import { TransferType } from './transferType';
import { TransferUserAddressInRequest } from './transferUserAddressInRequest';
import { TransferUserAddressInResponse } from './transferUserAddressInResponse';
import { TransferUserInRequest } from './transferUserInRequest';
import { TransferUserInResponse } from './transferUserInResponse';
import { UserCustomPassword } from './userCustomPassword';
import { UserPermissionRevokedWebhook } from './userPermissionRevokedWebhook';
import { VerificationAttribute } from './verificationAttribute';
import { VerificationExpiredWebhook } from './verificationExpiredWebhook';
import { VerificationRefreshStatus } from './verificationRefreshStatus';
import { VerificationStatus } from './verificationStatus';
import { W2 } from './w2';
import { W2Box12 } from './w2Box12';
import { W2StateAndLocalWages } from './w2StateAndLocalWages';
import { WalletBalance } from './walletBalance';
import { WalletGetRequest } from './walletGetRequest';
import { WalletGetResponse } from './walletGetResponse';
import { WalletTransaction } from './walletTransaction';
import { WalletTransactionAmount } from './walletTransactionAmount';
import { WalletTransactionCounterparty } from './walletTransactionCounterparty';
import { WalletTransactionCounterpartyBACS } from './walletTransactionCounterpartyBACS';
import { WalletTransactionCounterpartyNumbers } from './walletTransactionCounterpartyNumbers';
import { WalletTransactionExecuteRequest } from './walletTransactionExecuteRequest';
import { WalletTransactionExecuteResponse } from './walletTransactionExecuteResponse';
import { WalletTransactionStatus } from './walletTransactionStatus';
import { WalletTransactionsListRequest } from './walletTransactionsListRequest';
import { WalletTransactionsListResponse } from './walletTransactionsListResponse';
import { Warning } from './warning';
import { WebhookUpdateAcknowledgedWebhook } from './webhookUpdateAcknowledgedWebhook';
import { WebhookVerificationKeyGetRequest } from './webhookVerificationKeyGetRequest';
import { WebhookVerificationKeyGetResponse } from './webhookVerificationKeyGetResponse';
import { YTDGrossIncomeSummaryFieldNumber } from './yTDGrossIncomeSummaryFieldNumber';
import { YTDNetIncomeSummaryFieldNumber } from './yTDNetIncomeSummaryFieldNumber';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ACHClass": ACHClass,
        "APR.AprTypeEnum": APR.AprTypeEnum,
        "AccountAssets.VerificationStatusEnum": AccountAssets.VerificationStatusEnum,
        "AccountBase.VerificationStatusEnum": AccountBase.VerificationStatusEnum,
        "AccountIdentity.VerificationStatusEnum": AccountIdentity.VerificationStatusEnum,
        "AccountSelectionCardinality": AccountSelectionCardinality,
        "AccountSubtype": AccountSubtype,
        "AccountType": AccountType,
        "AssetReportTransaction.TransactionTypeEnum": AssetReportTransaction.TransactionTypeEnum,
        "BankTransferDirection": BankTransferDirection,
        "BankTransferEventListRequest.BankTransferTypeEnum": BankTransferEventListRequest.BankTransferTypeEnum,
        "BankTransferEventListRequest.DirectionEnum": BankTransferEventListRequest.DirectionEnum,
        "BankTransferEventType": BankTransferEventType,
        "BankTransferNetwork": BankTransferNetwork,
        "BankTransferStatus": BankTransferStatus,
        "BankTransferType": BankTransferType,
        "ConnectedApplication.ProductDataTypesEnum": ConnectedApplication.ProductDataTypesEnum,
        "CountryCode": CountryCode,
        "CreditAccountSubtype": CreditAccountSubtype,
        "DepositSwitchAltCreateRequest.CountryCodeEnum": DepositSwitchAltCreateRequest.CountryCodeEnum,
        "DepositSwitchCreateRequest.CountryCodeEnum": DepositSwitchCreateRequest.CountryCodeEnum,
        "DepositSwitchGetResponse.StateEnum": DepositSwitchGetResponse.StateEnum,
        "DepositSwitchGetResponse.SwitchMethodEnum": DepositSwitchGetResponse.SwitchMethodEnum,
        "DepositSwitchTargetAccount.AccountSubtypeEnum": DepositSwitchTargetAccount.AccountSubtypeEnum,
        "DepositoryAccountSubtype": DepositoryAccountSubtype,
        "DocType": DocType,
        "EarningsBreakdownCanonicalDescription": EarningsBreakdownCanonicalDescription,
        "Email.TypeEnum": Email.TypeEnum,
        "EmploymentVerificationStatus": EmploymentVerificationStatus,
        "IncidentUpdate.StatusEnum": IncidentUpdate.StatusEnum,
        "IncomeBreakdownType": IncomeBreakdownType,
        "IncomeVerificationPrecheckConfidence": IncomeVerificationPrecheckConfidence,
        "IncomeVerificationPrecheckMilitaryInfo.BranchEnum": IncomeVerificationPrecheckMilitaryInfo.BranchEnum,
        "InvestmentAccountSubtype": InvestmentAccountSubtype,
        "InvestmentTransaction.TypeEnum": InvestmentTransaction.TypeEnum,
        "InvestmentTransaction.SubtypeEnum": InvestmentTransaction.SubtypeEnum,
        "Item.UpdateTypeEnum": Item.UpdateTypeEnum,
        "LinkTokenCreateRequestAuth.FlowTypeEnum": LinkTokenCreateRequestAuth.FlowTypeEnum,
        "LoanAccountSubtype": LoanAccountSubtype,
        "ModelError.ErrorTypeEnum": ModelError.ErrorTypeEnum,
        "OverrideAccountType": OverrideAccountType,
        "PayFrequencyValue": PayFrequencyValue,
        "PayPeriodDetails.PayFrequencyEnum": PayPeriodDetails.PayFrequencyEnum,
        "PaymentAmount.CurrencyEnum": PaymentAmount.CurrencyEnum,
        "PaymentInitiationPaymentCreateResponse.StatusEnum": PaymentInitiationPaymentCreateResponse.StatusEnum,
        "PaymentInitiationPaymentReverseResponse.StatusEnum": PaymentInitiationPaymentReverseResponse.StatusEnum,
        "PaymentInitiationPaymentStatus": PaymentInitiationPaymentStatus,
        "PaymentInitiationRefund.StatusEnum": PaymentInitiationRefund.StatusEnum,
        "PaymentScheduleInterval": PaymentScheduleInterval,
        "PaymentScheme": PaymentScheme,
        "PaystubPayFrequency": PaystubPayFrequency,
        "PaystubVerificationStatus": PaystubVerificationStatus,
        "PhoneNumber.TypeEnum": PhoneNumber.TypeEnum,
        "PlaidError.ErrorTypeEnum": PlaidError.ErrorTypeEnum,
        "ProcessorTokenCreateRequest.ProcessorEnum": ProcessorTokenCreateRequest.ProcessorEnum,
        "ProductStatus.StatusEnum": ProductStatus.StatusEnum,
        "ProductStatusBreakdown.RefreshIntervalEnum": ProductStatusBreakdown.RefreshIntervalEnum,
        "Products": Products,
        "RecurringTransactionFrequency": RecurringTransactionFrequency,
        "SandboxIncomeFireWebhookRequest.VerificationStatusEnum": SandboxIncomeFireWebhookRequest.VerificationStatusEnum,
        "SandboxItemFireWebhookRequest.WebhookCodeEnum": SandboxItemFireWebhookRequest.WebhookCodeEnum,
        "SandboxItemSetVerificationStatusRequest.VerificationStatusEnum": SandboxItemSetVerificationStatusRequest.VerificationStatusEnum,
        "ScopesContext": ScopesContext,
        "StudentLoanStatus.TypeEnum": StudentLoanStatus.TypeEnum,
        "StudentRepaymentPlan.TypeEnum": StudentRepaymentPlan.TypeEnum,
        "TotalCanonicalDescription": TotalCanonicalDescription,
        "Transaction.TransactionTypeEnum": Transaction.TransactionTypeEnum,
        "Transaction.PaymentChannelEnum": Transaction.PaymentChannelEnum,
        "TransactionAllOf.PaymentChannelEnum": TransactionAllOf.PaymentChannelEnum,
        "TransactionBase.TransactionTypeEnum": TransactionBase.TransactionTypeEnum,
        "TransactionCode": TransactionCode,
        "TransferAuthorization.DecisionEnum": TransferAuthorization.DecisionEnum,
        "TransferAuthorizationDecisionRationale.CodeEnum": TransferAuthorizationDecisionRationale.CodeEnum,
        "TransferAuthorizationGuaranteeDecision": TransferAuthorizationGuaranteeDecision,
        "TransferAuthorizationGuaranteeDecisionRationale.CodeEnum": TransferAuthorizationGuaranteeDecisionRationale.CodeEnum,
        "TransferEventListRequest.TransferTypeEnum": TransferEventListRequest.TransferTypeEnum,
        "TransferEventType": TransferEventType,
        "TransferIntentCreate.StatusEnum": TransferIntentCreate.StatusEnum,
        "TransferIntentCreateMode": TransferIntentCreateMode,
        "TransferIntentGet.StatusEnum": TransferIntentGet.StatusEnum,
        "TransferIntentGet.AuthorizationDecisionEnum": TransferIntentGet.AuthorizationDecisionEnum,
        "TransferNetwork": TransferNetwork,
        "TransferStatus": TransferStatus,
        "TransferSweepStatus": TransferSweepStatus,
        "TransferType": TransferType,
        "VerificationAttribute.TypeEnum": VerificationAttribute.TypeEnum,
        "VerificationRefreshStatus": VerificationRefreshStatus,
        "VerificationStatus": VerificationStatus,
        "WalletTransaction.TypeEnum": WalletTransaction.TypeEnum,
        "WalletTransactionAmount.IsoCurrencyCodeEnum": WalletTransactionAmount.IsoCurrencyCodeEnum,
        "WalletTransactionStatus": WalletTransactionStatus,
        "Warning.WarningCodeEnum": Warning.WarningCodeEnum,
}

let typeMap: {[index: string]: any} = {
    "APR": APR,
    "AccountAccess": AccountAccess,
    "AccountAssets": AccountAssets,
    "AccountAssetsAllOf": AccountAssetsAllOf,
    "AccountBalance": AccountBalance,
    "AccountBase": AccountBase,
    "AccountFilter": AccountFilter,
    "AccountFiltersResponse": AccountFiltersResponse,
    "AccountIdentity": AccountIdentity,
    "AccountIdentityAllOf": AccountIdentityAllOf,
    "AccountProductAccess": AccountProductAccess,
    "AccountProductAccessNullable": AccountProductAccessNullable,
    "AccountsBalanceGetRequest": AccountsBalanceGetRequest,
    "AccountsBalanceGetRequestOptions": AccountsBalanceGetRequestOptions,
    "AccountsGetRequest": AccountsGetRequest,
    "AccountsGetRequestOptions": AccountsGetRequestOptions,
    "AccountsGetResponse": AccountsGetResponse,
    "Address": Address,
    "AddressData": AddressData,
    "AddressDataNullable": AddressDataNullable,
    "AddressNullable": AddressNullable,
    "Application": Application,
    "ApplicationGetRequest": ApplicationGetRequest,
    "ApplicationGetResponse": ApplicationGetResponse,
    "AssetReport": AssetReport,
    "AssetReportAuditCopyCreateRequest": AssetReportAuditCopyCreateRequest,
    "AssetReportAuditCopyCreateResponse": AssetReportAuditCopyCreateResponse,
    "AssetReportAuditCopyGetRequest": AssetReportAuditCopyGetRequest,
    "AssetReportAuditCopyRemoveRequest": AssetReportAuditCopyRemoveRequest,
    "AssetReportAuditCopyRemoveResponse": AssetReportAuditCopyRemoveResponse,
    "AssetReportCreateRequest": AssetReportCreateRequest,
    "AssetReportCreateRequestOptions": AssetReportCreateRequestOptions,
    "AssetReportCreateResponse": AssetReportCreateResponse,
    "AssetReportFilterRequest": AssetReportFilterRequest,
    "AssetReportFilterResponse": AssetReportFilterResponse,
    "AssetReportGetRequest": AssetReportGetRequest,
    "AssetReportGetResponse": AssetReportGetResponse,
    "AssetReportItem": AssetReportItem,
    "AssetReportPDFGetRequest": AssetReportPDFGetRequest,
    "AssetReportRefreshRequest": AssetReportRefreshRequest,
    "AssetReportRefreshRequestOptions": AssetReportRefreshRequestOptions,
    "AssetReportRefreshResponse": AssetReportRefreshResponse,
    "AssetReportRemoveRequest": AssetReportRemoveRequest,
    "AssetReportRemoveResponse": AssetReportRemoveResponse,
    "AssetReportTransaction": AssetReportTransaction,
    "AssetReportTransactionAllOf": AssetReportTransactionAllOf,
    "AssetReportUser": AssetReportUser,
    "AssetsErrorWebhook": AssetsErrorWebhook,
    "AssetsProductReadyWebhook": AssetsProductReadyWebhook,
    "AuthGetNumbers": AuthGetNumbers,
    "AuthGetRequest": AuthGetRequest,
    "AuthGetRequestOptions": AuthGetRequestOptions,
    "AuthGetResponse": AuthGetResponse,
    "AuthMetadata": AuthMetadata,
    "AuthSupportedMethods": AuthSupportedMethods,
    "AutomaticallyVerifiedWebhook": AutomaticallyVerifiedWebhook,
    "BankInitiatedReturnRisk": BankInitiatedReturnRisk,
    "BankTransfer": BankTransfer,
    "BankTransferBalance": BankTransferBalance,
    "BankTransferBalanceGetRequest": BankTransferBalanceGetRequest,
    "BankTransferBalanceGetResponse": BankTransferBalanceGetResponse,
    "BankTransferCancelRequest": BankTransferCancelRequest,
    "BankTransferCancelResponse": BankTransferCancelResponse,
    "BankTransferCreateRequest": BankTransferCreateRequest,
    "BankTransferCreateResponse": BankTransferCreateResponse,
    "BankTransferEvent": BankTransferEvent,
    "BankTransferEventListRequest": BankTransferEventListRequest,
    "BankTransferEventListResponse": BankTransferEventListResponse,
    "BankTransferEventSyncRequest": BankTransferEventSyncRequest,
    "BankTransferEventSyncResponse": BankTransferEventSyncResponse,
    "BankTransferFailure": BankTransferFailure,
    "BankTransferGetRequest": BankTransferGetRequest,
    "BankTransferGetResponse": BankTransferGetResponse,
    "BankTransferListRequest": BankTransferListRequest,
    "BankTransferListResponse": BankTransferListResponse,
    "BankTransferMigrateAccountRequest": BankTransferMigrateAccountRequest,
    "BankTransferMigrateAccountResponse": BankTransferMigrateAccountResponse,
    "BankTransferSweep": BankTransferSweep,
    "BankTransferSweepGetRequest": BankTransferSweepGetRequest,
    "BankTransferSweepGetResponse": BankTransferSweepGetResponse,
    "BankTransferSweepListRequest": BankTransferSweepListRequest,
    "BankTransferSweepListResponse": BankTransferSweepListResponse,
    "BankTransferUser": BankTransferUser,
    "BankTransfersEventsUpdateWebhook": BankTransfersEventsUpdateWebhook,
    "CategoriesGetResponse": CategoriesGetResponse,
    "Category": Category,
    "Cause": Cause,
    "ConnectedApplication": ConnectedApplication,
    "CreditCardLiability": CreditCardLiability,
    "CreditFilter": CreditFilter,
    "CustomerInitiatedReturnRisk": CustomerInitiatedReturnRisk,
    "Deductions": Deductions,
    "DeductionsBreakdown": DeductionsBreakdown,
    "DeductionsTotal": DeductionsTotal,
    "DefaultUpdateWebhook": DefaultUpdateWebhook,
    "DepositSwitchAddressData": DepositSwitchAddressData,
    "DepositSwitchAltCreateRequest": DepositSwitchAltCreateRequest,
    "DepositSwitchAltCreateResponse": DepositSwitchAltCreateResponse,
    "DepositSwitchCreateRequest": DepositSwitchCreateRequest,
    "DepositSwitchCreateRequestOptions": DepositSwitchCreateRequestOptions,
    "DepositSwitchCreateResponse": DepositSwitchCreateResponse,
    "DepositSwitchGetRequest": DepositSwitchGetRequest,
    "DepositSwitchGetResponse": DepositSwitchGetResponse,
    "DepositSwitchStateUpdateWebhook": DepositSwitchStateUpdateWebhook,
    "DepositSwitchTargetAccount": DepositSwitchTargetAccount,
    "DepositSwitchTargetUser": DepositSwitchTargetUser,
    "DepositSwitchTokenCreateRequest": DepositSwitchTokenCreateRequest,
    "DepositSwitchTokenCreateResponse": DepositSwitchTokenCreateResponse,
    "DepositoryFilter": DepositoryFilter,
    "DistributionBreakdown": DistributionBreakdown,
    "DocumentMetadata": DocumentMetadata,
    "Earnings": Earnings,
    "EarningsBreakdown": EarningsBreakdown,
    "EarningsTotal": EarningsTotal,
    "Email": Email,
    "Employee": Employee,
    "EmployeeIncomeSummaryFieldString": EmployeeIncomeSummaryFieldString,
    "Employer": Employer,
    "EmployerIncomeSummaryFieldString": EmployerIncomeSummaryFieldString,
    "EmployerVerification": EmployerVerification,
    "EmployersSearchRequest": EmployersSearchRequest,
    "EmployersSearchResponse": EmployersSearchResponse,
    "EmploymentDetails": EmploymentDetails,
    "EmploymentVerification": EmploymentVerification,
    "EmploymentVerificationGetRequest": EmploymentVerificationGetRequest,
    "EmploymentVerificationGetResponse": EmploymentVerificationGetResponse,
    "ExternalPaymentOptions": ExternalPaymentOptions,
    "ExternalPaymentRefundDetails": ExternalPaymentRefundDetails,
    "ExternalPaymentScheduleBase": ExternalPaymentScheduleBase,
    "ExternalPaymentScheduleGet": ExternalPaymentScheduleGet,
    "ExternalPaymentScheduleRequest": ExternalPaymentScheduleRequest,
    "HealthIncident": HealthIncident,
    "HistoricalBalance": HistoricalBalance,
    "HistoricalUpdateWebhook": HistoricalUpdateWebhook,
    "Holding": Holding,
    "HoldingsDefaultUpdateWebhook": HoldingsDefaultUpdateWebhook,
    "HoldingsOverride": HoldingsOverride,
    "IdentityGetRequest": IdentityGetRequest,
    "IdentityGetRequestOptions": IdentityGetRequestOptions,
    "IdentityGetResponse": IdentityGetResponse,
    "IncidentUpdate": IncidentUpdate,
    "IncomeBreakdown": IncomeBreakdown,
    "IncomeOverride": IncomeOverride,
    "IncomeSummary": IncomeSummary,
    "IncomeSummaryFieldNumber": IncomeSummaryFieldNumber,
    "IncomeSummaryFieldString": IncomeSummaryFieldString,
    "IncomeVerificationCreateRequest": IncomeVerificationCreateRequest,
    "IncomeVerificationCreateRequestOptions": IncomeVerificationCreateRequestOptions,
    "IncomeVerificationCreateResponse": IncomeVerificationCreateResponse,
    "IncomeVerificationDocumentsDownloadRequest": IncomeVerificationDocumentsDownloadRequest,
    "IncomeVerificationPaystubGetRequest": IncomeVerificationPaystubGetRequest,
    "IncomeVerificationPaystubGetResponse": IncomeVerificationPaystubGetResponse,
    "IncomeVerificationPaystubsGetRequest": IncomeVerificationPaystubsGetRequest,
    "IncomeVerificationPaystubsGetResponse": IncomeVerificationPaystubsGetResponse,
    "IncomeVerificationPrecheckEmployer": IncomeVerificationPrecheckEmployer,
    "IncomeVerificationPrecheckEmployerAddress": IncomeVerificationPrecheckEmployerAddress,
    "IncomeVerificationPrecheckEmployerAddressData": IncomeVerificationPrecheckEmployerAddressData,
    "IncomeVerificationPrecheckMilitaryInfo": IncomeVerificationPrecheckMilitaryInfo,
    "IncomeVerificationPrecheckRequest": IncomeVerificationPrecheckRequest,
    "IncomeVerificationPrecheckResponse": IncomeVerificationPrecheckResponse,
    "IncomeVerificationPrecheckUser": IncomeVerificationPrecheckUser,
    "IncomeVerificationRefreshRequest": IncomeVerificationRefreshRequest,
    "IncomeVerificationRefreshResponse": IncomeVerificationRefreshResponse,
    "IncomeVerificationStatusWebhook": IncomeVerificationStatusWebhook,
    "IncomeVerificationSummaryGetRequest": IncomeVerificationSummaryGetRequest,
    "IncomeVerificationSummaryGetResponse": IncomeVerificationSummaryGetResponse,
    "IncomeVerificationTaxformsGetRequest": IncomeVerificationTaxformsGetRequest,
    "IncomeVerificationTaxformsGetResponse": IncomeVerificationTaxformsGetResponse,
    "IncomeVerificationWebhookStatus": IncomeVerificationWebhookStatus,
    "InflowModel": InflowModel,
    "InitialUpdateWebhook": InitialUpdateWebhook,
    "Institution": Institution,
    "InstitutionStatus": InstitutionStatus,
    "InstitutionsGetByIdRequest": InstitutionsGetByIdRequest,
    "InstitutionsGetByIdRequestOptions": InstitutionsGetByIdRequestOptions,
    "InstitutionsGetByIdResponse": InstitutionsGetByIdResponse,
    "InstitutionsGetRequest": InstitutionsGetRequest,
    "InstitutionsGetRequestOptions": InstitutionsGetRequestOptions,
    "InstitutionsGetResponse": InstitutionsGetResponse,
    "InstitutionsSearchAccountFilter": InstitutionsSearchAccountFilter,
    "InstitutionsSearchPaymentInitiationOptions": InstitutionsSearchPaymentInitiationOptions,
    "InstitutionsSearchRequest": InstitutionsSearchRequest,
    "InstitutionsSearchRequestOptions": InstitutionsSearchRequestOptions,
    "InstitutionsSearchResponse": InstitutionsSearchResponse,
    "InvestmentFilter": InvestmentFilter,
    "InvestmentHoldingsGetRequestOptions": InvestmentHoldingsGetRequestOptions,
    "InvestmentTransaction": InvestmentTransaction,
    "InvestmentsDefaultUpdateWebhook": InvestmentsDefaultUpdateWebhook,
    "InvestmentsHoldingsGetRequest": InvestmentsHoldingsGetRequest,
    "InvestmentsHoldingsGetResponse": InvestmentsHoldingsGetResponse,
    "InvestmentsTransactionsGetRequest": InvestmentsTransactionsGetRequest,
    "InvestmentsTransactionsGetRequestOptions": InvestmentsTransactionsGetRequestOptions,
    "InvestmentsTransactionsGetResponse": InvestmentsTransactionsGetResponse,
    "InvestmentsTransactionsOverride": InvestmentsTransactionsOverride,
    "Item": Item,
    "ItemAccessTokenInvalidateRequest": ItemAccessTokenInvalidateRequest,
    "ItemAccessTokenInvalidateResponse": ItemAccessTokenInvalidateResponse,
    "ItemApplicationListRequest": ItemApplicationListRequest,
    "ItemApplicationListResponse": ItemApplicationListResponse,
    "ItemApplicationListUserAuth": ItemApplicationListUserAuth,
    "ItemApplicationScopesUpdateRequest": ItemApplicationScopesUpdateRequest,
    "ItemApplicationScopesUpdateResponse": ItemApplicationScopesUpdateResponse,
    "ItemErrorWebhook": ItemErrorWebhook,
    "ItemGetRequest": ItemGetRequest,
    "ItemGetResponse": ItemGetResponse,
    "ItemImportRequest": ItemImportRequest,
    "ItemImportRequestOptions": ItemImportRequestOptions,
    "ItemImportRequestUserAuth": ItemImportRequestUserAuth,
    "ItemImportResponse": ItemImportResponse,
    "ItemProductReadyWebhook": ItemProductReadyWebhook,
    "ItemPublicTokenCreateRequest": ItemPublicTokenCreateRequest,
    "ItemPublicTokenCreateResponse": ItemPublicTokenCreateResponse,
    "ItemPublicTokenExchangeRequest": ItemPublicTokenExchangeRequest,
    "ItemPublicTokenExchangeResponse": ItemPublicTokenExchangeResponse,
    "ItemRemoveRequest": ItemRemoveRequest,
    "ItemRemoveResponse": ItemRemoveResponse,
    "ItemStatus": ItemStatus,
    "ItemStatusInvestments": ItemStatusInvestments,
    "ItemStatusLastWebhook": ItemStatusLastWebhook,
    "ItemStatusNullable": ItemStatusNullable,
    "ItemStatusTransactions": ItemStatusTransactions,
    "ItemWebhookUpdateRequest": ItemWebhookUpdateRequest,
    "ItemWebhookUpdateResponse": ItemWebhookUpdateResponse,
    "JWKPublicKey": JWKPublicKey,
    "JWTHeader": JWTHeader,
    "LiabilitiesDefaultUpdateWebhook": LiabilitiesDefaultUpdateWebhook,
    "LiabilitiesGetRequest": LiabilitiesGetRequest,
    "LiabilitiesGetRequestOptions": LiabilitiesGetRequestOptions,
    "LiabilitiesGetResponse": LiabilitiesGetResponse,
    "LiabilitiesObject": LiabilitiesObject,
    "LiabilityOverride": LiabilityOverride,
    "LinkTokenAccountFilters": LinkTokenAccountFilters,
    "LinkTokenCreateCreditFilter": LinkTokenCreateCreditFilter,
    "LinkTokenCreateDepositoryFilter": LinkTokenCreateDepositoryFilter,
    "LinkTokenCreateInvestmentFilter": LinkTokenCreateInvestmentFilter,
    "LinkTokenCreateLoanFilter": LinkTokenCreateLoanFilter,
    "LinkTokenCreateRequest": LinkTokenCreateRequest,
    "LinkTokenCreateRequestAccountSubtypes": LinkTokenCreateRequestAccountSubtypes,
    "LinkTokenCreateRequestAuth": LinkTokenCreateRequestAuth,
    "LinkTokenCreateRequestDepositSwitch": LinkTokenCreateRequestDepositSwitch,
    "LinkTokenCreateRequestIncomeVerification": LinkTokenCreateRequestIncomeVerification,
    "LinkTokenCreateRequestPaymentInitiation": LinkTokenCreateRequestPaymentInitiation,
    "LinkTokenCreateRequestTransfer": LinkTokenCreateRequestTransfer,
    "LinkTokenCreateRequestUpdate": LinkTokenCreateRequestUpdate,
    "LinkTokenCreateRequestUser": LinkTokenCreateRequestUser,
    "LinkTokenCreateResponse": LinkTokenCreateResponse,
    "LinkTokenEUConfig": LinkTokenEUConfig,
    "LinkTokenGetMetadataResponse": LinkTokenGetMetadataResponse,
    "LinkTokenGetRequest": LinkTokenGetRequest,
    "LinkTokenGetResponse": LinkTokenGetResponse,
    "LoanFilter": LoanFilter,
    "Location": Location,
    "MFA": MFA,
    "Meta": Meta,
    "ModelError": ModelError,
    "MortgageInterestRate": MortgageInterestRate,
    "MortgageLiability": MortgageLiability,
    "MortgagePropertyAddress": MortgagePropertyAddress,
    "NetPay": NetPay,
    "NewAccountsAvailableWebhook": NewAccountsAvailableWebhook,
    "Numbers": Numbers,
    "NumbersACH": NumbersACH,
    "NumbersACHNullable": NumbersACHNullable,
    "NumbersBACS": NumbersBACS,
    "NumbersBACSNullable": NumbersBACSNullable,
    "NumbersEFT": NumbersEFT,
    "NumbersEFTNullable": NumbersEFTNullable,
    "NumbersInternational": NumbersInternational,
    "NumbersInternationalNullable": NumbersInternationalNullable,
    "OverrideAccounts": OverrideAccounts,
    "Owner": Owner,
    "OwnerOverride": OwnerOverride,
    "PSLFStatus": PSLFStatus,
    "Pay": Pay,
    "PayFrequency": PayFrequency,
    "PayPeriodDetails": PayPeriodDetails,
    "PaymentAmount": PaymentAmount,
    "PaymentInitiationAddress": PaymentInitiationAddress,
    "PaymentInitiationMetadata": PaymentInitiationMetadata,
    "PaymentInitiationOptionalRestrictionBacs": PaymentInitiationOptionalRestrictionBacs,
    "PaymentInitiationPayment": PaymentInitiationPayment,
    "PaymentInitiationPaymentCreateRequest": PaymentInitiationPaymentCreateRequest,
    "PaymentInitiationPaymentCreateResponse": PaymentInitiationPaymentCreateResponse,
    "PaymentInitiationPaymentGetRequest": PaymentInitiationPaymentGetRequest,
    "PaymentInitiationPaymentGetResponse": PaymentInitiationPaymentGetResponse,
    "PaymentInitiationPaymentListRequest": PaymentInitiationPaymentListRequest,
    "PaymentInitiationPaymentListResponse": PaymentInitiationPaymentListResponse,
    "PaymentInitiationPaymentReverseRequest": PaymentInitiationPaymentReverseRequest,
    "PaymentInitiationPaymentReverseResponse": PaymentInitiationPaymentReverseResponse,
    "PaymentInitiationPaymentTokenCreateRequest": PaymentInitiationPaymentTokenCreateRequest,
    "PaymentInitiationPaymentTokenCreateResponse": PaymentInitiationPaymentTokenCreateResponse,
    "PaymentInitiationRecipient": PaymentInitiationRecipient,
    "PaymentInitiationRecipientCreateRequest": PaymentInitiationRecipientCreateRequest,
    "PaymentInitiationRecipientCreateResponse": PaymentInitiationRecipientCreateResponse,
    "PaymentInitiationRecipientGetRequest": PaymentInitiationRecipientGetRequest,
    "PaymentInitiationRecipientGetResponse": PaymentInitiationRecipientGetResponse,
    "PaymentInitiationRecipientGetResponseAllOf": PaymentInitiationRecipientGetResponseAllOf,
    "PaymentInitiationRecipientListRequest": PaymentInitiationRecipientListRequest,
    "PaymentInitiationRecipientListResponse": PaymentInitiationRecipientListResponse,
    "PaymentInitiationRefund": PaymentInitiationRefund,
    "PaymentInitiationStandingOrderMetadata": PaymentInitiationStandingOrderMetadata,
    "PaymentMeta": PaymentMeta,
    "PaymentStatusUpdateWebhook": PaymentStatusUpdateWebhook,
    "Paystub": Paystub,
    "PaystubAddress": PaystubAddress,
    "PaystubDeduction": PaystubDeduction,
    "PaystubDetails": PaystubDetails,
    "PaystubEmployer": PaystubEmployer,
    "PaystubOverride": PaystubOverride,
    "PaystubOverrideEmployee": PaystubOverrideEmployee,
    "PaystubOverrideEmployeeAddress": PaystubOverrideEmployeeAddress,
    "PaystubOverrideEmployer": PaystubOverrideEmployer,
    "PaystubVerification": PaystubVerification,
    "PaystubYTDDetails": PaystubYTDDetails,
    "PendingExpirationWebhook": PendingExpirationWebhook,
    "PersonalFinanceCategory": PersonalFinanceCategory,
    "PhoneNumber": PhoneNumber,
    "PlaidError": PlaidError,
    "PlatformIds": PlatformIds,
    "ProcessorApexProcessorTokenCreateRequest": ProcessorApexProcessorTokenCreateRequest,
    "ProcessorAuthGetRequest": ProcessorAuthGetRequest,
    "ProcessorAuthGetResponse": ProcessorAuthGetResponse,
    "ProcessorBalanceGetRequest": ProcessorBalanceGetRequest,
    "ProcessorBalanceGetRequestOptions": ProcessorBalanceGetRequestOptions,
    "ProcessorBalanceGetResponse": ProcessorBalanceGetResponse,
    "ProcessorBankTransferCreateRequest": ProcessorBankTransferCreateRequest,
    "ProcessorBankTransferCreateResponse": ProcessorBankTransferCreateResponse,
    "ProcessorIdentityGetRequest": ProcessorIdentityGetRequest,
    "ProcessorIdentityGetResponse": ProcessorIdentityGetResponse,
    "ProcessorNumber": ProcessorNumber,
    "ProcessorStripeBankAccountTokenCreateRequest": ProcessorStripeBankAccountTokenCreateRequest,
    "ProcessorStripeBankAccountTokenCreateResponse": ProcessorStripeBankAccountTokenCreateResponse,
    "ProcessorTokenCreateRequest": ProcessorTokenCreateRequest,
    "ProcessorTokenCreateResponse": ProcessorTokenCreateResponse,
    "ProductAccess": ProductAccess,
    "ProductStatus": ProductStatus,
    "ProductStatusBreakdown": ProductStatusBreakdown,
    "ProjectedIncomeSummaryFieldNumber": ProjectedIncomeSummaryFieldNumber,
    "RecaptchaRequiredError": RecaptchaRequiredError,
    "RecipientBACS": RecipientBACS,
    "RecipientBACSNullable": RecipientBACSNullable,
    "RemovedTransaction": RemovedTransaction,
    "RequestedScopes": RequestedScopes,
    "SandboxBankTransferFireWebhookRequest": SandboxBankTransferFireWebhookRequest,
    "SandboxBankTransferFireWebhookResponse": SandboxBankTransferFireWebhookResponse,
    "SandboxBankTransferSimulateRequest": SandboxBankTransferSimulateRequest,
    "SandboxBankTransferSimulateResponse": SandboxBankTransferSimulateResponse,
    "SandboxIncomeFireWebhookRequest": SandboxIncomeFireWebhookRequest,
    "SandboxIncomeFireWebhookResponse": SandboxIncomeFireWebhookResponse,
    "SandboxItemFireWebhookRequest": SandboxItemFireWebhookRequest,
    "SandboxItemFireWebhookResponse": SandboxItemFireWebhookResponse,
    "SandboxItemResetLoginRequest": SandboxItemResetLoginRequest,
    "SandboxItemResetLoginResponse": SandboxItemResetLoginResponse,
    "SandboxItemSetVerificationStatusRequest": SandboxItemSetVerificationStatusRequest,
    "SandboxItemSetVerificationStatusResponse": SandboxItemSetVerificationStatusResponse,
    "SandboxOauthSelectAccountsRequest": SandboxOauthSelectAccountsRequest,
    "SandboxProcessorTokenCreateRequest": SandboxProcessorTokenCreateRequest,
    "SandboxProcessorTokenCreateRequestOptions": SandboxProcessorTokenCreateRequestOptions,
    "SandboxProcessorTokenCreateResponse": SandboxProcessorTokenCreateResponse,
    "SandboxPublicTokenCreateRequest": SandboxPublicTokenCreateRequest,
    "SandboxPublicTokenCreateRequestOptions": SandboxPublicTokenCreateRequestOptions,
    "SandboxPublicTokenCreateRequestOptionsTransactions": SandboxPublicTokenCreateRequestOptionsTransactions,
    "SandboxPublicTokenCreateResponse": SandboxPublicTokenCreateResponse,
    "SandboxTransferRepaymentSimulateRequest": SandboxTransferRepaymentSimulateRequest,
    "SandboxTransferRepaymentSimulateResponse": SandboxTransferRepaymentSimulateResponse,
    "SandboxTransferSimulateRequest": SandboxTransferSimulateRequest,
    "SandboxTransferSimulateResponse": SandboxTransferSimulateResponse,
    "SandboxTransferSweepSimulateRequest": SandboxTransferSweepSimulateRequest,
    "SandboxTransferSweepSimulateResponse": SandboxTransferSweepSimulateResponse,
    "Scopes": Scopes,
    "ScopesNullable": ScopesNullable,
    "Security": Security,
    "SecurityOverride": SecurityOverride,
    "SenderBACSNullable": SenderBACSNullable,
    "ServicerAddressData": ServicerAddressData,
    "SignalAddressData": SignalAddressData,
    "SignalDecisionReportRequest": SignalDecisionReportRequest,
    "SignalDecisionReportResponse": SignalDecisionReportResponse,
    "SignalDevice": SignalDevice,
    "SignalEvaluateCoreAttributes": SignalEvaluateCoreAttributes,
    "SignalEvaluateRequest": SignalEvaluateRequest,
    "SignalEvaluateResponse": SignalEvaluateResponse,
    "SignalPersonName": SignalPersonName,
    "SignalReturnReportRequest": SignalReturnReportRequest,
    "SignalReturnReportResponse": SignalReturnReportResponse,
    "SignalScores": SignalScores,
    "SignalUser": SignalUser,
    "SimulatedTransferSweep": SimulatedTransferSweep,
    "StandaloneAccountType": StandaloneAccountType,
    "StandaloneCurrencyCodeList": StandaloneCurrencyCodeList,
    "StandaloneInvestmentTransactionType": StandaloneInvestmentTransactionType,
    "StudentLoan": StudentLoan,
    "StudentLoanRepaymentModel": StudentLoanRepaymentModel,
    "StudentLoanStatus": StudentLoanStatus,
    "StudentRepaymentPlan": StudentRepaymentPlan,
    "Taxform": Taxform,
    "TaxpayerID": TaxpayerID,
    "Total": Total,
    "Transaction": Transaction,
    "TransactionAllOf": TransactionAllOf,
    "TransactionBase": TransactionBase,
    "TransactionData": TransactionData,
    "TransactionOverride": TransactionOverride,
    "TransactionStream": TransactionStream,
    "TransactionStreamAmount": TransactionStreamAmount,
    "TransactionsGetRequest": TransactionsGetRequest,
    "TransactionsGetRequestOptions": TransactionsGetRequestOptions,
    "TransactionsGetResponse": TransactionsGetResponse,
    "TransactionsRecurringGetRequest": TransactionsRecurringGetRequest,
    "TransactionsRecurringGetResponse": TransactionsRecurringGetResponse,
    "TransactionsRefreshRequest": TransactionsRefreshRequest,
    "TransactionsRefreshResponse": TransactionsRefreshResponse,
    "TransactionsRemovedWebhook": TransactionsRemovedWebhook,
    "TransactionsSyncRequest": TransactionsSyncRequest,
    "TransactionsSyncResponse": TransactionsSyncResponse,
    "Transfer": Transfer,
    "TransferAuthorization": TransferAuthorization,
    "TransferAuthorizationCreateRequest": TransferAuthorizationCreateRequest,
    "TransferAuthorizationCreateResponse": TransferAuthorizationCreateResponse,
    "TransferAuthorizationDecisionRationale": TransferAuthorizationDecisionRationale,
    "TransferAuthorizationDevice": TransferAuthorizationDevice,
    "TransferAuthorizationGuaranteeDecisionRationale": TransferAuthorizationGuaranteeDecisionRationale,
    "TransferAuthorizationProposedTransfer": TransferAuthorizationProposedTransfer,
    "TransferCancelRequest": TransferCancelRequest,
    "TransferCancelResponse": TransferCancelResponse,
    "TransferCreateRequest": TransferCreateRequest,
    "TransferCreateResponse": TransferCreateResponse,
    "TransferEvent": TransferEvent,
    "TransferEventListRequest": TransferEventListRequest,
    "TransferEventListResponse": TransferEventListResponse,
    "TransferEventSyncRequest": TransferEventSyncRequest,
    "TransferEventSyncResponse": TransferEventSyncResponse,
    "TransferFailure": TransferFailure,
    "TransferGetRequest": TransferGetRequest,
    "TransferGetResponse": TransferGetResponse,
    "TransferIntentCreate": TransferIntentCreate,
    "TransferIntentCreateRequest": TransferIntentCreateRequest,
    "TransferIntentCreateResponse": TransferIntentCreateResponse,
    "TransferIntentGet": TransferIntentGet,
    "TransferIntentGetFailureReason": TransferIntentGetFailureReason,
    "TransferIntentGetRequest": TransferIntentGetRequest,
    "TransferIntentGetResponse": TransferIntentGetResponse,
    "TransferListRequest": TransferListRequest,
    "TransferListResponse": TransferListResponse,
    "TransferRepayment": TransferRepayment,
    "TransferRepaymentListRequest": TransferRepaymentListRequest,
    "TransferRepaymentListResponse": TransferRepaymentListResponse,
    "TransferRepaymentReturn": TransferRepaymentReturn,
    "TransferRepaymentReturnListRequest": TransferRepaymentReturnListRequest,
    "TransferRepaymentReturnListResponse": TransferRepaymentReturnListResponse,
    "TransferSweep": TransferSweep,
    "TransferSweepGetRequest": TransferSweepGetRequest,
    "TransferSweepGetResponse": TransferSweepGetResponse,
    "TransferSweepListRequest": TransferSweepListRequest,
    "TransferSweepListResponse": TransferSweepListResponse,
    "TransferUserAddressInRequest": TransferUserAddressInRequest,
    "TransferUserAddressInResponse": TransferUserAddressInResponse,
    "TransferUserInRequest": TransferUserInRequest,
    "TransferUserInResponse": TransferUserInResponse,
    "UserCustomPassword": UserCustomPassword,
    "UserPermissionRevokedWebhook": UserPermissionRevokedWebhook,
    "VerificationAttribute": VerificationAttribute,
    "VerificationExpiredWebhook": VerificationExpiredWebhook,
    "W2": W2,
    "W2Box12": W2Box12,
    "W2StateAndLocalWages": W2StateAndLocalWages,
    "WalletBalance": WalletBalance,
    "WalletGetRequest": WalletGetRequest,
    "WalletGetResponse": WalletGetResponse,
    "WalletTransaction": WalletTransaction,
    "WalletTransactionAmount": WalletTransactionAmount,
    "WalletTransactionCounterparty": WalletTransactionCounterparty,
    "WalletTransactionCounterpartyBACS": WalletTransactionCounterpartyBACS,
    "WalletTransactionCounterpartyNumbers": WalletTransactionCounterpartyNumbers,
    "WalletTransactionExecuteRequest": WalletTransactionExecuteRequest,
    "WalletTransactionExecuteResponse": WalletTransactionExecuteResponse,
    "WalletTransactionsListRequest": WalletTransactionsListRequest,
    "WalletTransactionsListResponse": WalletTransactionsListResponse,
    "Warning": Warning,
    "WebhookUpdateAcknowledgedWebhook": WebhookUpdateAcknowledgedWebhook,
    "WebhookVerificationKeyGetRequest": WebhookVerificationKeyGetRequest,
    "WebhookVerificationKeyGetResponse": WebhookVerificationKeyGetResponse,
    "YTDGrossIncomeSummaryFieldNumber": YTDGrossIncomeSummaryFieldNumber,
    "YTDNetIncomeSummaryFieldNumber": YTDNetIncomeSummaryFieldNumber,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
