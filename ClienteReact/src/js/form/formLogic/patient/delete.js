import { createRequestConfig } from "js/form/createRequestConfig";

async function onSubmit(data, viewConfig, args, form) {
    console.log({ data, viewConfig, args, form });
    const res = await createRequestConfig(data, viewConfig, args, form);
    console.log({ res });
}

export { onSubmit };
