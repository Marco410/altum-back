import { list } from "@keystone-6/core";
import {
  timestamp,
  relationship,
  integer,
  decimal,
  text,
} from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    quantity: integer({ validation: { isRequired: true } }),
    discount: decimal({ defaultValue: "0.0" }),
    notes: text({ ui: { displayMode: "textarea" } }),

    quotation: relationship({
      ref: "Quotation.quotationProduct",
    }),
    product: relationship({
      ref: "Product.quotationProduct",
    }),

    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
