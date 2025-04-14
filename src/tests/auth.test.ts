import { getAPIKey } from "../api/auth";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
    test("should return null if authorization header is missing", () => {
        const headers = {};
        const result = getAPIKey(headers);
        expect(result).toBeNull();
    });

    test("should return null if authorization header is malformed", () => {
        const headers = { authorization: "Bearer token" };
        const result = getAPIKey(headers);
        expect(result).toBeNull();
    });

    test("should return null if authorization header is incomplete", () => {
        const headers = { authorization: "ApiKey" };
        const result = getAPIKey(headers);
        expect(result).toBeNull();
    });

    test("should return the API key if authorization header is valid", () => {
        const headers = { authorization: "ApiKey valid-api-key" };
        const result = getAPIKey(headers);
        expect(result).toBe("valid-api-key");
    });
});