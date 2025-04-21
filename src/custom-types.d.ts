export {};

declare global {
  interface Window {
    otpless: (user: any) => void;
  }
}