import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

function RTE({
    name, control, label, defaultValue =""
}) {
  return (
    <div className='w-full'>
        {
            label && <label className='inline-block mb-1 pl-1'>
                    {label}
            </label>
        }
        <Controller
        name={name || "content"}
        control ={control}
        render ={({field:{onChange}})=>(
            <Editor
            apiKey = 'maaj3x2n3g41uvbws8dvi64n01wqqsdmuf8azn2y2xdb8ldi'
            initislVslue={defaultValue}
            init={{
                branding:false,
                height:500,
                menubar:true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount"
                ],
                toolbar:
                "undo redo |blocks| image| bold italic|forecolor|alignleft aligncenter bold italic forecolor|alignleft aligncenter alignright alignjustify|bullist numlist outdent indent removeformat | help",
                content_style:"body{ font-family:Helvitca,Arial,sans-serif;font-size:14px}",
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

export default RTE