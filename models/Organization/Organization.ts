import { list } from "@keystone-6/core";
import { text, timestamp, relationship, image } from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: text({ validation: { isRequired: true } }),
    notes: text({ ui: { displayMode: "textarea" } }),
    user: relationship({
      ref: "User.organization",
      many: true,
    }),
    project: relationship({
      ref: "Project.organization",
      many: true,
    }),
    form: relationship({
      ref: "Form.organization",
      many: true,
    }),
    logo: image({ storage: "local_images" }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
