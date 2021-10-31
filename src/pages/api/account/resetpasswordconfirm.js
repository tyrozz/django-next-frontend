import { API_URL } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { uid, token, new_password1, new_password2 } = req.body;

    const body = JSON.stringify({
      uid,
      token,
      new_password1,
      new_password2,
    });

    console.log(body)

    try {
      const apiRes = await fetch(
        `${API_URL}/users/api/password/reset/confirm/`,
        {
          method: "POST",
          headers: {
            // "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: body,
        }
      );

      const data = await apiRes.json();
      console.log(data)

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
