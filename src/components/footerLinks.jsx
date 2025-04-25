// Beloew the footer - Footer Links sections - three sections

function FooterLinks() {
    const sections = [
        {
            title: "Support",
            links: [
                "Help Centre",
                "AirCover",
                "Anti-discrimination",
                "Disability support",
                "Cancellation options",
                "Report neighbourhood concern",
            ],
        },
        {
            title: "Hosting",
            links: [
                "Airbnb your home",
                "AirCover for Hosts",
                "Hosting resources",
                "Community forum",
                "Hosting responsibly",
                "Join a free Hosting class",
                "Find a co-host",
            ],
        },
        {
            title: "Airbnb",
            links: [
                "Newsroom",
                "New features",
                "Careers",
                "Investors",
                "Airbnb.org emergency stays",
            ],
        },
    ];

    return (
        <div 
        className="grid md:grid-cols-3 gap-6 px-6 py-8 bg-gray-50 font-semibold text-gray-700 px-10">
            {sections.map((section, index) => (
                <div key={index}>
                    <h3 className="font-bold mb-2">{section.title}</h3>
                    <ul className="space-y-3">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:underline">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterLinks;
