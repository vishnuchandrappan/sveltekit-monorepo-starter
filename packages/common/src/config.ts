const sharedConfig = {
  some: "thing",
};

const webAppConfig = {
  ...sharedConfig,
  webApp: "config",
};

const nodeAppConfig = {
  ...sharedConfig,
  nodeApp: "config",
};

export const config = {
  webApp: webAppConfig,
  nodeApp: nodeAppConfig,
};
