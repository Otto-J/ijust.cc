// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// window 挂 netlifyIdentity
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}
