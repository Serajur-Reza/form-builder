import { MdTextFields } from "react-icons/md";
import { BsTextareaT } from "react-icons/bs";
import { RxButton } from "react-icons/rx";
import { GoNumber } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaFileUpload } from "react-icons/fa";
import { GoSingleSelect } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

import { TextField, TextInputString } from "../Fields/TextField.tsx";
import { TextAreaField, TextAreaString } from "../Fields/TextArea.tsx";
import { ButtonField, ButtonString } from "../Fields/Button.tsx";
import { SubmitButtonField, SubmitButtonString } from "../Fields/Submit.tsx";
import { NumberField, NumberFieldString } from "../Fields/NumberField.tsx";
import { DateField, DateInputString } from "../Fields/DateField.tsx";
import { FileField, FileInputString } from "../Fields/FileField.tsx";
import {
  PasswordField,
  PasswordInputString,
} from "../Fields/PasswordField.tsx";
import { SelectField, SelectFieldString } from "../Fields/Select.tsx";
import { RadioField, RadioFieldString } from "../Fields/RadioField.tsx";
import {
  CheckBoxField,
  CheckBoxFieldString,
} from "../Fields/CheckboxField.tsx";

export const formElementSidebar = [
  {
    id: 1,
    name: "TextField",
    element: <TextField />,
    code: TextInputString(),
    icon: <MdTextFields />,
  },
  {
    id: 2,
    name: "TextArea",
    element: <TextAreaField />,
    code: TextAreaString(),
    icon: <BsTextareaT />,
  },
  {
    id: 3,
    name: "Button",
    element: <ButtonField />,
    code: ButtonString(),
    icon: <RxButton />,
  },
  {
    id: 4,
    name: "Submit",
    element: <SubmitButtonField />,
    code: SubmitButtonString(),
    icon: <RxButton />,
  },
  {
    id: 5,
    name: "Number",
    element: <NumberField />,
    code: NumberFieldString(),
    icon: <GoNumber />,
  },
  {
    id: 6,
    name: "Date",
    element: <DateField />,
    code: DateInputString(),
    icon: <CiCalendarDate />,
  },
  {
    id: 7,
    name: "File Upload",
    element: <FileField />,
    code: FileInputString(),
    icon: <FaFileUpload />,
  },
  {
    id: 8,
    name: "Select",
    element: <SelectField />,
    code: SelectFieldString(),
    icon: <GoSingleSelect />,
  },
  {
    id: 9,
    name: "Checkbox",
    element: <CheckBoxField />,
    code: CheckBoxFieldString(),
    icon: <IoIosCheckboxOutline />,
  },
  {
    id: 10,
    name: "Radio",
    element: <RadioField />,
    code: RadioFieldString(),
    icon: <MdRadioButtonChecked />,
  },

  {
    id: 11,
    name: "Password",
    element: <PasswordField />,
    code: PasswordInputString(),
    icon: <MdRadioButtonChecked />,
  },
];
