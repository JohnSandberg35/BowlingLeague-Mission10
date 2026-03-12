// This type represents the shape of a single bowler object
// returned from the ASP.NET API
// Fields are in camelCase to match standard JSON conversion from C#
export type Bowler = {
  bowlerFirstName: string | null;
  bowlerMiddleInit: string | null;
  bowlerLastName: string | null;
  bowlerAddress: string | null;
  bowlerCity: string | null;
  bowlerState: string | null;
  bowlerZip: string | null;
  bowlerPhoneNumber: string | null;
  teamName: string | null;
};