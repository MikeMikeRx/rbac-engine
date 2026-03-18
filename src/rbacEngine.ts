import type { Action, Resource, Role, User } from "./types.js";

export class RbacEngine {
    constructor(private readonly roles: Role[]) {}

    can(user: User, action: Action, resource: Resource): boolean {
        const userRoles = this.roles.filter((role) => user.roles.includes(role.name));

        for (const role of userRoles) {
            const hasPermission = role.permissions.some(
                (permission) =>
                    permission.action === action && permission.resource === resource
            );

            if (hasPermission) {
                return true;
            }
        }

        return false;
    }
}