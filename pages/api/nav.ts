import type { NextApiResponse, NextApiRequest } from 'next'
import { default as navData } from "@data/navData";

export default function getNavbarLinks(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ data: navData });
};
