import { list } from "@keystone-6/core";
import {
  text,
  password,
  timestamp,
  relationship,
  image,
  select,
  calendarDay,
} from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: text({ validation: { isRequired: true } }),
    type: select({
      options: ["Corporativo", "Comercial", "Residencial", "Industrial"],
      validation: { isRequired: true },
    }),
    address: text(),
    start_date: calendarDay({ validation: { isRequired: true } }),
    end_date: calendarDay({ validation: { isRequired: true } }),
    notes: text({ ui: { displayMode: "textarea" } }),

    client: relationship({
      ref: "User.client",
      many: true,
    }),
    organization: relationship({
      ref: "Organization.project",
    }),
    quotation: relationship({
      ref: "Quotation.project",
      many: true,
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
