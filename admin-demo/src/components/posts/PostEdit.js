// src/components/posts/PostEdit.js

import {
  AutocompleteInput,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <AutocompleteInput label="Author" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};
