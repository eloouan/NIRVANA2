const commutesPerYear = 260 * 2;
const litresPerKM = 10 / 100;
const gasLitreCost = 1.5;
const litreCostKM = litresPerKM * gasLitreCost;
const secondsPerDay = 60 * 60 * 24;

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: DistanceProps) {
  const singleCommuteDuration = leg.duration.value;
  const entireDayCommute = singleCommuteDuration * 2;

  //console.log(leg); to check the data in the console and work off of that later on
  if (!leg.distance || !leg.duration) return null;

  const days = Math.floor(
    (commutesPerYear * leg.duration.value) / secondsPerDay
  );
  const cost = Math.floor(
    (leg.distance.value / 1000) * litreCostKM * commutesPerYear
  );

  return (
    <div>
      <p>
        That place is <span className="highlight">{leg.distance.text}</span>{" "}
        away. It'll waste <span className="highlight">{days}</span> day
        {days == 1 ? "" : "s"} of your life and'll cost you{" "}
        <span className="highlight">
          ${new Intl.NumberFormat().format(cost)}
        </span>
        !
      </p>

      <p>
        Après passer <span className="highlight">{leg.duration.text}</span> à
        l'aller dans une Merco ça vaaaaa (Sami le 🐐)
      </p>
    </div>
  );
}