import { list } from "@keystone-6/core";
import {
  text,
  timestamp,
  relationship,
  decimal,
} from "@keystone-6/core/fields";
import access from "../../utils/generalAccess/access";

export default list({
  access,
  fields: {
    name: text({ validation: { isRequired: true } }),

    price: decimal(),
    notes: text({ ui: { displayMode: "textarea" } }),

    quotationProduct: relationship({
      ref: "QuotationProduct.product",
      many: true,
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
