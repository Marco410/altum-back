export enum Role {
  ADMIN = "admin",
  CEO = "ceo",
  MANAGER = "manager",
  CLIENT = "client",
  EMPLOYEE = "employee",
  USER = "user",
}

export const role_options = [
  { label: "Admin", value: Role.ADMIN },
  { label: "Director", value: Role.CEO },
  { label: "Empleado", value: Role.EMPLOYEE },
  { label: "Gerente", value: Role.MANAGER },
  { label: "Cliente", value: Role.CLIENT },
  { label: "Usuario", value: Role.USER },
];
