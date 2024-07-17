export default function InputField({
  id,
  type,
  placeholder,
  labelText,
}: {
  id: string;
  type: string;
  placeholder?: string;
  labelText?: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}
