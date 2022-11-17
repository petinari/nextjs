import { Tenant } from "../types/Tenant";


export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    console.log("useapi" + tenantSlug);
    switch (tenantSlug) {
      case "b7burger":
        return {
          slug: "b7burger",
          name: "B7Burger",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
        break;
      case "b7pizza":
        return {
          slug: "b7pizza",
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
