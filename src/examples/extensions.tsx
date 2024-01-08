import StarterKit from '@tiptap/starter-kit'
import Placeholder from "@tiptap/extension-placeholder"
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Typography from '@tiptap/extension-typography'
// import SlashCommand from '@okay-editor/slash-command'
// import DragAndDrop from '@okay-editor/drag-and-drop'

const commands = [{
    icon: '',
    title: "标题 1",
    searchTerms: ["title", 'h1'],
    command: ({ editor, range }: any) => {
        editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 1 })
            .run();
    }
},
{
    icon: '',
    title: "无序列表",
    description: "",
    searchTerms: ["unordered", "point"],
    command: ({ editor, range }: any) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
    },
},
]

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
    // SlashCommand.configure({
    //     items: ({ query }: { query: string }) => {
    //         return commands.filter((item: any) => {
    //             if (typeof query === "string" && query.length > 0) {
    //                 const search = query.toLowerCase();
    //                 return (
    //                     item.title.toLowerCase().includes(search) ||
    //                     item.description.toLowerCase().includes(search) ||
    //                     (item.searchTerms &&
    //                         item.searchTerms.some((term: string) => term.includes(search)))
    //                 );
    //             }
    //             return true;
    //         })
    //     }
    // }),
    // DragAndDrop
]