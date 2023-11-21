// src/components/users/UserCreate.js

import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

export const UserCreate = () => {
  return (
    <Create title="Create User">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};
