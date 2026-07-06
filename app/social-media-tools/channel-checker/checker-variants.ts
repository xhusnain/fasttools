export interface CheckerVariantConfig {
  slug: string
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  overviewText: string
  keywords?: string[]
  faqOverrides?: Array<{ question: string; answer: string }>
  howToSteps?: string[]
  featureOverrides?: string[]
}

export const checkerVariants: Record<string, CheckerVariantConfig> = {
  "handle-availability-2026": {
    slug: "handle-availability-2026",
    toolName: "YouTube Handle Availability Checker",
    metaTitle: "YouTube Handle Availability Checker — Is It Taken?",
    metaDescription:
      "Check if a YouTube handle is available. Instantly verify @handle availability, see if your desired username is taken, and find alternatives.",
    headerTitle: "YouTube Handle Availability Checker",
    headerDescription:
      "Verify if a YouTube @handle is available right now. Updated for the latest handle rules and requirements.",
    overviewText:
      "YouTube handles are the unique @usernames that identify every channel. With over 100 million channels on the platform, finding an available handle gets harder every year. This tool checks real-time availability so you can claim your preferred @handle before someone else does. Updated for the latest YouTube handle policies and character requirements.",
    keywords: [
      "youtube handle availability checker",
      "youtube handle availability",
      "check if youtube handle is available",
      "youtube handle checker",
      "is my youtube handle taken",
      "youtube handle availability checker tool",
    ],
    faqOverrides: [
      {
        question: "Has YouTube changed its handle rules recently?",
        answer:
          "YouTube periodically updates handle policies. Currently, handles must be 3-30 characters, contain only letters, numbers, underscores, hyphens, and periods, and remain unique across the platform. Check YouTube's official documentation for the latest policy updates.",
      },
      {
        question: "How quickly should I claim an available handle?",
        answer:
          "Immediately. YouTube handles are first-come, first-served. If our tool shows a handle as potentially available, create or update your channel right away to claim it. Popular or short handles can be taken within hours.",
      },
    ],
    howToSteps: [
      "Enter the @handle you want to check (e.g., @YourBrandName).",
      "Click check to verify current availability status.",
      "If taken, try variations — add your niche, location, or descriptive words.",
      "Once you find an available handle, go to YouTube Studio to claim it immediately.",
    ],
  },
  "channel-name-checker": {
    slug: "channel-name-checker",
    toolName: "YouTube Channel Name Availability Checker",
    metaTitle: "YouTube Channel Name Availability Checker (Free Tool)",
    metaDescription:
      "Check if a YouTube channel name is available. Verify channel name and handle availability instantly. Free tool for creators, brands, and agencies.",
    headerTitle: "YouTube Channel Name Availability Checker",
    headerDescription:
      "Verify if your desired YouTube channel name and matching handle are available for use.",
    overviewText:
      "Your YouTube channel name is the first thing viewers see. Before you commit to a name, use this tool to check whether the matching @handle is available. A consistent channel name and handle builds brand recognition and makes your channel easier to find in search results and recommendations.",
    keywords: [
      "youtube channel name availability checker",
      "youtube channel name checker",
      "check youtube channel name availability",
      "youtube channel name availability",
      "is youtube channel name taken",
      "unique youtube channel name checker",
    ],
    faqOverrides: [
      {
        question: "Can two YouTube channels have the same name?",
        answer:
          "Yes. YouTube display names (channel names) do not have to be unique. Multiple channels can share the exact same display name. However, handles (@usernames) must be unique. This is why checking handle availability matters more than just the display name.",
      },
      {
        question: "How do I pick a good YouTube channel name?",
        answer:
          "Choose a name that is short, memorable, and relevant to your content niche. Avoid special characters and numbers unless they are part of your brand. Check that the matching handle is available on YouTube and other platforms for cross-platform consistency.",
      },
    ],
    howToSteps: [
      "Enter your desired YouTube channel name.",
      "The tool checks if a matching @handle is available.",
      "Review results — the channel name can always be used, but the handle must be unique.",
      "If the handle is taken, try variations of the name until you find an available match.",
    ],
  },
  "check-if-taken": {
    slug: "check-if-taken",
    toolName: "Check If YouTube Handle Is Taken",
    metaTitle: "Check If a YouTube Handle Is Taken (Instant Lookup)",
    metaDescription:
      "Instantly check if a YouTube handle or channel name is already taken. Free lookup tool — verify availability before creating your channel.",
    headerTitle: "Check If a YouTube Handle Is Taken",
    headerDescription:
      "Find out instantly whether a specific YouTube @handle is already claimed by another channel.",
    overviewText:
      "Wondering if that perfect YouTube handle is already taken? Enter it here to find out instantly. This tool checks whether a specific @handle is currently in use on YouTube, so you know before you try to claim it in YouTube Studio. Save time by verifying availability upfront instead of discovering conflicts during channel setup.",
    keywords: [
      "check if youtube handle is taken",
      "is youtube handle taken",
      "how to check if youtube handle is available",
      "how to check if youtube channel name is taken",
      "youtube handle taken checker",
      "check youtube handle availability",
    ],
    faqOverrides: [
      {
        question: "What happens if the handle I want is taken?",
        answer:
          "If your desired handle is taken, try adding descriptive words related to your content niche (e.g., @CookingWithAlex instead of @Alex). You can also try abbreviations, add 'official' or 'real' prefix/suffix, or use underscores/periods to create a unique variation.",
      },
      {
        question: "Can I get a taken handle if the channel is inactive?",
        answer:
          "YouTube does not currently reclaim handles from inactive channels. If a handle is taken, it remains claimed regardless of channel activity. YouTube may change this policy in the future, but there is currently no process to request a taken handle from an inactive channel.",
      },
    ],
    howToSteps: [
      "Type the exact @handle you want to check.",
      "Click the check button for instant results.",
      "If taken, the tool shows the handle is in use.",
      "Try alternative spellings or variations and check again until you find one that is available.",
    ],
  },
  "youtube-username-checker": {
    slug: "youtube-username-checker",
    toolName: "YouTube Username Checker",
    metaTitle: "YouTube Username Checker - Check Handle Availability",
    metaDescription:
      "Free YouTube username checker. Check if a YouTube @username or channel handle is available, taken, valid, or ready to claim before creating your channel.",
    headerTitle: "YouTube Username Checker",
    headerDescription:
      "Check whether a YouTube username, @handle, or matching channel URL is available before you launch or rename a channel.",
    overviewText:
      "YouTube usernames now map most closely to handles: the unique @name shown in channel URLs, comments, Shorts, and mentions. This checker helps you test a YouTube username idea before you commit to branding. Enter the username with or without @, confirm whether the format is valid, and see whether the public youtube.com/@username URL is already claimed.",
    keywords: [
      "youtube username checker",
      "youtube username availability checker",
      "check youtube username availability",
      "youtube username availability",
      "yt username checker",
      "youtube account name checker",
    ],
    faqOverrides: [
      {
        question: "Is a YouTube username the same as a YouTube handle?",
        answer:
          "For modern YouTube channels, the unique public username is the @handle. A channel display name can be shared by many channels, but the @handle is unique and appears in the channel URL.",
      },
      {
        question: "Can I use spaces in a YouTube username?",
        answer:
          "No. YouTube handles cannot contain spaces. Use letters, numbers, underscores, hyphens, or periods, and keep the handle between 3 and 30 characters.",
      },
    ],
    howToSteps: [
      "Enter the YouTube username or @handle you want to check.",
      "Review the format result to confirm the username follows YouTube handle rules.",
      "Check availability to see whether the matching youtube.com/@username page is already claimed.",
      "Try cleaner variations if the username is taken, too short, or blocked.",
    ],
  },
}
