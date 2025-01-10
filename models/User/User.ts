import { list } from "@keystone-6/core";
import {
  text,
  password,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";
import { emailHooks, linkHooks, phoneHooks } from "./User.hooks";
import access from "./User.access";

export default list({
  access,
  fields: {
    name: text({ validation: { isRequired: true } }),
    lastName: text(),
    secondLastName: text(),
    email: text({
      isIndexed: "unique",
      hooks: emailHooks,
    }),
    password: password({
      validation: { isRequired: true },
    }),
    phone: text({
      hooks: phoneHooks,
    }),
    role: relationship({
      ref: "Role.user",
      many: true,
    }),
    organization: relationship({
      ref: "Organization.user",
    }),
    client: relationship({
      ref: "Project.client",
    }),
    quotation: relationship({
      ref: "Quotation.user",
      many: true,
    }),
    formResponse: relationship({
      ref: "FormResponse.user",
      many: true,
    }),
    assignedTo: relationship({
      ref: "Job.assigned_to",
      many: true,
    }),
    link: text({
      isIndexed: "unique",
      hooks: linkHooks,
      ui: {
        createView: {
          fieldMode: "hidden",
        },
      },
    }),

    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
