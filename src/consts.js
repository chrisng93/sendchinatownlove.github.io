const Errors = {
  BAD_EXPIRATION: 'The card expiration date is either missing or incorrectly formatted.',
  INVALID_ACCOUNT: 'The card issuer was not able to locate account on record.',
  CARDHOLDER_INSUFFICIENT_PERMISSIONS: '	The card issuer has declined the transaction due to restrictions on where the card can be used.',
  INSUFFICIENT_PERMISSIONS: 'This Square account does not have the permissions to accept this payment.',
  INSUFFICIENT_FUNDS: 'This payment source has insufficient funds to cover the payment.',
  INVALID_LOCATION: 'This Square account cannot take payments in the specified region',
  TRANSACTION_LIMIT: 'The card issuer has determined the payment amount is either too high or too low.',
  CARD_EXPIRED: 'The card issuer declined the request because the card is expired.',
  CVV_FAILURE: 'The card issuer declined the request because the CVV value is invalid.',
  ADDRESS_VERIFICATION_FAILURE: 'The card issuer declined the request because the postal code is invalid.',
  TEMPORARY_ERROR: 'A temporary internal error occurred.',
  VOICE_FAILURE: 'The card issuer declined the request because the issuer requires voice authorization from the cardholder.',
  PAN_FAILURE: 'The specified card number is invalid.',
  EXPIRATION_FAILURE: 'The card expiration date is either invalid or indicates that the card is expired.',
  CARD_NOT_SUPPORTED: 'The card is not supported in the geographic region.',
  INVALID_PIN: 'The card issuer declined the request because the PIN is invalid.',
  INVALID_POSTAL_CODE: 'The postal code is incorrectly formatted.',
  CHIP_INSERTION_REQUIRED: 'The card issuer requires reading the card using a chip reader.',
  ALLOWABLE_PIN_TRIES_EXCEEDED: '	The card has exhausted its available pin entry retries set by the card issuer.',
  MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED: 'The card must be swiped, tapped, or dipped.',
  PAYMENT_LIMIT_EXCEEDED: 'Square declined the request because the payment amount exceeded the processing limit for this merchant.',
  GENERIC_DECLINE: 'An unexpected error occurred.',
  INVALID_FEES: 'The app_fee_money on a payment is too high.',
  CARD_DECLINED_VERIFICATION_REQUIRED: 'This payment requires verification. For more information, see SCA Overview.',
  GIFT_CARD_AVAILABLE_AMOUNT: 'Gift card does not have sufficient balance for requested amount and tip.',
};
export default Errors;