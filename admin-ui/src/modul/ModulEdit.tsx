import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ModulEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="mandatory" source="mandatory" />
        <TextInput label="Question" source="question" />
      </SimpleForm>
    </Edit>
  );
};
