import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import List from './List'

storiesOf('List', module)
  .add('As a component', () => ({
    components: { List },
    template: '<List />'
  }))
