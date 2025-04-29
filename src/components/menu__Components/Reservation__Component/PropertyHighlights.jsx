export default function PropertyHighlights() {
    return (
      <div className="flex flex-col gap-4 mt-6">
        <HighlightItem
          icon="🏠"
          title="Entire home"
          description="You’ll have the entire villa to yourself."
        />
        <HighlightItem
          icon="🧹"
          title="Enhanced Clean"
          description="This host committed to Airbnb's 5-step enhanced cleaning process."
        />
        <HighlightItem
          icon="📍"
          title="Great Location"
          description="95% of recent guests gave the location a 5-star rating."
        />
      </div>
    );
  }
  
  function HighlightItem({ icon, title, description }) {
    return (
      <div className="flex gap-4 items-start">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  