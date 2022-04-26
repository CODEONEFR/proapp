import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ModulCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="mandatory" source="mandatory" />
        <TextInput label="Question" source="question" />
      </SimpleForm>
    </Create>
  );
};
