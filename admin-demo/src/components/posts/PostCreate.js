// src/components/posts/PostCreate.js

import {
  AutocompleteInput,
  Create,
  DateInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PostCreate = () => {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <NumberInput source="id" />
        <ReferenceInput source="userId" reference="users">
          <AutocompleteInput label="Author" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};
