import type { NextApiResponse, NextApiRequest } from 'next';
import { HotelData } from '@interfaces/hotel';
import HOTELS_DATA from "@data/hotelsData";

export default function getFooterData(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ data: HOTELS_DATA.map((hotel: HotelData) => hotel.drawer) });
};

