import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { LoginComponent } from '../app/components/login/login.component';
import { AppModule } from '../app/app.module';
import { MaterialComponents } from '../app/material-components.module';
import { AuthorizationService } from '../app/services/authorization.service';
import { StorageService } from '../app/services/storage.service';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

storiesOf('Login form', module)
  .add('empty', () => ({
    component: LoginComponent,
    props: {},
    moduleMetadata: {
      imports: [MaterialComponents],
      providers: [AuthorizationService, StorageService]
    }
  }))
  .add('not empty', () => ({
    component: LoginComponent,
    props: {
      login: '123',
      password: 'admin'
    },
    moduleMetadata: {
      imports: [MaterialComponents],
      providers: [AuthorizationService, StorageService]
    }
  }));
