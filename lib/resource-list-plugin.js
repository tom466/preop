const resourceListMarker = "___REPLACE_THIS_WITH_RESOURCE_LIST_LATER";

export default function resourceList() {
  return {
    name: "dependencygraph",
    resolveId(id) {
      if (id !== "resource-list:") return null;
      return id;
    },
    load(id) {
      if (id !== "resource-list:") return null;
      return `export default ${resourceListMarker};`;
    },
    generateBundle(_, bundle) {
      const resourceList = Object.keys(bundle).filter(key => {
        const value = bundle[key];
        if (value.isEntry) {
          if (value.facadeModuleId.endsWith('sw.js')) return false;
        }
        return true;
      });
      console.log('resource-list-plugin: resourceList for service worker', resourceList.sort());
      const resourceListJSON = JSON.stringify(resourceList);

      for (const item of Object.values(bundle)) {
        if (!item.code) continue;
        item.code = item.code.replace(resourceListMarker, resourceListJSON);
      }
    }
  };
}
