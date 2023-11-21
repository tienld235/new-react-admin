// src/App.js

import { Admin, Resource } from "react-admin";
import { UserList } from "./components/users/UserList";
import restProvider from "ra-data-simple-rest";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";
import { PostList } from "./components/posts/PostList";
import { PostEdit } from "./components/posts/PostEdit";
import { PostCreate } from "./components/posts/PostCreate";
import { authProvider } from "./auth/authProvider";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { AppLayout } from "./layouts/AppLayout";

const dataProvider = restProvider("http://localhost:3000");
function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} layout={AppLayout}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        recordRepresentation={(user) => user.username}
        icon={PeopleIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={ArticleIcon}
      />
    </Admin>
  );
}
export default App;
