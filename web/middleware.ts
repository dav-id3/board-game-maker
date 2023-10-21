export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/(userpage.*)"], // ?! means "not"
};