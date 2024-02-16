enum Environments {
  LOCAL = "local",
  DEV = "dev",
  PROD = "prod",
}

class Environment {
  private environment: String;

  constructor(environment: String) {
    this.environment = environment;
  }

  public getPort = (): Number => {
    if (this.environment === Environments.DEV) {
      return 8081;
    } else if (this.environment === Environments.PROD) {
      return 8082;
    } else {
      return 3000;
    }
  };

  public getDBName = (): String => {
    if (this.environment === Environments.DEV) {
      return "db_crud_dev";
    } else if (this.environment === Environments.PROD) {
      return "db_crud_prod";
    } else {
      return "db_crud_local";
    }
  };
}

export default new Environment(Environments.LOCAL);
