import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DeleteButton,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid
        rowClick="edit"
        sx={{
          ".RaDatagrid-rowEven": {
            backgroundColor: "lavender",
          },
          ".RaDatagrid-headerCell": {
            backgroundColor: "MistyRose",
          },
        }}
      >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <TextField source="company" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
