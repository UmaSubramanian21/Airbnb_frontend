export default function HostInfo() {
    return (
      <div className="flex items-center gap-4 my-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Host Avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">Hosted by Alex</h2>
          <p className="text-gray-500 text-sm">Superhost · 4 years hosting</p>
        </div>
      </div>
    );
  }
  