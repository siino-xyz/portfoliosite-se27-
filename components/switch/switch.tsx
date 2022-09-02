import { Box } from "components/box/Box";

const Switch = () => {
  return (
    <Box>
      <label htmlFor="on">
        明
        <input type="radio" name="colorModeToggle" />
      </label>
      <label htmlFor="off">
        暗
        <input type="radio" name="colorModeToggle" />
      </label>
    </Box>
  );
};

export default Switch;
