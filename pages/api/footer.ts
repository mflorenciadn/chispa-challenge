import type { NextApiResponse, NextApiRequest } from 'next'
import { default as footerData } from "@data/footerData";

export default function getFooterData(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({ data: footerData });
};
