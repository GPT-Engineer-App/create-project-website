# create-project-website

A slick website where I can enter what I want to create and it will call the route localhost:8000/projects with the body:

{"description":${prompt},"tech_stack":"vite","llm_name":"gpt-4-turbo","use_agent":false}


Use this for auth:

  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyMzhkZDA0Y2JhYTU4MGIzMDRjODgxZTFjMDA4ZWMyOGZiYmFkZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQW50b24gT3Npa2EiLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQ0NjcwMjU_dj00IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2dwdC1lbmdpbmVlci0zOTA2MDciLCJhdWQiOiJncHQtZW5naW5lZXItMzkwNjA3IiwiYXV0aF90aW1lIjoxNzEzODU2MjUxLCJ1c2VyX2lkIjoiRzFVcVBFWnVER2N5bGdxRUZpRkpCSWVDREF3MiIsInN1YiI6IkcxVXFQRVp1REdjeWxncUVGaUZKQkllQ0RBdzIiLCJpYXQiOjE3MTQ2ODY5NDcsImV4cCI6MTcxNDY5MDU0NywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnaXRodWIuY29tIjpbIjQ0NjcwMjUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn19.U1HwyQdgk-DD_iSbkTrkj6KBEzgnHB0l3YHnTjuglbyxXgFE8w4Y354q0SoAdlziaQYb4STLd1DEndx0ADraKi6nXh5gLz2htxAg8ID3LEfCYSZJ_CISUOiZ3ImiWPKuyAs-BLZJOq2WIEU9HWgazXSvf_NnR6kxgRs8wNSg3oGKMf8OAcsv6nSW2YrS0BUPScMqNEr6NW_rktXCPNYz7i90uFkSd7Bx52XPn5Wn-NxPldPkluBp4X4WTzu4w0C90MJ74HtDmnKOYINqtU4xQO0Eg9aMBNfWOO-1CXPDSIUj3yQlVVL1JUG1_A8Ug1ksYTizjdakGFNOR4Wa0ks9dw' \


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/create-project-website.git
cd create-project-website
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
