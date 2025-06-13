import QueryString from "qs";

const queryNumberValidation = (value?: string | QueryString.ParsedQs | (string | QueryString.ParsedQs)[]) => {
  return value !== undefined && !isNaN(Number(value)) ? Number(value) : undefined;
}

const queryStringValidation = (value?: string | QueryString.ParsedQs | (string | QueryString.ParsedQs)[]) => {
  return typeof value === 'string' && value.trim() !== '' ? String(value).trim() : undefined;
}

export { queryNumberValidation, queryStringValidation }