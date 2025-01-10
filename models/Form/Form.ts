import { list } from "@keystone-6/core";
import { text, timestamp, relationship } from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    description: text({ ui: { displayMode: "textarea" } }),
    notes: text({ ui: { displayMode: "textarea" } }),

    organization: relationship({
      ref: "Organization.form",
    }),
    job: relationship({
      ref: "Job.form",
      many: true,
    }),
    question: relationship({
      ref: "Question.form",
      many: true,
    }),
    formResponse: relationship({
      ref: "FormResponse.form",
      many: true,
    }),

    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
