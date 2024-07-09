/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

type footerProp = {
    commitHash: any;
    commitMessage: any;
};

export default function ({ commitHash, commitMessage }: footerProp) {
    let hash;
    let message;
    if (!commitHash) {
        hash = "DEVELOPMENT";
        message = "DEVELOPMENT";
    } else {
        hash = commitHash.slice(0, 7);
        message = commitMessage.slice(0, 18);

        if (commitMessage.length > 7) {
            message += "...";
        }
    }
    return (
        <>
            <footer>
                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <div className="flex flex-col items-baseline space-y-6">
                        <div className="mx-auto">
                            <a href="/" className="mx-auto text-lg text-center">
                                ⨀
                            </a>
                        </div>
                        <div className="mx-auto">
                            <a
                                href={`https://github.com/Kars1996/CommitTestWebNext/commit/${commitHash}`}
                                className="mx-auto mt-2 text-sm font-medium text-gray-500"
                            >
                                Running version {hash} - {message}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
