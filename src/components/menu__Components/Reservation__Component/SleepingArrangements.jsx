export default function SleepingArrangements() {
    return (
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Where you'll sleep</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BedCard title="Bedroom 1" type="1 king bed" />
          <BedCard title="Bedroom 2" type="1 queen bed" />
          <BedCard title="Bedroom 3" type="2 single beds" />
          <BedCard title="Bedroom 4" type="1 double bed" />
        </div>
      </div>
    );
  }
  
  function BedCard({ title, type }) {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{type}</p>
      </div>
    );
  }
  