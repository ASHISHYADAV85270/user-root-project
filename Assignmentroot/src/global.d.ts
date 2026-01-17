import firebase from 'firebase/compat/app';

declare global {
  interface Window {
    recaptchaVerifier?: firebase.auth.RecaptchaVerifier;
    confirmationResult?: firebase.auth.ConfirmationResult;
  }
}
