// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "@modular-css/rollup";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's name. */
      error?: string;
      authenticatedId?: string | number;
      authenticatedData: any;
      accessToken: string;
      refreshToken?: string;
      accessTokenExpireAt?: number;
    };
  }
}
