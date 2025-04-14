# Nx NestJS Monorepo Boilerplate

A modern, scalable backend boilerplate built with:

- [Nx](https://nx.dev/) — powerful monorepo toolkit
- [NestJS](https://nestjs.com/) — progressive Node.js framework
- [Prisma](https://www.prisma.io/) — next-gen ORM
- [Fastify](https://www.fastify.io/) — blazing-fast HTTP server
- [Docker](https://www.docker.com/) — containerized development & deployment
- [Swagger](https://swagger.io/) — API documentation out of the box

> Maintained by [@o1eksandr-sydorenko](https://github.com/o1eksandr-sydorenko)

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/o1eksandr-sydorenko/nx-nestjs-docker-prisma-swagger-fastify-boilerplate.git
cd nx-nestjs-docker-prisma-swagger-fastify-boilerplate
pnpm install
```

---

## 🧱 Create New App/Library

Generate a new NestJS app or shared library:

```bash
# New app inside apps/
npx nx generate @nx/nest:application apps/[name]

# New lib inside libs/
npx nx generate @nx/nest:library libs/[name]
```

---

## 🧬 Prisma Commands

Generate Prisma client:

```bash
npx prisma generate
```

Reset the database to the initial state:

```bash
npx prisma migrate reset
```

Generate a migration & apply it to your local database:

```bash
npx prisma migrate dev --name init
```

Deploy pending migrations to production:

```bash
npx prisma migrate deploy
```

---

## 🐳 Docker Setup

Build and run services with Docker Compose:

```bash
docker-compose up --build
```

or

```bash
docker-compose up -d
```

---

## 🧪 Development Tips

- Use `pnpm start [app]` to run specific apps.
- Use `nx graph` to visualize app/lib dependencies.
- Use `nx affected:build` to build only what changed.

---

## 📄 License

MIT © [Oleksandr Sydorenko](https://github.com/o1eksandr-sydorenko)
