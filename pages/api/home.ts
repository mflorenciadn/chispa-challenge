import type { NextApiRequest, NextApiResponse } from 'next';
import { default as homeData } from "@data/homeData";

export default function getHomeData(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({ data: homeData });
};
