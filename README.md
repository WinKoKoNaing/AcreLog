# 📅 AcreLog – Development Timeline

> Goal: Build a production-ready web + mobile system to track farmer acreage work (acres),
> tractors, and payments using NestJS, Next.js, Expo, and Prisma.

---

## 🧱 Phase 0 – Project Foundation

- [x] Decide project name (**AcreLog**)
- [x] Setup monorepo structure (`apps/`, `packages/`)
- [x] Configure PNPM workspaces
- [x] Setup shared configs (`eslint`, `prettier`, `tsconfig`)
- [x] Setup Prisma & database connection
- [x] Initial Prisma migration

---

## 🗄️ Phase 1 – Core Data Models (Backend)

### Prisma Schema

- [x] Farmer model
- [x] Tractor model
- [x] AcreRecord model
- [x] Enums (WorkType, TractorStatus)
- [x] Relationships & indexes

### Prisma Infrastructure

- [x] Create `PrismaService`
- [x] Create `PrismaModule`
- [x] Register Prisma globally

---

## 🧩 Phase 2 – Backend Domain Modules (NestJS)

### Farmer Module

- [x] Create Farmer module
- [x] Farmer service (create, list, get)
- [x] Farmer controller (REST endpoints)

### Tractor Module

- [ ] Create Tractor module
- [ ] Tractor service
- [ ] Tractor controller
- [ ] Tractor availability status

### Acre Record Module

- [x] Create AcreRecord module
- [x] Business logic (total amount calculation)
- [ ] Query records by farmer
- [ ] Query records by date range

---

## 📦 Phase 3 – Shared API Contracts (`@repo/api`)

- [x] Farmer DTOs
- [x] AcreRecord DTOs
- [ ] Tractor DTOs
- [ ] API response types
- [ ] Pagination types

---

## 🛡️ Phase 4 – Validation & Error Handling

- [ ] Install `class-validator` & `class-transformer`
- [ ] Create CreateFarmerDto
- [ ] Create CreateAcreRecordDto
- [ ] Global validation pipe
- [ ] Consistent API error format

---

## 🔐 Phase 5 – Authentication & Authorization

- [ ] Decide auth strategy (JWT)
- [ ] User model (Admin / Operator)
- [ ] Login endpoint
- [ ] Protect write APIs
- [ ] Role-based access control

---

## 🌐 Phase 6 – Web App (Next.js)

### Setup

- [ ] Initialize Next.js app
- [ ] API client setup
- [ ] Shared types from `@repo/api`

### Features

- [ ] Farmer list page
- [ ] Farmer create/edit form
- [ ] Acre record entry form
- [ ] Tractor management page
- [ ] Reports (daily / monthly acres)

---

## 📱 Phase 7 – Mobile App (Expo / React Native)

### Setup

- [ ] Initialize Expo app
- [ ] Configure monorepo imports
- [ ] API client integration

### Features

- [ ] Farmer list (offline-first)
- [ ] Add acre record
- [ ] Tractor selector
- [ ] Local cache (SQLite/MMKV)
- [ ] Sync logic (online/offline)

---

## 🔄 Phase 8 – Offline & Sync Strategy

- [ ] Add `clientId` fields
- [ ] Add `lastSyncedAt`
- [ ] Conflict resolution rules
- [ ] Retry queue for failed requests
- [ ] Sync status UI

---

## 📊 Phase 9 – Reports & Insights

- [ ] Total acres per farmer
- [ ] Income per farmer
- [ ] Tractor utilization
- [ ] Date range filters
- [ ] Export (CSV/PDF)

---

## 🧪 Phase 10 – Testing

- [ ] Unit tests (services)
- [ ] API integration tests
- [ ] Validation tests
- [ ] Sync edge cases

---

## 🚀 Phase 11 – Production Readiness

- [ ] Environment configs
- [ ] Logging
- [ ] API rate limiting
- [ ] Docker setup
- [ ] CI pipeline
- [ ] Production DB migration

---

## 📦 Phase 12 – Polish & Future

- [ ] Multi-language support
- [ ] Dark mode (web + mobile)
- [ ] Notifications
- [ ] Multi-tractor ownership
- [ ] Subscription / billing (optional)

---

## ✅ Definition of Done

- [ ] Backend stable & tested
- [ ] Web app usable by admin
- [ ] Mobile app usable offline
- [ ] Data accurate & synced
- [ ] Ready for real farmers 🚜🌾

### My Note

```shell
pnpm add @nestjs/swagger --filter api
pnpm --filter api exec nest g resource tractor 
pnpm --filter api exec prisma migrate generate
pnpm --filter api exec prisma migrate dev -n worktype-model
```

### Apps and Packages

```shell
.
├── apps
│   ├── api                       # NestJS app (https://nestjs.com).
│   └── web                       # Next.js app (https://nextjs.org).
└── packages
    ├── @repo/api                 # Shared `NestJS` resources.
    ├── @repo/eslint-config       # `eslint` configurations (includes `prettier`)
    ├── @repo/jest-config         # `jest` configurations
    ├── @repo/typescript-config   # `tsconfig.json`s used throughout the monorepo
    └── @repo/ui                  # Shareable stub React component library.
```

Each package and application are mostly written in [TypeScript](https://www.typescriptlang.org/).

### Utilities

This `Turborepo` has some additional tools already set for you:

- [TypeScript](https://www.typescriptlang.org/) for static type-safety
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://prettier.io) & [Playwright](https://playwright.dev/) for testing

### Commands

This `Turborepo` already configured useful commands for all your apps and packages.

#### Build

```bash
# Will build all the app & packages with the supported `build` script.
pnpm run build

# ℹ️ If you plan to only build apps individually,
# Please make sure you've built the packages first.
```

#### Develop

```bash
# Will run the development server for all the app & packages with the supported `dev` script.
pnpm run dev
```

#### test

```bash
# Will launch a test suites for all the app & packages with the supported `test` script.
pnpm run test

# You can launch e2e testes with `test:e2e`
pnpm run test:e2e

# See `@repo/jest-config` to customize the behavior.
```

#### Lint

```bash
# Will lint all the app & packages with the supported `lint` script.
# See `@repo/eslint-config` to customize the behavior.
pnpm run lint
```

#### Format

```bash
# Will format all the supported `.ts,.js,json,.tsx,.jsx` files.
# See `@repo/eslint-config/prettier-base.js` to customize the behavior.
pnpm format
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```bash
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```
