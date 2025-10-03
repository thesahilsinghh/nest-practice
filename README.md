<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  <strong>NestJS GraphQL API</strong><br/>
  A modern GraphQL API with Student & Address management<br/>
  Built with NestJS + MongoDB + Apollo Server
</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A modern GraphQL API built with NestJS, featuring Student and Address management with MongoDB integration. This application demonstrates how to build scalable GraphQL APIs using NestJS with TypeScript, Mongoose, and Apollo Server.

## Features

- **GraphQL API** with Apollo Server
- **Student Management** - Complete CRUD operations
- **Address Management** - Complete CRUD operations
- **MongoDB Integration** with Mongoose
- **GraphQL Playground** for interactive querying
- **TypeScript** for type safety
- **Relationship Management** - Students can have multiple addresses

## Available GraphQL Operations

### Student Operations

- `students` - Get all students
- `student(id: ID!)` - Get student by ID
- `createStudent(input: CreateStudentInput!)` - Create new student
- `updateStudent(id: ID!, input: UpdateStudentInput!)` - Update student
- `deleteStudent(id: ID!)` - Delete student

### Address Operations

- `addresses` - Get all addresses
- `addressesByStudent(studentId: ID!)` - Get addresses by student ID
- `createAddress(input: CreateAddressInput!)` - Create new address
- `updateAddress(id: ID!, input: UpdateAddressInput!)` - Update address
- `deleteAddress(id: ID!)` - Delete address

### Example Queries

**Get all students with their addresses:**

```graphql
query {
  students {
    _id
    name
    age
    email
    addresses {
      _id
      city
      pin_code
    }
  }
}
```

**Create a new student:**

```graphql
mutation {
  createStudent(
    input: { name: "John Doe", age: 25, email: "john@example.com" }
  ) {
    _id
    name
    age
    email
  }
}
```

**Create an address for a student:**

```graphql
mutation {
  createAddress(
    input: {
      student_id: "68dd9226bb3a6620c8df8746"
      city: "New York"
      pin_code: 10001
    }
  ) {
    _id
    city
    pin_code
    student_id
  }
}
```

## Tech Stack

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[GraphQL](https://graphql.org/)** - Query language and runtime
- **[Apollo Server](https://www.apollographql.com/docs/apollo-server/)** - GraphQL server
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

## Project Structure

```
src/
├── app.module.ts                 # Main application module with GraphQL setup
├── main.ts                       # Application entry point
├── schema.gql                    # Auto-generated GraphQL schema
├── student/
│   ├── student.module.ts         # Student module configuration
│   ├── student.resolver.ts       # GraphQL resolvers for students
│   ├── student.service.ts        # Business logic
│   ├── dto/
│   │   ├── index.ts              # DTO exports
│   │   └── student.dto.ts        # GraphQL types and inputs
│   └── schema/
│       ├── index.ts              # Schema exports
│       └── student.schema.ts     # MongoDB schema
└── address/
    ├── address.module.ts         # Address module configuration
    ├── address.resolver.ts       # GraphQL resolvers for addresses
    ├── address.service.ts        # Business logic
    ├── dto/
    │   ├── index.ts              # DTO exports
    │   └── address.dto.ts        # GraphQL types and inputs
    └── schema/
        ├── index.ts              # Schema exports
        └── address.schema.ts     # MongoDB schema
```

## Project setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)

### Installation

```bash
# Install dependencies
$ npm install

# Set up environment variables (optional)
# Create a .env file with:
# MONGO_URI=mongodb://localhost:27017/nest-graphql
```

### Database Setup

Make sure MongoDB is running. You can:

- Run MongoDB locally: `mongod`
- Use MongoDB Docker: `docker run -d -p 27017:27017 mongo`
- Use MongoDB Atlas (cloud): Update MONGO_URI in your environment

## Running the Application

```bash
# development
$ npm run start

# watch mode (recommended for development)
$ npm run start:dev

# production mode
$ npm run start:prod
```

After starting the application:

- **GraphQL Playground**: Visit `http://localhost:3000/graphql`
- **REST endpoint**: `http://localhost:3000` (basic app controller)

### Using GraphQL Playground

The GraphQL Playground provides an interactive interface to:

- Explore the API schema
- Write and test queries/mutations
- View documentation
- See query execution plans

### Testing the API

You can also test the GraphQL API using curl:

```bash
# Get all students
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "query { students { _id name age email } }"}'

# Create a new student
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "mutation { createStudent(input: { name: \"Test User\", age: 25, email: \"test@example.com\" }) { _id name age email } }"}'
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## API Documentation

### Data Models

**Student**

```graphql
type StudentType {
  _id: ID!
  name: String!
  age: Float!
  email: String
  createdAt: DateTime
  updatedAt: DateTime
  addresses: [AddressType!]
}
```

**Address**

```graphql
type AddressType {
  _id: ID!
  student_id: ID!
  city: String!
  pin_code: Float!
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Input Types

**CreateStudentInput**

```graphql
input CreateStudentInput {
  name: String!
  age: Float!
  email: String
}
```

**CreateAddressInput**

```graphql
input CreateAddressInput {
  student_id: ID!
  city: String!
  pin_code: Float!
}
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
