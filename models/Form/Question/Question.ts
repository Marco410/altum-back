import { list } from "@keystone-6/core";
import {
  text,
  timestamp,
  relationship,
  select,
  integer,
} from "@keystone-6/core/fields";
import access from "../../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    question: text({
      validation: { isRequired: true },
    }),
    description: text({ ui: { displayMode: "textarea" } }),
    type: select({
      options: [
        "text",
        "textarea",
        "number",
        "date",
        "checkbox",
        "radio",
        "select",
        "file",
        "image",
        "gallery",
        "signature",
      ],
      validation: { isRequired: true },
    }),
    index: integer({ defaultValue: 1 }),
    form: relationship({
      ref: "Form.question",
    }),
    answer: relationship({
      ref: "Answer.question",
      many: true,
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
