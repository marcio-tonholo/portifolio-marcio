import { StackCard } from "./styles";

export const Stack = ({ title, Icon }) => {
  const isString = typeof Icon === "string";

  return (
    <StackCard>
      <p>{title}</p>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color={"#166fb7"} />
      )}
    </StackCard>
  );
};
