import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { OkayEditor } from 'yyds-okay-editor'

export const OkayEditors = () => {
    const editor = useEditor({
        // 支持html和json
        content: '',
        autofocus: true,
        extensions: [
            StarterKit
        ],
        // 更新时回调
        onUpdate: ({ editor, transaction }) => {
            console.log(editor.getJSON())
        }
    })
    return <OkayEditor editor={editor}></OkayEditor>
}