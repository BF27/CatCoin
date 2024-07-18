import Image from "next/image";

export default function InputField({
  id,
  type,
  placeholder,
  labelText,
  className,
  icon,
}: {
  id: string;
  type: string;
  placeholder?: string;
  labelText?: string;
  className?: string;
  icon?: string;
}) {
  if (icon != undefined) {
    return (
      <div className={"flex flex-row gap-2" + " " + className}>
        <label htmlFor={id}>
          {icon ? (
            <Image alt={id + "-" + icon} src={icon} width="48" height={48} />
          ) : labelText ? (
            labelText
          ) : (
            ""
          )}
        </label>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="bg-white w-full"
        />
      </div>
    );
  }
  return (
    <div className={"flex flex-col" + " " + className}>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="bg-white"
      />
    </div>
  );
}
