type DefaultInputProps = {
  id: string;
  labelText?: string; //define labelText as optional
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* <label htmlFor={id}>{labelText}</label> */}
      <input id={id} type={type} {...rest} />
    </>
  );
}
