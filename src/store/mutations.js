import {
  COMPONENT
} from './mutation-types'

export default {
  [COMPONENT](state, params) {
    state.component = params;
  },
}
