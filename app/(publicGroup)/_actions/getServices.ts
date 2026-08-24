export const getServices = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/services`, {
    headers: {
      "content-type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["services"],
    },
  });

  const result = await res.json();

  return result;
};
