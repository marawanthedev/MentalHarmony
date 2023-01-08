export interface FormInput {
  id: string;
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  value?: string | undefined;
  label?: string;
}
