import StarterKit from '@tiptap/starter-kit'
import Placeholder from "@tiptap/extension-placeholder"
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Typography from '@tiptap/extension-typography'

// 拓展
export default [
    // 包含了`text`类型的节点
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, 
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, 
        },
    }),
    /** 颜色继承 */
    Color.configure({
        types: [TextStyle.name, ListItem.name]
    }),
    TextStyle,
    // 节点默认添加`.is-empty`样式，需在./index.css定义
    Placeholder.configure({
        // 自定义`placehodler`
        placeholder: (options) => {
            return '写点什么吧...'
        }
    }),
    Typography,
]