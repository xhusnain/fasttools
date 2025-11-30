import api from "./axios";
import { BgBlurOptions, BgRemoverOptions } from "./api-types";

export const apiService = {
    removeBackground: async (options: BgRemoverOptions): Promise<Blob> => {
        const form = new FormData();
        form.append("image", options.image, "input.png");

        const strength = options.strength || "strong";
        const refine = options.refine || "depth";

        const response = await api.post(`/bg-remover?refine=${refine}&strength=${strength}`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
        });

        return response.data;
    },

    blurBackground: async (options: BgBlurOptions): Promise<Blob> => {
        const form = new FormData();
        form.append("image", options.image, "input.png");
        form.append("intensity", String(options.intensity));

        const strength = options.strength || "strong";
        const refine = options.refine || "depth";

        const response = await api.post(`/bg-blur?refine=${refine}&strength=${strength}`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            responseType: "blob",
        });

        return response.data;
    },
};
