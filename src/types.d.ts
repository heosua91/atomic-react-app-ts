interface mirrorObject {
  [key: string]: string;
}

interface globalState {
  user: ReduxCompatibleReducer<userState>;
}

interface userState {
  isAuthenticated: boolean;
  authToken: string | null;
}

