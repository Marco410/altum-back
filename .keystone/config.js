"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);

// env.ts
var path = require("path");
var dotenv = require("dotenv");
dotenv.config({ path: path.resolve(process.cwd(), "config", ".env.dev") });

// models/Form/Answer/Answer.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");

// utils/generalAccess/access.ts
var access = {
  operation: {
    query: () => true,
    create: () => true,
    update: () => true,
    delete: () => true
  },
  filter: {
    query: () => true,
    update: () => true,
    delete: () => true
  }
};
var access_default = access;

// models/Form/Answer/Answer.ts
var Answer_default = (0, import_core.list)({
  access: access_default,
  fields: {
    answer: (0, import_fields.text)({
      validation: { isRequired: true }
    }),
    description: (0, import_fields.text)({ ui: { displayMode: "textarea" } }),
    question: (0, import_fields.relationship)({
      ref: "Question.answer"
    }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Form/Form.ts
var import_core2 = require("@keystone-6/core");
var import_fields2 = require("@keystone-6/core/fields");
var Form_default = (0, import_core2.list)({
  access: access_default,
  fields: {
    name: (0, import_fields2.text)({
      validation: { isRequired: true }
    }),
    description: (0, import_fields2.text)({ ui: { displayMode: "textarea" } }),
    notes: (0, import_fields2.text)({ ui: { displayMode: "textarea" } }),
    organization: (0, import_fields2.relationship)({
      ref: "Organization.form"
    }),
    job: (0, import_fields2.relationship)({
      ref: "Job.form",
      many: true
    }),
    question: (0, import_fields2.relationship)({
      ref: "Question.form",
      many: true
    }),
    formResponse: (0, import_fields2.relationship)({
      ref: "FormResponse.form",
      many: true
    }),
    createdAt: (0, import_fields2.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Form/FormResponse/FormResponse.ts
var import_core3 = require("@keystone-6/core");
var import_fields3 = require("@keystone-6/core/fields");
var FormResponse_default = (0, import_core3.list)({
  access: access_default,
  fields: {
    user: (0, import_fields3.relationship)({
      ref: "User.formResponse"
    }),
    form: (0, import_fields3.relationship)({
      ref: "Form.formResponse"
    }),
    job: (0, import_fields3.relationship)({
      ref: "Job.formResponse"
    }),
    started_at: (0, import_fields3.calendarDay)({ validation: { isRequired: true } }),
    completed_at: (0, import_fields3.calendarDay)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields3.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Form/Question/Question.ts
var import_core4 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var Question_default = (0, import_core4.list)({
  access: access_default,
  fields: {
    question: (0, import_fields4.text)({
      validation: { isRequired: true }
    }),
    description: (0, import_fields4.text)({ ui: { displayMode: "textarea" } }),
    type: (0, import_fields4.select)({
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
        "signature"
      ],
      validation: { isRequired: true }
    }),
    index: (0, import_fields4.integer)({ defaultValue: 1 }),
    form: (0, import_fields4.relationship)({
      ref: "Form.question"
    }),
    answer: (0, import_fields4.relationship)({
      ref: "Answer.question",
      many: true
    }),
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Job/Job.ts
var import_core5 = require("@keystone-6/core");
var import_fields5 = require("@keystone-6/core/fields");
var Job_default = (0, import_core5.list)({
  access: access_default,
  fields: {
    description: (0, import_fields5.text)({
      validation: { isRequired: true },
      ui: { displayMode: "textarea" }
    }),
    status: (0, import_fields5.select)({
      options: ["Nuevo", "Pendiente", "En Proceso", "Completado", "Cancelado"],
      validation: { isRequired: true }
    }),
    notes: (0, import_fields5.text)({ ui: { displayMode: "textarea" } }),
    scheduled_at: (0, import_fields5.calendarDay)({ validation: { isRequired: true } }),
    completed_at: (0, import_fields5.calendarDay)({ validation: { isRequired: true } }),
    assigned_to: (0, import_fields5.relationship)({
      ref: "User.assignedTo"
    }),
    quotation: (0, import_fields5.relationship)({
      ref: "Quotation.job"
    }),
    form: (0, import_fields5.relationship)({
      ref: "Form.job",
      many: true
    }),
    formResponse: (0, import_fields5.relationship)({
      ref: "FormResponse.job",
      many: true
    }),
    createdAt: (0, import_fields5.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Organization/Organization.ts
var import_core6 = require("@keystone-6/core");
var import_fields6 = require("@keystone-6/core/fields");
var Organization_default = (0, import_core6.list)({
  access: access_default,
  fields: {
    name: (0, import_fields6.text)({ validation: { isRequired: true } }),
    notes: (0, import_fields6.text)({ ui: { displayMode: "textarea" } }),
    user: (0, import_fields6.relationship)({
      ref: "User.organization",
      many: true
    }),
    project: (0, import_fields6.relationship)({
      ref: "Project.organization",
      many: true
    }),
    form: (0, import_fields6.relationship)({
      ref: "Form.organization",
      many: true
    }),
    logo: (0, import_fields6.image)({ storage: "local_images" }),
    createdAt: (0, import_fields6.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Product/Product.ts
var import_core7 = require("@keystone-6/core");
var import_fields7 = require("@keystone-6/core/fields");
var Product_default = (0, import_core7.list)({
  access: access_default,
  fields: {
    name: (0, import_fields7.text)({ validation: { isRequired: true } }),
    price: (0, import_fields7.decimal)(),
    notes: (0, import_fields7.text)({ ui: { displayMode: "textarea" } }),
    quotationProduct: (0, import_fields7.relationship)({
      ref: "QuotationProduct.product",
      many: true
    }),
    createdAt: (0, import_fields7.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Project/Project.ts
var import_core8 = require("@keystone-6/core");
var import_fields8 = require("@keystone-6/core/fields");
var Project_default = (0, import_core8.list)({
  access: access_default,
  fields: {
    name: (0, import_fields8.text)({ validation: { isRequired: true } }),
    type: (0, import_fields8.select)({
      options: ["Corporativo", "Comercial", "Residencial", "Industrial"],
      validation: { isRequired: true }
    }),
    address: (0, import_fields8.text)(),
    start_date: (0, import_fields8.calendarDay)({ validation: { isRequired: true } }),
    end_date: (0, import_fields8.calendarDay)({ validation: { isRequired: true } }),
    notes: (0, import_fields8.text)({ ui: { displayMode: "textarea" } }),
    client: (0, import_fields8.relationship)({
      ref: "User.client",
      many: true
    }),
    organization: (0, import_fields8.relationship)({
      ref: "Organization.project"
    }),
    quotation: (0, import_fields8.relationship)({
      ref: "Quotation.project",
      many: true
    }),
    createdAt: (0, import_fields8.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Quotation/Quotation.ts
var import_core9 = require("@keystone-6/core");
var import_fields9 = require("@keystone-6/core/fields");
var Quotation_default = (0, import_core9.list)({
  access: access_default,
  fields: {
    name: (0, import_fields9.text)({ validation: { isRequired: true } }),
    status: (0, import_fields9.select)({
      options: ["Activa", "Ganada", "Perdida", "Cancelada"]
    }),
    sale_comission: (0, import_fields9.text)(),
    notes: (0, import_fields9.text)({ ui: { displayMode: "textarea" } }),
    user: (0, import_fields9.relationship)({
      ref: "User.quotation"
    }),
    project: (0, import_fields9.relationship)({
      ref: "Project.quotation"
    }),
    quotationProduct: (0, import_fields9.relationship)({
      ref: "QuotationProduct.quotation",
      many: true
    }),
    job: (0, import_fields9.relationship)({
      ref: "Job.quotation"
    }),
    createdAt: (0, import_fields9.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/QuotationProduct/QuotationProduct.ts
var import_core10 = require("@keystone-6/core");
var import_fields10 = require("@keystone-6/core/fields");
var QuotationProduct_default = (0, import_core10.list)({
  access: access_default,
  fields: {
    quantity: (0, import_fields10.integer)({ validation: { isRequired: true } }),
    discount: (0, import_fields10.decimal)({ defaultValue: "0.0" }),
    notes: (0, import_fields10.text)({ ui: { displayMode: "textarea" } }),
    quotation: (0, import_fields10.relationship)({
      ref: "Quotation.quotationProduct"
    }),
    product: (0, import_fields10.relationship)({
      ref: "Product.quotationProduct"
    }),
    createdAt: (0, import_fields10.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/Role/Role.ts
var import_core11 = require("@keystone-6/core");
var import_fields11 = require("@keystone-6/core/fields");

// models/Role/constants.ts
var role_options = [
  { label: "Admin", value: "admin" /* ADMIN */ },
  { label: "Director", value: "ceo" /* CEO */ },
  { label: "Empleado", value: "employee" /* EMPLOYEE */ },
  { label: "Gerente", value: "manager" /* MANAGER */ },
  { label: "Cliente", value: "client" /* CLIENT */ },
  { label: "Usuario", value: "user" /* USER */ }
];

// models/Role/Role.ts
var Role_default = (0, import_core11.list)({
  access: access_default,
  fields: {
    name: (0, import_fields11.select)({
      options: role_options,
      validation: { isRequired: true }
    }),
    user: (0, import_fields11.relationship)({
      ref: "User.role",
      many: true
    }),
    createdAt: (0, import_fields11.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/User/User.ts
var import_core12 = require("@keystone-6/core");
var import_fields12 = require("@keystone-6/core/fields");

// models/User/User.hooks.ts
var phoneHooks = {
  validateInput: async ({ resolvedData, addValidationError }) => {
    const { phone } = resolvedData;
    if (phone) {
      const pattern = /\+?\d{10,}(?:-?\d+)*$/;
      if (!pattern.test(phone) || phone.length < 10 && phone.length !== 0) {
        addValidationError(
          "El tel\xE9fono debe ser de 10 d\xEDgitos y puros n\xFAmeros"
        );
      }
    }
    return phone;
  }
};
var emailHooks = {
  validateInput: async ({ resolvedData, addValidationError }) => {
    const { email } = resolvedData;
    if (email && email !== "") {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(email)) {
        addValidationError("El formato del correo es incorrecto");
      }
    }
    return email;
  }
};
var linkHooks = {
  resolveInput: async ({ resolvedData, item, context }) => {
    if (item) {
      return item.link;
    }
    const baseLink = `${resolvedData.name.toLowerCase()}-${resolvedData.lastName.toLowerCase()}`.replace(/ñ/g, "n").replace(/[^a-z0-9-]/g, "");
    let uniqueLink = baseLink;
    let existingUser = await context.db.User.findOne({
      where: { link: uniqueLink }
    });
    let counter = 1;
    while (existingUser) {
      uniqueLink = `${baseLink}-${counter}`;
      existingUser = await context.db.User.findOne({
        where: { link: uniqueLink }
      });
      counter++;
    }
    return uniqueLink;
  }
};

// models/User/User.access.ts
var access2 = {
  operation: {
    query: ({ session: session2 }) => true,
    create: ({ session: session2 }) => true,
    update: ({ session: session2 }) => true,
    delete: ({ session: session2 }) => true
  },
  filter: {
    query: ({ session: session2 }) => true,
    update: ({ session: session2 }) => true,
    delete: ({ session: session2 }) => true
  },
  item: {
    create: ({ session: session2 }) => true,
    update: ({ session: session2 }) => true,
    delete: ({ session: session2 }) => true
  }
};
var User_access_default = access2;

// models/User/User.ts
var User_default = (0, import_core12.list)({
  access: User_access_default,
  fields: {
    name: (0, import_fields12.text)({ validation: { isRequired: true } }),
    lastName: (0, import_fields12.text)(),
    secondLastName: (0, import_fields12.text)(),
    email: (0, import_fields12.text)({
      isIndexed: "unique",
      hooks: emailHooks
    }),
    password: (0, import_fields12.password)({
      validation: { isRequired: true }
    }),
    phone: (0, import_fields12.text)({
      hooks: phoneHooks
    }),
    role: (0, import_fields12.relationship)({
      ref: "Role.user",
      many: true
    }),
    organization: (0, import_fields12.relationship)({
      ref: "Organization.user"
    }),
    client: (0, import_fields12.relationship)({
      ref: "Project.client"
    }),
    quotation: (0, import_fields12.relationship)({
      ref: "Quotation.user",
      many: true
    }),
    formResponse: (0, import_fields12.relationship)({
      ref: "FormResponse.user",
      many: true
    }),
    assignedTo: (0, import_fields12.relationship)({
      ref: "Job.assigned_to",
      many: true
    }),
    link: (0, import_fields12.text)({
      isIndexed: "unique",
      hooks: linkHooks,
      ui: {
        createView: {
          fieldMode: "hidden"
        }
      }
    }),
    createdAt: (0, import_fields12.timestamp)({
      defaultValue: {
        kind: "now"
      }
    })
  }
});

// models/schema.ts
var schema_default = {
  User: User_default,
  Role: Role_default,
  Organization: Organization_default,
  Project: Project_default,
  Quotation: Quotation_default,
  QuotationProduct: QuotationProduct_default,
  Product: Product_default,
  Job: Job_default,
  Form: Form_default,
  Question: Question_default,
  Answer: Answer_default,
  FormResponse: FormResponse_default
};

// keystone.ts
var import_core13 = require("@keystone-6/core");

// auth/auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: `
    id 
    name 
    role {
      id
      name
    }
    createdAt
  `,
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    fields: ["name", "email", "password", "role"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core13.config)({
    db: {
      provider: "postgresql",
      url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.POSTGRES_DB}?connect_timeout=300`
    },
    server: {
      cors: true,
      maxFileSize: 200 * 1024 * 1024
    },
    storage: {
      local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path2) => `http://${process.env.DB_HOST}:3000/images${path2}`,
        serverRoute: {
          path: "/images"
        },
        storagePath: "public/images"
      }
    },
    lists: schema_default,
    session
  })
);
//# sourceMappingURL=config.js.map
