// Legal Disclaimer Component for IPTV Pages

import { AlertTriangle } from 'lucide-react';

export function LegalDisclaimer() {
    return (
        <div className="my-8 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-6">
            <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-2 text-sm">
                    <h3 className="font-semibold text-yellow-500">Important Disclaimer</h3>
                    <div className="text-muted-foreground space-y-1">
                        <p>
                            • We do not host, store, or transmit any video content. All streams are publicly available and provided by third parties.
                        </p>
                        <p>
                            • Stream links are sourced from the{' '}
                            <a
                                href="https://github.com/iptv-org/iptv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                iptv-org community repository
                            </a>
                            , a public collection of user-submitted IPTV streams.
                        </p>
                        <p>
                            • We are not responsible for stream availability, quality, or content. Streams may go offline without notice.
                        </p>
                        <p>
                            • If you believe any content infringes on your rights, please contact the stream provider directly or report it to the iptv-org repository.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
