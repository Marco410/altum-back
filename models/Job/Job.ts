import { list } from "@keystone-6/core";
import {
  text,
  timestamp,
  relationship,
  select,
  calendarDay,
} from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    description: text({
      validation: { isRequired: true },
      ui: { displayMode: "textarea" },
    }),
    status: select({
      options: ["Nuevo", "Pendiente", "En Proceso", "Completado", "Cancelado"],
      validation: { isRequired: true },
    }),
    notes: text({ ui: { displayMode: "textarea" } }),
    scheduled_at: calendarDay({ validation: { isRequired: true } }),
    completed_at: calendarDay({ validation: { isRequired: true } }),

    assigned_to: relationship({
      ref: "User.assignedTo",
    }),
    quotation: relationship({
      ref: "Quotation.job",
    }),
    form: relationship({
      ref: "Form.job",
      many: true,
    }),
    formResponse: relationship({
      ref: "FormResponse.job",
      many: true,
    }),

    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
