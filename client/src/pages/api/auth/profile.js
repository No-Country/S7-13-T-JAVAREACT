export default function profileHandler(req, res) {
  console.log(req.cookies);
  return res.json({ user: req.cookies.user });
}
