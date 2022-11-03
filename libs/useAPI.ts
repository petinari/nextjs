export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    console.log("useapi - " + tenantSlug);
    switch (tenantSlug) {
      case "b7burger":
        return {
          name: "B7Burger",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
        break;
      case "b7pizza":
        return {
          name: "B7Pizza",
          mainColor: "#0000ff",
          secondColor: "red",
        };
        break;
      default:
        return false;
    }
  },
});
