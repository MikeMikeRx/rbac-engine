import { describe, expect, it } from "vitest";
import { RbacEngine } from "../src/rbacEngine.js";
import type { Role, User } from "../src/types.js";

const roles: Role[] = [
    {
        name: "admin",
        permissions: [
            { action: "read", resource: "post" },
            { action: "update", resource: "post" },
            { action: "delete", resource: "post" },
            { action: "delete", resource: "user" },
        ]
    },
    {
        name: "editor",
        permissions: [
            { action: "read", resource: "post" },
            { action: "update", resource: "post" },
        ]
    },
    {
        name: "viewer",
        permissions: [{ action: "read", resource: "post" }]
    }
];

describe("RbacEngine", () => {
    const engine = new RbacEngine(roles);

    it("allows access when user role has permission", () => {
        const user: User = {
            id: "1",
            roles: ["editor"]
        };

        expect(engine.can(user, "update", "post")).toBe(true);
    });

    it("denies access when user role does not have permission", () => {
        const user: User = {
            id: "2",
            roles: ["viewer"]
        };

        expect(engine.can(user, "delete", "post")).toBe(false);
    });

    it("allows access if one of multiple roles grants permission", () => {
        const user: User = {
            id: "3",
            roles: ["viewer", "editor"]
        };

        expect(engine.can(user, "update", "post")).toBe(true);
    });

    it("denies acces for unknown roles", () => {
        const user: User = {
            id: "4",
            roles: ["uknown-role"]
        };

        expect(engine.can(user, "read", "post")).toBe(false);
    });
});