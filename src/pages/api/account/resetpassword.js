import { API_URL } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    const body = JSON.stringify({
      email,
    });

    try {
      const apiRes = await fetch(`${API_URL}/users/api/password/reset/`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        return res.status(200).json({ success: data.detail });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
