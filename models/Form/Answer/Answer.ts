import { list } from "@keystone-6/core";
import { text, timestamp, relationship } from "@keystone-6/core/fields";
import access from "../../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    answer: text({
      validation: { isRequired: true },
    }),
    description: text({ ui: { displayMode: "textarea" } }),

    question: relationship({
      ref: "Question.answer",
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
