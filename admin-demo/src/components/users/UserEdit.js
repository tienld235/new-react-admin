import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
};
