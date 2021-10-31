import { API_URL } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { first_name, last_name, username, password, re_password,email } = req.body;

    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      re_password,
      email
    });

    try {
      const apiRes = await fetch(`${API_URL}/api/users-reg/`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      });

      const data = await apiRes.json();

      if(apiRes.status === 201 ) {
          return res.status(201).json({ success: data.success });
      } else {
          return res.status(apiRes.status).json({
              error: data.error
          })
      }
    } catch (err) {
        return res.status(500).json({
            'error': 'Something went wrong when registering the account'
        })
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
