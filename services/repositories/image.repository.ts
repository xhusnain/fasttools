import { HttpClient } from "../api/http-client";
import type { BgRemoverOptions, BgBlurOptions } from "@/types/api.types";

export const ImageRepository = {
  removeBackground: async (options: BgRemoverOptions): Promise<Blob> => {
    const form = new FormData();
    form.append("image", options.image, "input.png");

    const strength = options.strength || "strong";
    const refine = options.refine || "depth";

    const response = await HttpClient.post<Blob>(
      `/bg-remover?refine=${refine}&strength=${strength}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );

    return response.data;
  },

  blurBackground: async (options: BgBlurOptions): Promise<Blob> => {
    const form = new FormData();
    form.append("image", options.image, "input.png");
    form.append("intensity", String(options.intensity));

    const strength = options.strength || "strong";
    const refine = options.refine || "depth";

    const response = await HttpClient.post<Blob>(
      `/bg-blur?refine=${refine}&strength=${strength}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      }
    );

    return response.data;
  },
};

