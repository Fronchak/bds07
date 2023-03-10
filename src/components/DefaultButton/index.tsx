type Props = {
  text: string;
  onClick?: Function;
}

const DefaultButton = ({ text, onClick }: Props) => {

  return (
    <button
      className="btn default-btn w-100"
      onClick={() => onClick ? onClick() : {}}
    >{ text }</button>
  );
}

export default DefaultButton;