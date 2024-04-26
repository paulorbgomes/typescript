import status from "./database/aplicativo";
import { resetarBanco } from "./database/aplicativo";
import { connection, statusConnection } from "./database/connection";

function acessarSistema() {
    connection({ip: "192.168.54.10", name: "MySQL"});
};

acessarSistema();
statusConnection();

status();
resetarBanco();