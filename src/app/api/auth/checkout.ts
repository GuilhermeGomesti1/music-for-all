import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../../type.d";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
