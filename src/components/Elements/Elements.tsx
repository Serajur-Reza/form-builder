import {TextField} from "../Fields/TextField.tsx";

export const FormElements= {
    text: TextField,
}

export const formElementSidebar = [
    { name: 'TextField', element: FormElements.text},
    { name: 'TextArea', element: FormElements.text},
    { name: 'Button', element: FormElements.text},
    { name: 'Submit', element: FormElements.text},
    { name: 'Number', element: FormElements.text},
    { name: 'Date', element: FormElements.text},
    { name: 'File', element: FormElements.text},
    { name: 'Select', element: FormElements.text},
    { name: 'Checkbox', element: FormElements.text},
    { name: 'Radio', element: FormElements.text}
]