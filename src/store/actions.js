import {
  COMPONENT,
} from './mutation-types'

export default {
  // 1. 设置Layout组件
  async setComponent({commit},params) {
    commit(COMPONENT, params)
  }
}
