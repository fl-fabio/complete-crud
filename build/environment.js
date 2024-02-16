"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["LOCAL"] = "local";
    Environments["DEV"] = "dev";
    Environments["PROD"] = "prod";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.getPort = () => {
            if (this.environment === Environments.DEV) {
                return 8081;
            }
            else if (this.environment === Environments.PROD) {
                return 8082;
            }
            else {
                return 3000;
            }
        };
        this.getDBName = () => {
            if (this.environment === Environments.DEV) {
                return "db_crud_dev";
            }
            else if (this.environment === Environments.PROD) {
                return "db_crud_prod";
            }
            else {
                return "db_crud_local";
            }
        };
        this.environment = environment;
    }
}
exports.default = new Environment(Environments.LOCAL);
