export const getCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/categories`, {
    headers: {
      "content-type": "application/json",
    },
    next: {
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await res.json();
  return result;
};
