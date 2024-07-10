import chroma from "chroma-js";

export const colourOptions = [
  {
    value: "programming",
    label: "Programming",
    color: "#00B8D9",
    isFixed: true,
  },
  { value: "front-end", label: "Front-end", color: "#5243AA" },
  { value: "back-end", label: "Back-end", color: "#FF5630", isFixed: true },
  { value: "full-stack", label: "Full-Stack", color: "#FF8B00" },
  { value: "devops", label: "Devops", color: "#FFC400" },
  { value: "it", label: "IT", color: "#36B37E" },
  { value: "non-it", label: "Non-it", color: "#00875A" },
];

export const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
