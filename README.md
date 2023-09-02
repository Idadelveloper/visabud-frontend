# VisaBud
Visa Bud, a web application aimed at helping Africans maximize their chances of getting a visa when travelling to any part of the world using generative AI.

## About
This is the frontend user interface of Visabud built in React. It's key feature - the chatbot communicates with with the flask backend server through API calls which provides the user with visa application and requirement information.

## Landing Page
![VisaBud Landing Page](/images/landing-page.png)

## Chatbot Interface
![VisaBud ChatBot](/images/chatbot.png)

### Prerequisite before running
- Run the [Flask backend server](https://github.com/Idadelveloper/visabud-flask-server) alongside this application.

- Follow instrunctions to run the UI in `/visabud` directory's `README.md`.

## Structure
The repository is structured as follows:

visabud/: You will find the frontend code for VisaBud, implemented using JavaScript and React. 

_NB: The [Flask backend server](https://github.com/Idadelveloper/visabud-flask-server) repo contains API endpoints making requests to the model which generates information based on the user's input and chat history._


## Purpose
The purpose of this repository is to provide an intuitive and friendly user interface for users to interact and get the right information with regard to their visa application thereby boosting their chances of getting approved and traveling to their destination. By enabling public access to this repository, we are allowing other great minds to contribute to it from their own point of view, enabling us to curb the rate of visa application rejections.

## How Generative AI Models are solving the problem
VisaBud employs generative AI to solve the problem of visa rejections by providing the user with tailored information that is strictly vital for their visa application process. By utilizing the gpt3.5 turbo model, VisaBud ensures that the user receives customized responses and guidance, such as interview preparation questions and cover letter writing, that are relevant and useful for their visa application process. This model can accept a series of messages as input, thereby increasing the amount of data it can process at a time, enabling effective communication with the user.

By integrating generative AI models into VisaBud, we greatly decrease the visa rejection rate and enable users to conveniently travel around the world with the right information about the visa status of the countries they travel to. This increases the educational, business, and tourism scale as more people are able to study in their desired countries, perform international trade, and enjoy their stay in other countries.
