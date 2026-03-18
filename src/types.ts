export type Action = string;
export type Resource = string;

export type Permission = {
    action: Action;
    resource: Resource;
};

export type Role = {
    name: string;
    permissions: Permission[];
};

export type User = {
    id: string;
    roles: string[];
};