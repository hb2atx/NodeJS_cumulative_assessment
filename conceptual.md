What is a JWT?

JSON Web Token

What is the signature portion of the JWT?  What does it do?

The signature portion is used to verify the authenticity and integrity of the JWT.
tThere are 3 main parts of a JWT. Signature, Header and Payload. Basically the server issues all 3 of these main parts and going forward 
when logging in the server will recognize the code.

If a JWT is intercepted, can the attacker see what's inside the payload?

The payload is a base64-encoded not encrypted. This encoding is designed to make the payload human-readable and easily accessible for both the sender and the recipient. As a result, the payload can be decoded by anyone who has access to the JWT.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

You can implement a JWT with both the server and client side. When a user creates a username and password it will 
be stored in a database. When they login their credentials will be verified against the stored data. After a successful client
login it will generate a JWT for the user. It consists of a header, signature and payload.

- Compare and contrast unit, integration and end-to-end tests.

The are typically 3 types of tests in programming: unit tests, integration tests and end-to-end tests.
Unit test - small and focused tests. They test functions, methods, or small units of code in isolation. Unit test focus on a single function or a single code module.

Integration Tests - They test the interactions between different components, modules, or services within an application. Some examples would be databases, external services and API's.

End-to-End Tests - This will test the entire application from the user's perspective, simulates real user interactions.

- What is a mock? What are some things you would mock?

A mock test is used to simulate the behavior of certain components or dependencies in a system. You will replace real objects or services with simplified, controlled, and predictable alternatives, allowing you to isolate the code you are testing and focus on specific scenarios.You would use mocks with unit tests and integration tests.

- What is continuous integration?

Continuous Integration (CI) is a software development practice and process that involves automatically and frequently integrating code changes from multiple contributors into a shared repository. The main goal of CI is to detect and address integration issues early in the development cycle, ensuring that software remains in a working state as new code is added. CI is often a core component of modern software development practices and DevOps.

Continuous integration is a software development process where developers integrate the new code they've written more frequently throughout the development cycle, adding it to the code base at least once a day.


- What is an environment variable and what are they used for?

An environment variable is a dynamic value that the operating system and other software can use to determine information specific to your computer.

User environment variables, as the name suggests, are environment variables that are specific to each user account.

This means that the value of a variable when logged in as one user can be different than the value of the same variable when logged in as a different user on the same computer.

These types of environment variables can be manually set by whatever user is logged in, but Windows and other software can set them as well.

- What is TDD? What are some benefits and drawbacks?

Test-Driven-Development

Benefits- early detection of bugs, continuous validation, improved code quality and increased confidence.
Drawbacks- Initial learning curve, time-consuming, not for all scenarios and human error.

- What is the value of using JSONSchema for validation?

JSONSchema is a tool for validating JSON data. 
Benefits- data validation and consistency

- What are some ways to decide which code to test?

Edge cases are important because this is where code can exhibit bugs. Edge cases are like boundry conditions, and unusual inputs.
Test integration points i.e. API'S, databases.

- What does `RETURNING` do in SQL? When would you use it?

Returning in SQL helps you understand the values that you inserted or updated by including Returning at the end of SQL function.

- What are some differences between Web Sockets and HTTP?

HTTP will allow for more scalability because from the client side you can request HTTP and multiple servers can work for your requests because it can identify your IP address and go.  HTTP requests are slower because they are verifying more data.
Web sockets are less scalable because you cant work with multiple servers. They are fatser than http but more limited in capacity.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I think Flask more because it simple and the library docs are easier to parse through.