import { Connection, createConnection, getConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOption = await getConnectionOptions();
  return createConnection(Object.assign(defaultOption));
};
