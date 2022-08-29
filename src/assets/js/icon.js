import { h } from 'vue'
import * as Icon from '@element-plus/icons-vue'
import { isNumber } from 'lodash'

const KvIcon = (props) => {
  let { name, size, color } = props
  let style = {}
  if (size) {
    if (isNumber(size) || /^\d+$/.test(size)) style.fontSize = size + 'px'
    else style.fontSize = size
  }
  if (color) style.color = color
  return h('i', { class: 'el-icon', style }, [h(Icon[name])])
}

export default KvIcon
