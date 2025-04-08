import z from "zod";

const taxonomySchema = z.object({
  Access: z.string().optional(),
  FCA: z.string().optional(),
  FINMA: z.string().optional(),
  Industry: z.string().optional(),
  CollateralizedAsset: z.string().optional(),
  CollateralizedAssetType: z.string().optional(),
  CollateralType: z.string().optional(),
  CollateralInfo: z.string().optional(),
});

const ratingSchema = z.object({
  Weiss: z
    .object({
      Rating: z.string().optional(),
      TechnologyAdoptionRating: z.string().optional(),
      MarketPerformanceRating: z.string().optional(),
    })
    .optional(),
});

const coinDataSchema = z.object({
  Id: z.string().optional(),
  Url: z.string().optional(),
  ImageUrl: z.string().optional(),
  ContentCreatedOn: z.number().optional(),
  Name: z.string().optional(),
  Symbol: z.string().optional(),
  CoinName: z.string().optional(),
  FullName: z.string().optional(),
  Description: z.string().optional(),
  AssetTokenStatus: z.string().optional(),
  Algorithm: z.string().optional(),
  ProofType: z.string().optional(),
  SortOrder: z.string().optional(),
  Sponsored: z.boolean().optional(),
  Taxonomy: taxonomySchema.optional(),
  Rating: ratingSchema.optional(),
  IsTrading: z.boolean().optional(),
  TotalCoinsMined: z.number().optional(),
  CirculatingSupply: z.number().optional(),
  BlockNumber: z.number().optional(),
  NetHashesPerSecond: z.number().optional(),
  BlockReward: z.number().optional(),
  BlockTime: z.number().optional(),
  AssetLaunchDate: z.string().optional(),
  AssetWhitepaperUrl: z.string().optional(),
  AssetWebsiteUrl: z.string().optional(),
  MaxSupply: z.number().optional(),
  MktCapPenalty: z.number().optional(),
  IsUsedInDefi: z.number().optional(),
  IsUsedInNft: z.number().optional(),
  PlatformType: z.string().optional(),
  DecimalPoints: z.number().optional(),
});

export const ExtraCurrencyDetailsSchema = z.object({
  Response: z.string(),
  Message: z.string(),
  Data: z.record(z.string(), coinDataSchema),
  RateLimit: z.record(z.unknown()).optional(),
  HasWarning: z.boolean(),
  Type: z.number(),
});

export type ExtraCurrencyDetailsResponseType = z.infer<
  typeof ExtraCurrencyDetailsSchema
>;

export type ExtraCurrencyDetailsParamsType = {
  currency: string;
};
