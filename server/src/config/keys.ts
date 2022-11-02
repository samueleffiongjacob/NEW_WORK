import { devKeys } from "./dev";
import { prodkeys } from "./prod";

export interface Keys {
    cookieSecret: string;
}

export const keys = (): Keys => {
    if (process.env.NODE_ENV === "production") {
        return prodkeys;
    } else {
        return devKeys;
    }
};