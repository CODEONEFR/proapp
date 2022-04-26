import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ModulList } from "./modul/ModulList";
import { ModulCreate } from "./modul/ModulCreate";
import { ModulEdit } from "./modul/ModulEdit";
import { ModulShow } from "./modul/ModulShow";
import { CategryList } from "./categry/CategryList";
import { CategryCreate } from "./categry/CategryCreate";
import { CategryEdit } from "./categry/CategryEdit";
import { CategryShow } from "./categry/CategryShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Progressus Admin"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Modul"
          list={ModulList}
          edit={ModulEdit}
          create={ModulCreate}
          show={ModulShow}
        />
        <Resource
          name="Categry"
          list={CategryList}
          edit={CategryEdit}
          create={CategryCreate}
          show={CategryShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
