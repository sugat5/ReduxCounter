export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";

export const valueINC = () => ({
  type: INC
});

export const valueDEC = () => ({
  type: DEC
});

export const valueRESET = () => ({
  type: RESET
});
