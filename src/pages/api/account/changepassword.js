import cookie from 'cookie';
import { API_URL } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const cookies = cookie.parse(req.headers.cookie ?? '');
    const access = cookies.access ?? false;

    if (access === false) {
        return res.status(401).json({
            error: 'User unauthorized to make this request'
        });
    }


    const { old_password, new_password1, new_password2 } = req.body;

    const body = JSON.stringify({
      old_password,
      new_password1,
      new_password2,
    });

    try {
      const apiRes = await fetch(`${API_URL}/users/api/password/change/`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${access}`,
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 201) {
        return res.status(201).json({ success: data.success });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong when registering the account",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
