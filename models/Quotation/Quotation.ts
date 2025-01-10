import { list } from "@keystone-6/core";
import { text, timestamp, relationship, select } from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: text({ validation: { isRequired: true } }),

    status: select({
      options: ["Activa", "Ganada", "Perdida", "Cancelada"],
    }),
    sale_comission: text(),
    notes: text({ ui: { displayMode: "textarea" } }),

    user: relationship({
      ref: "User.quotation",
    }),
    project: relationship({
      ref: "Project.quotation",
    }),
    quotationProduct: relationship({
      ref: "QuotationProduct.quotation",
      many: true,
    }),
    job: relationship({
      ref: "Job.quotation",
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
