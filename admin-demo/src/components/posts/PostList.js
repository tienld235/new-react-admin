// src/components/posts/PostList.js

import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <ReferenceField source="userId" label="Author" reference="users" />
      </Datagrid>
    </List>
  );
};
