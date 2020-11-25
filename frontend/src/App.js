import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import StoryForm from './components/storyForm/storyForm.component'
import StoryShow from './components/storyShow/storyShow.component'
import HomePage from './components/homePage/homePage.component'
import Navbar from './components/navbar/navbar.component'
import NewsletterFeed from './components/newsletterFeed/newsletterFeed.component';
import NewsletterShow from './components/newsletterShow/newsletterShow.component';
import NewsletterForm from './components/newsletterForm/newsletterForm.component';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path="/stories/new" component={StoryForm} />
          <Route path="/stories/:id" component={StoryShow} />
          <Route path="/newsletters/new" component={NewsletterForm} />
          <Route path="/newsletters/:id" component={NewsletterShow} />
          <Route path="/newsletters" component={NewsletterFeed} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
