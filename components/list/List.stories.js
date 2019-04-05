import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import List from '@/components/list/List'
import store from '@/.storybook/store'


storiesOf('Lists', module)
  .add('Users', () => ({
    components: { List },
    store: store,
    template: '<List />'
  }))
  .add('Comments', () => ({
    components: { List },
    store: store,
    template: `<List :source="'comments'" />`
  }))
