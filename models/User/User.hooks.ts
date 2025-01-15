export const phoneHooks = {
  validateInput: async ({ resolvedData, addValidationError }: any) => {
    const { phone } = resolvedData;
    if (phone) {
      // Phone vaidation just numbers and more than 10 digits
      const pattern = /\+?\d{10,}(?:-?\d+)*$/;
      if (!pattern.test(phone) || (phone.length < 10 && phone.length !== 0)) {
        addValidationError(
          "El teléfono debe ser de 10 dígitos y puros números"
        );
      }
    }
    return phone;
  },
};

export const emailHooks = {
  validateInput: async ({ resolvedData, addValidationError }: any) => {
    const { email } = resolvedData;

    if (email && email !== "") {
      // if email comes, verifies regex
      const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(email)) {
        addValidationError("El formato del correo es incorrecto");
      }
    }
    return email;
  },
};

export const linkHooks = {
  resolveInput: async ({ resolvedData, item, context }: any) => {
    if (item) {
      return item.link;
    }

    const baseLink =
      `${resolvedData.name.toLowerCase()}-${resolvedData.lastName.toLowerCase()}`
        .replace(/ñ/g, "n")
        .replace(/[^a-z0-9-]/g, "");
    let uniqueLink = baseLink;

    let existingUser = await context.db.User.findOne({
      where: { link: uniqueLink },
    });

    let counter = 1;
    while (existingUser) {
      uniqueLink = `${baseLink}-${counter}`;
      existingUser = await context.db.User.findOne({
        where: { link: uniqueLink },
      });
      counter++;
    }

    return uniqueLink;
  },
};
