type AppConfig = {
  env: string;
  logLevel: string;
  X_API_KEY: string;
  keycloakEnabled: boolean;
  applicationConfig: {
    appTimeZone: string,
    paginationConfig: {
      pageSizeOptions: Array<number>,
      defaultSize: number;
    }
  };
  baseUrl: string;
  keycloak: {
    keycloakUrl: string;
    realm: string;
    clientId: string;
  }
  roles: object,

};


const defaultAppConfig: AppConfig = {
  env: 'development',
  logLevel: 'info',
  X_API_KEY: '',
  keycloakEnabled: false,
  applicationConfig: {
    appTimeZone: 'UTC',
    paginationConfig: {
      pageSizeOptions: [10, 20, 50],
      defaultSize: 10,
    },
  },
  baseUrl: '',
  keycloak: {
    keycloakUrl: '',
    realm: '',
    clientId: '',
  },
  roles: {},
};

export default defaultAppConfig;
