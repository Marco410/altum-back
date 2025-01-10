import { list } from "@keystone-6/core";
import { timestamp, select, relationship } from "@keystone-6/core/fields";
import { role_options } from "./constants";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: select({
      options: role_options,
      validation: { isRequired: true },
    }),
    user: relationship({
      ref: "User.role",
      many: true,
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
