# Newsletter CMS

This is a simple CMS for creating Newsletters and Stories.

![preview](https://i.ibb.co/9pWZprw/Screen-Shot-2020-11-23-at-11-20-37.png)

## Features
- Perform CRUD actions for Newsletters/Stories
- Preview an individual story using the given template
- Ability to select a future date using a Datepicker when creating a Story/Newsletter
- Form errors are displayed if an input is not validated when creating/editing Stories and Newsletters
- A Newsletter is automatically generated if a new Story is created and its date doesn't match with any previous Newsletters' dates
- All CRUD actions related to Newsletters/Stories are synced to Lyra API.
- Roadie gem is used for inline styling
- Service Object design pattern is used for handling Lyra API calls


## Tech Stack
Front-End: React.js, React Router, Styled Components, Axios, TinyMCE

Back-End: Ruby on Rails, PostregreSQL, Lyra API

## Getting Started
This application contains 2 separate folders for Front-End and Back-End.
You need to start both of them to run the app.

Start the Back-End app first:

```bash
cd backend
bundle install
yarn install
rails db:create db:migrate
rails s #=> Start Server
```

Then start the Front-End app:

```bash
cd ..
cd frontend
yarn install
yarn start #=> Start Server
```



## Improvements
- Make connections to Lyra API/Roadie Styling background-jobs to boost performance.
- Add rspec/jest tests.
- Add loading spinner whenever fetching the API on the Front-End.
- Move API KEY to .env for improved security.
