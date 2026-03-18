# RBAC Engine

A minimal role-based access control (RBAC) engine built with TypeScript.

## Features

- Role and permission model
- Permission check via `can(user, action, resource)`
- Support for multiple roles per user
- Strongly typed domain

## How it works

Permissions are defined as:

- action + resource

Roles group permissions:

- role → permissions[]

Users are assigned roles:

- user → roles[]

Access is checked with:
- can(user, action, resource)

## Running locally

Install dependencies:
```bash
npm install
```

Run tests
```bash
npm run test
```


