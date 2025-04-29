export default function PropertyFeatures() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <FeatureItem title="Self check-in" description="Check yourself in with the lockbox." icon="🔑" />
        <FeatureItem title="Fast Wi-Fi" description="Perfect for working remotely." icon="📶" />
        <FeatureItem title="Free parking" description="Park your car on premises for free." icon="🚗" />
        <FeatureItem title="Pet Friendly" description="Bring your pets along!" icon="🐶" />
      </div>
    );
  }
  
  function FeatureItem({ title, description, icon }) {
    return (
      <div className="flex gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  