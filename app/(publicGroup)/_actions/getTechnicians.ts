export const getTechnicians = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/technicians`, {
    headers: {
      "content-type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["technicians"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch technicians");
  }

  const result = await res.json();
  return result;
};
export const getReviews = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/reviews`, {
    headers: {
      "content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch technicians");
  }

  const result = await res.json();
  return result;
};
