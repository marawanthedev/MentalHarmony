export default function ObjectCleanse<T extends object>(obj: T) {
  (Object.keys(obj) as Array<keyof T>).forEach((field) => {
    if (obj[field as keyof typeof obj] === undefined)
      delete obj[field as keyof typeof obj];
  });

  return obj;
}
