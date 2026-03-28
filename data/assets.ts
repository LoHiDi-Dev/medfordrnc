/**
 * Image URLs from Figma MCP exports (homepage + interior pages).
 * Remote assets; configure next/image in next.config.ts.
 * Refresh URLs when Figma MCP asset links expire (~7 days).
 */
export const assets = {
  logoColor:
    "https://www.figma.com/api/mcp/asset/85d4a06b-8917-43e5-ad06-839501e14e1d",
  logoWhite:
    "https://www.figma.com/api/mcp/asset/47bcb53e-8f92-44e7-aac6-cc6526a4b82b",
  hero:
    "https://www.figma.com/api/mcp/asset/067bbd55-f06d-4d4f-a5ed-fab46fe6a33d",
  whyFamilies:
    "https://www.figma.com/api/mcp/asset/35965d73-8070-44a6-b727-c0cfcd31cd02",
  lifeActivities:
    "https://www.figma.com/api/mcp/asset/88811e30-e500-4203-b8ca-512a6b87d800",
  lifeGarden:
    "https://www.figma.com/api/mcp/asset/75045f5b-9856-4d66-a467-2a311cd6ac0a",
  contactSidebarPhoto:
    "https://www.figma.com/api/mcp/asset/e6a2c7a1-227e-4679-842d-ac5d4f5502f2",
  services: {
    shortTerm:
      "https://www.figma.com/api/mcp/asset/3878b82a-abf3-46a9-ada1-64d1116e4fcc",
    longTerm:
      "https://www.figma.com/api/mcp/asset/68918e42-86f5-4044-abd8-e9ccb4b5f580",
    memory:
      "https://www.figma.com/api/mcp/asset/5b5b0e8a-f02e-4bbd-87fd-1e923935bb0a",
    postAcute:
      "https://www.figma.com/api/mcp/asset/aaae6501-d39b-4fed-923d-dd6848131d0d",
    occupational:
      "https://www.figma.com/api/mcp/asset/c8b48d20-e018-4adb-8374-d767fa15f53d",
    speech:
      "https://www.figma.com/api/mcp/asset/35d645b6-3a88-41dc-b1e2-142106b7996a",
  },
  testimonials: {
    a: "https://www.figma.com/api/mcp/asset/61fa096e-a3a2-447d-b59d-1984f765ad04",
    b: "https://www.figma.com/api/mcp/asset/60aed461-7056-49ac-9aa7-a9d129b00dc2",
    c: "https://www.figma.com/api/mcp/asset/f50b6e72-c7dd-412a-a6bd-70944384ff85",
  },
} as const;
