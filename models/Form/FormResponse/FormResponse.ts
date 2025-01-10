import { list } from "@keystone-6/core";
import { timestamp, relationship, calendarDay } from "@keystone-6/core/fields";
import access from "../../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    user: relationship({
      ref: "User.formResponse",
    }),
    form: relationship({
      ref: "Form.formResponse",
    }),
    job: relationship({
      ref: "Job.formResponse",
    }),
    started_at: calendarDay({ validation: { isRequired: true } }),
    completed_at: calendarDay({ validation: { isRequired: true } }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
