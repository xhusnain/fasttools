
import { createVideoObjectSchema } from "./lib/metadata-base";

const videoConfig = {
    id: "qNapObaVmPc",
    title: "How to Check YouTube Channel Name Availability | FastTools Tutorial",
    description: "Learn how to use our YouTube Channel Name Checker..."
};

const schema = createVideoObjectSchema(
    videoConfig,
    "Default Title",
    "Default Description"
);

console.log(JSON.stringify(schema, null, 2));

if (schema["@type"] === "VideoObject" && schema.embedUrl.includes("qNapObaVmPc")) {
    console.log("VERIFICATION PASSED");
} else {
    console.log("VERIFICATION FAILED");
    process.exit(1);
}
